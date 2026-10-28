
(function () {
  'use strict';

  var config = document.getElementById('fi-search-config');
  var API_KEY = config.dataset.key;
  var API = config.dataset.site.replace(/\/$/, '') + '/ghost/api/content/posts/?key=' + API_KEY +
            '&limit=all&include=tags&formats=plaintext&fields=title,url,excerpt,plaintext,published_at,reading_time';
  var SUGGESTIONS = ['DIN 931', 'ASTM A325', 'socket head cap screws', 'EN 3.1 certificates', 'EN 10204', 'ISO 898', 'stainless steel', 'zinc flake', 'torque', 'traceability', 'MIL-spec'];

  var input = document.getElementById('q');
  var resultsEl = document.getElementById('results');
  var metaEl = document.getElementById('meta');
  var chipsEl = document.getElementById('chips');
  var form = document.getElementById('searchForm');

  var posts = null;
  var ready = false;
  var timer = null;

  /* ---------- text helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function normDots(s) {
    return String(s || '').toLowerCase().replace(/\b(iso|din|astm|asme|sae|en|as)[ -]*(?=[a-z]?\d)/g, '$1 ').replace(/[^a-z0-9.+\/-]+/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function words(s) {
    return normDots(s).replace(/[^a-z0-9]+/g, ' ').trim().split(' ').filter(Boolean);
  }
  function stemKey(w) { return w.length <= 3 ? w : w.slice(0, 4); }
  function rxEsc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function stripTags(html) {
    return String(html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  /* ---------- index ---------- */
  function prep(p) {
    var tagNames = (p.tags || []).map(function (t) { return t.name; }).join(' ');
    var body = p.plaintext || stripTags(p.excerpt);
    var o = {
      title: p.title,
      url: p.url,
      excerpt: stripTags(p.excerpt),
      body: body,
      published: p.published_at,
      read: p.reading_time,
      tag: (p.tags && p.tags[0]) ? p.tags[0].name : '',
      tagText: tagNames
    };
    o.titleDots = normDots(p.title);
    o.titleKeys = {};
    words(p.title).forEach(function (w) { o.titleKeys[stemKey(w)] = 1; });
    o.tagDots = normDots(tagNames);
    o.tagKeys = {};
    words(tagNames).forEach(function (w) { o.tagKeys[stemKey(w)] = 1; });
    o.bodyDots = normDots(body);
    o.bodyKeys = {};
    o.bodyCounts = {};
    words(body).forEach(function (w) {
      var k = stemKey(w);
      o.bodyKeys[k] = 1;
      o.bodyCounts[k] = (o.bodyCounts[k] || 0) + 1;
    });
    return o;
  }

  function loadIndex(cb) {
    var cached = null;
    try {
      cached = JSON.parse(sessionStorage.getItem('fi_search_index_v2_' + config.dataset.site + '') || 'null');
    } catch (e) { cached = null; }

    function fromData(data) {
      posts = data.map(prep);
      ready = true;
      cb();
    }
    if (cached && cached.at && (Date.now() - cached.at) < 15 * 60 * 1000 && cached.posts && cached.posts.length) {
      fromData(cached.posts);
      return;
    }
    fetch(API, { headers: { 'Accept': 'application/json' } })
      .then(function (r) { if (!r.ok) throw new Error('Search unavailable'); return r.json(); })
      .then(function (d) {
        if (!Array.isArray(d.posts)) throw new Error('Invalid search response');
        var list = d.posts;
        try {
          sessionStorage.setItem('fi_search_index_v2_' + config.dataset.site + '', JSON.stringify({ at: Date.now(), posts: list }));
        } catch (e) { /* quota — ignore */ }
        fromData(list);
      })
      .catch(function () {
        metaEl.textContent = 'Search could not be loaded. Please check your connection and retry.';
        document.getElementById('fi-search-retry').hidden = false;
      });
  }

  /* ---------- query ---------- */
  function parseQuery(q) {
    return normDots(q).split(/\s+/).filter(Boolean).map(function (t) {
      var cleaned = t.replace(/^[^a-z0-9.+\/-]+|[^a-z0-9.+\/-]+$/g, '');
      if (!cleaned) return null;
      if (/^[a-z]+$/.test(cleaned)) return { raw: cleaned, type: 'word', k: stemKey(cleaned) };
      return { raw: cleaned, type: 'str' };
    }).filter(Boolean);
  }

  function matchWeight(p, t) {
    if (t.type === 'word') {
      if (p.titleKeys[t.k]) return 16;
      if (p.tagKeys[t.k]) return 9;
      if (p.bodyKeys[t.k]) return 4;
      return 0;
    }
    if (p.titleDots.indexOf(t.raw) >= 0) return 16;
    if (p.tagDots.indexOf(t.raw) >= 0) return 9;
    if (p.bodyDots.indexOf(t.raw) >= 0) return 4;
    return 0;
  }

  function tf(p, t) {
    if (t.type === 'word') return p.bodyCounts[t.k] || 0;
    var i = 0, n = 0;
    while ((i = p.bodyDots.indexOf(t.raw, i)) >= 0) { n++; i += t.raw.length; }
    return n;
  }

  function score(p, terms, phrase, idf) {
    var total = 0, hits = 0;
    for (var i = 0; i < terms.length; i++) {
      var m = matchWeight(p, terms[i]);
      if (m > 0) {
        hits++;
        total += m * idf[i] + Math.min(14, tf(p, terms[i])) * 1.5;
      }
    }
    if (!hits) return { score: 0, hits: 0 };
    if (phrase) {
      if (p.titleDots.indexOf(phrase) >= 0) total += 24;
      else if (p.tagDots.indexOf(phrase) >= 0) total += 12;
      else if (p.bodyDots.indexOf(phrase) >= 0) total += 8;
    }
    return { score: total, hits: hits };
  }

  function highlight(text, terms) {
    var patterns = terms.map(function (t) { return rxEsc(t.raw); }).sort(function(a,b){return b.length-a.length;});
    if (!patterns.length) return esc(text);
    var re = new RegExp(patterns.join('|'), 'gi'), result = '', pos = 0;
    String(text || '').replace(re, function(m, offset) {
      result += esc(String(text).slice(pos, offset)) + '<mark>' + esc(m) + '</mark>';
      pos = offset + m.length;
      return m;
    });
    return result + esc(String(text || '').slice(pos));
  }

  function snippet(p, terms) {
    var body = p.body || p.excerpt || '';
    var lower = body.toLowerCase();
    var idx = -1;
    for (var i = 0; i < terms.length; i++) {
      var i2 = lower.indexOf(terms[i].raw);
      if (i2 >= 0 && (idx < 0 || i2 < idx)) idx = i2;
    }
    if (idx < 0) idx = 0;
    var start = Math.max(0, idx - 100);
    var end = Math.min(body.length, idx + 190);
    if (start > 0) {
      var sp = body.indexOf(' ', start);
      if (sp > start && sp < idx) start = sp + 1;
    }
    if (end < body.length) {
      var ep = body.lastIndexOf(' ', end);
      if (ep > idx) end = ep;
    }
    var text = body.slice(start, end).trim();
    return (start > 0 ? '… ' : '') + highlight(text, terms) + (end < body.length ? ' …' : '');
  }

  function fmtDate(iso) {
    if (!iso) return '';
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString('en-AU', { month: 'short', year: 'numeric' });
  }

  /* ---------- render ---------- */
  function renderChips(show) {
    if (!show) { chipsEl.innerHTML = ''; return; }
    chipsEl.innerHTML = '<span class="lbl">Try:</span>' + SUGGESTIONS.map(function (s) {
      return '<button type="button" data-q="' + esc(s) + '">' + esc(s) + '</button>';
    }).join('');
  }

  function run() {
    var q = input.value.trim();
    if (!q) {
      metaEl.textContent = '';
      resultsEl.innerHTML = '';
      renderChips(true);
      return;
    }
    renderChips(false);
    if (!ready) { metaEl.textContent = 'Loading search index…'; return; }

    var terms = parseQuery(q);
    if (!terms.length) { metaEl.textContent = 'Type a word to search.'; resultsEl.innerHTML = ''; return; }

    var phrase = normDots(q);

    // inverse document frequency: rare words (e.g. "certificates") outweigh common ones (e.g. "en")
    var idf = terms.map(function (t) {
      var df = 0;
      for (var j = 0; j < posts.length; j++) if (matchWeight(posts[j], t) > 0) df++;
      return Math.log((posts.length + 1) / (df + 1)) + 1;
    });

    var scored = [];
    for (var i = 0; i < posts.length; i++) {
      var s = score(posts[i], terms, phrase, idf);
      if (s.score > 0) scored.push({ p: posts[i], s: s.score, hits: s.hits });
    }

    var all = terms.length;
    var strict = scored.filter(function (x) { return x.hits === all; });
    var near = all > 1 ? scored.filter(function (x) { return x.hits >= all - 1; }) : [];

    var list, note = '';
    if (strict.length) {
      list = strict;
    } else if (near.length) {
      // allow one missing word so a near-miss never dead-ends, but never fall back to noise
      near.sort(function (a, b) {
        if (b.hits !== a.hits) return b.hits - a.hits;
        return b.s - a.s;
      });
      list = near;
      note = 'no article contains every word — showing the closest matches';
    } else {
      list = [];
    }

    list.sort(function (a, b) { return b.s - a.s; });
    list = list.slice(0, 40);

    if (!list.length) {
      metaEl.textContent = 'No articles match “' + q + '”.';
      resultsEl.innerHTML = '<li class="empty">Nothing found. Try a standard number (ISO 898, EN 10204, ASTM A325), ' +
        'a material (316, 1.4301, class 8.8) or a process (zinc flake, torque, traceability).</li>';
      renderChips(true);
      return;
    }

    metaEl.textContent = list.length + (list.length === 1 ? ' article matches ' : ' articles match ') + '“' + q + '”' + (note ? ' — ' + note : '');

    resultsEl.innerHTML = list.map(function (x) {
      var p = x.p;
      return '<li>' +
        '<h2><a href="' + esc(p.url) + '">' + highlight(p.title, terms) + '</a></h2>' +
        '<p>' + snippet(p, terms) + '</p>' +
        '<div class="row">' +
          (p.tag ? '<span class="tag">' + esc(p.tag) + '</span>' : '') +
          (p.published ? '<span>' + esc(fmtDate(p.published)) + '</span>' : '') +
          (p.read ? '<span>' + esc(p.read) + ' min read</span>' : '') +
        '</div>' +
      '</li>';
    }).join('');
  }

  /* ---------- wiring ---------- */
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var q = input.value.trim();
    var url = q ? ('/search/?q=' + encodeURIComponent(q)) : '/search/';
    history.replaceState(null, '', url);
    run();
  });

  input.addEventListener('input', function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      var q = input.value.trim();
      history.replaceState(null, '', q ? ('/search/?q=' + encodeURIComponent(q)) : '/search/');
      run();
    }, 160);
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { input.value = ''; run(); }
  });

  chipsEl.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-q]');
    if (!b) return;
    input.value = b.getAttribute('data-q');
    input.focus();
    clearTimeout(timer);
    history.replaceState(null, '', '/search/?q=' + encodeURIComponent(input.value));
    run();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== input) {
      var tag = document.activeElement && document.activeElement.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      e.preventDefault();
      input.focus();
      input.select();
    }
  });

  var start = new URLSearchParams(location.search).get('q') || '';
  if (start) input.value = start;
  renderChips(!start);
  document.getElementById('fi-search-retry').addEventListener('click', function () {
    this.hidden = true;
    metaEl.textContent = 'Loading search index…';
    loadIndex(run);
  });
  metaEl.textContent = 'Loading search index…';
  loadIndex(run);
})();
