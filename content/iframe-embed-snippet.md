# Embedding a Streamlit Tool in a Ghost Post

Paste this into an **HTML card** in the Ghost editor, wherever the tool
should appear in the post body. It relies on the `.tool-embed` /
`.tool-embed-frame` CSS already shipped in
`ghost-theme/fastenerinsight/assets/css/screen.css`, which:

- uses the padding-bottom aspect-ratio trick so the frame is fully
  responsive without JS,
- gives the iframe `border: 0` and a single subtle container border/shadow
  so there's no "frame within a frame" double-border look,
- appends `?embed=true` to the Streamlit URL, which the app reads to hide
  Streamlit's own header, hamburger menu, and footer — eliminating the
  double-scrollbar / double-chrome problem entirely.

```html
<div class="tool-embed">
  <div class="tool-embed-frame">
    <iframe
      src="https://tools.fastenerinsight.com/torque-converter/?embed=true"
      loading="lazy"
      title="Fastener Torque Converter"
      allow="clipboard-write"
    ></iframe>
  </div>
  <p class="tool-embed-caption">
    Interactive tool &middot; runs live, no login required.
  </p>
</div>
```

## Tuning the height

The default aspect ratio (`padding-bottom: 70%` on desktop, `130%` on
mobile, in `screen.css`) fits the torque converter. For a taller tool, add
an inline override on that one embed instead of changing the shared class:

```html
<div class="tool-embed">
  <div class="tool-embed-frame" style="padding-bottom: 90%;">
    <iframe src="https://tools.fastenerinsight.com/grade-equivalency/?embed=true"
            loading="lazy" title="Grade Equivalency Lookup"></iframe>
  </div>
</div>
```

## Why this avoids double scrollbars

The scrollbar problem in Ghost/Streamlit embeds almost always comes from
one of two things — both handled here:

1. **The iframe itself scrolls independently of the page.** Fixed by giving
   the Streamlit app `initial_sidebar_state="collapsed"` and hiding its
   `header`/`footer`/toolbar via injected CSS (see `app.py`), so the app's
   content height matches the iframe height instead of growing a nested
   scroll region.
2. **The outer wrapper has its own scroll/border chrome.** Fixed by using
   the padding-bottom aspect-ratio container instead of a fixed-height
   `<iframe>` with `scrolling="auto"` — there's only one scroll surface
   (the page itself), and the iframe has no visible border of its own.
