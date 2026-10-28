# FastenerInsight

A niche technical blog and resource hub bridging engineering specifications
(ISO / DIN / ASME / AS fastener standards) and procurement reality, built on
a hybrid **Ghost CMS + Streamlit** architecture.

## Directory structure

```
fastenerinsight-theme/
├── ghost-theme/
│   └── fastenerinsight/            # Ghost theme, zip this folder to upload
│       ├── package.json            # Theme metadata + Ghost config
│       ├── default.hbs             # Base layout (header/footer, ghost_head/foot)
│       ├── index.hbs               # Homepage (hero + article grid + tools section)
│       ├── post.hbs                # Long-form post template
│       ├── partials/
│       │   ├── hero.hbs
│       │   ├── article-card.hbs
│       │   └── tools-section.hbs
│       └── assets/
│           ├── css/screen.css      # Monochromatic design system
│           └── js/
├── streamlit-tools/
│   └── torque-converter/
│       ├── app.py                  # Fastener Torque Converter (Nm/ft-lb/in-lb)
│       ├── requirements.txt
│       └── .streamlit/config.toml  # Theme matched to the site palette
└── content/
    ├── homepage-seo.md             # Meta title/description draft
    ├── about-page.md               # ~150-word About page copy
    └── iframe-embed-snippet.md     # Embed HTML + rationale
```

## Design system

Monochromatic palette — slate, steel blue, white, dark gray — defined as
CSS custom properties at the top of `assets/css/screen.css`:

| Token | Hex | Use |
|---|---|---|
| `--fi-black` | `#111418` | Headings, primary text |
| `--fi-slate-900` | `#232a31` | Body text |
| `--fi-slate-500` | `#626d78` | Muted text, meta |
| `--fi-slate-100` | `#e4e8ec` | Borders, subtle backgrounds |
| `--fi-steel-700` | `#35526b` | Links, tags, accent |
| `--fi-charcoal` | `#1c2126` | Header/footer/hero inverse background |

Body copy runs at 17–18px with a 1.65–1.75 line-height and a 760px measure
in `.post-content` — sized for reading dense spec tables and torque values
without eye strain.

## 1. Deploying the Ghost theme

1. `cd ghost-theme && zip -r fastenerinsight.zip fastenerinsight -x ".*"`
2. In Ghost Admin → **Settings → Design → Change theme → Upload theme**,
   upload `fastenerinsight.zip`.
3. Activate the theme.
4. Create tags used by the templates: `standards`, `procurement` (Settings
   → Tags), and a Page at `/tools/` and `/about/` (see `content/about-page.md`).
5. Set homepage SEO under Settings → General → Meta Data using the values
   in `content/homepage-seo.md`.
6. For local theme development: `npm install -g gscan && gscan ghost-theme/fastenerinsight`
   to lint against Ghost's theme API, then run Ghost locally (`ghost install local`)
   and symlink the theme into `content/themes/`.

## 2. Deploying the Streamlit torque converter

The tool is deployed as its own small app (Streamlit Community Cloud,
Render, Fly.io, or a container behind your own reverse proxy) at a
subdomain like `tools.fastenerinsight.com`, then embedded via `<iframe>`.

```bash
cd streamlit-tools/torque-converter
pip install -r requirements.txt
streamlit run app.py
```

**Streamlit Community Cloud:** point it at this repo/folder, entry point
`streamlit-tools/torque-converter/app.py`. It will pick up
`requirements.txt` and `.streamlit/config.toml` automatically.

**Self-hosted (Docker/Nginx):** make sure no upstream layer sends
`X-Frame-Options: DENY` or a restrictive `Content-Security-Policy:
frame-ancestors` — Ghost needs to be able to iframe the tool's origin. If
you terminate TLS at Nginx, explicitly allow framing from your Ghost
domain, e.g.:

```
add_header Content-Security-Policy "frame-ancestors 'self' https://www.fastenerinsight.com";
```

## 3. Embedding a tool in a post

See `content/iframe-embed-snippet.md` for the exact HTML card snippet,
why it avoids double scrollbars/borders, and how to adjust height per-tool.

## Author persona (for placeholder copy)

Placeholder bylines and the About page position the author as a **supply
and demand planner** who recently completed **Harvard's CS50x** and uses
**Python/SQL** to build data-driven tooling (forecasting, exception
reporting, and the calculators on this site) — the throughline being
someone who manages a real supply chain and builds the tools they wish
existed, rather than a generalist blogger. See `content/about-page.md`
for the full draft.

## Blog article search

Upload and activate the updated theme, then create and publish a Ghost **Page** titled **Search** with URL slug **search**. Ghost automatically uses page-search.hbs for /search/. No page body is needed. Ensure this is a Page, not a post, and that no custom route overrides /search/.

The header Search link and homepage search form open this page. Search ranks article titles, tags and full text, with snippets, highlighted matches, suggested queries and retry handling. Try DIN 931, ISO898, ISO-898, ASTM A325, or socket head cap screws. The index covers published articles across all archive pages and is cached in the browser session for 15 minutes. Members-only article bodies remain subject to Ghost's public Content API permissions.

The theme setting **Search content api key** uses the existing public Content API key from this repository. If it has been rotated, create a custom integration in Ghost Admin and paste its Content API key into this setting. Never use an Admin API key.
