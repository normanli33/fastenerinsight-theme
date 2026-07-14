"""FastenerInsight — Fastener Torque Converter

Converts fastener torque values between Newton-meters (Nm), foot-pounds
(ft-lb), and inch-pounds (in-lb). Designed to be embedded via <iframe>
inside a Ghost blog post — see ?embed=true handling below.
"""

import streamlit as st

# ---------------------------------------------------------------------------
# Conversion factors (base unit: Nm)
# ---------------------------------------------------------------------------
NM_PER_FTLB = 1.3558179483314004
NM_PER_INLB = 0.11298482902946
UNITS = ("Nm", "ft-lb", "in-lb")

TO_NM = {
    "Nm": 1.0,
    "ft-lb": NM_PER_FTLB,
    "in-lb": NM_PER_INLB,
}


def convert(value: float, from_unit: str) -> dict:
    """Return {unit: converted_value} for all supported torque units."""
    nm_value = value * TO_NM[from_unit]
    return {
        "Nm": nm_value,
        "ft-lb": nm_value / NM_PER_FTLB,
        "in-lb": nm_value / NM_PER_INLB,
    }


# ---------------------------------------------------------------------------
# Page config + embed handling
# ---------------------------------------------------------------------------
st.set_page_config(
    page_title="Fastener Torque Converter — FastenerInsight",
    page_icon="🔩",
    layout="centered",
    initial_sidebar_state="collapsed",
)

query_params = st.query_params
is_embed = query_params.get("embed", "false").lower() == "true"

# ---------------------------------------------------------------------------
# Styling — monochromatic slate / steel-blue palette matching the
# FastenerInsight Ghost theme. When embedded, Streamlit's own chrome
# (header, hamburger menu, "Made with Streamlit" footer, top padding)
# is hidden so the tool sits flush inside the site's iframe wrapper.
# ---------------------------------------------------------------------------
EMBED_CHROME_CSS = """
    #MainMenu {visibility: hidden;}
    header {visibility: hidden; height: 0;}
    footer {visibility: hidden;}
    div[data-testid="stToolbar"] {visibility: hidden;}
    div[data-testid="stDecoration"] {visibility: hidden;}
    div[data-testid="stStatusWidget"] {visibility: hidden;}
    .block-container {
        padding-top: 1.75rem;
        padding-bottom: 1.5rem;
    }
""" if is_embed else ""

st.markdown(
    f"""
    <style>
        {EMBED_CHROME_CSS}

        :root {{
            --fi-black: #111418;
            --fi-slate-900: #232a31;
            --fi-slate-700: #3d4750;
            --fi-slate-500: #626d78;
            --fi-slate-300: #9aa5b1;
            --fi-slate-100: #e4e8ec;
            --fi-steel-700: #35526b;
            --fi-steel-500: #4d7690;
        }}

        html, body, [class*="css"] {{
            font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif;
        }}

        .block-container {{
            max-width: 640px;
        }}

        h1, h2, h3 {{
            color: var(--fi-black) !important;
            letter-spacing: -0.01em;
        }}

        .fi-tool-eyebrow {{
            font-family: "SFMono-Regular", Consolas, Menlo, monospace;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-size: 0.75rem;
            color: var(--fi-steel-700);
            margin-bottom: 0.25rem;
        }}

        .fi-result-card {{
            border: 1px solid var(--fi-slate-100);
            border-radius: 4px;
            padding: 14px 18px;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            background: #ffffff;
        }}

        .fi-result-card.is-active {{
            border-color: var(--fi-steel-500);
            background: var(--fi-slate-100);
        }}

        .fi-result-unit {{
            font-family: "SFMono-Regular", Consolas, Menlo, monospace;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: var(--fi-slate-500);
        }}

        .fi-result-value {{
            font-size: 1.6rem;
            font-weight: 700;
            color: var(--fi-black);
        }}

        div[data-testid="stNumberInput"] input {{
            font-size: 1.1rem;
        }}

        .stButton>button {{
            background-color: var(--fi-black);
            color: #ffffff;
            border-radius: 4px;
            border: none;
        }}
        .stButton>button:hover {{
            background-color: var(--fi-slate-900);
            color: #ffffff;
        }}
    </style>
    """,
    unsafe_allow_html=True,
)

# ---------------------------------------------------------------------------
# UI
# ---------------------------------------------------------------------------
if not is_embed:
    st.markdown('<div class="fi-tool-eyebrow">FastenerInsight &middot; Interactive Tool</div>', unsafe_allow_html=True)
    st.title("Fastener Torque Converter")
    st.caption(
        "Convert torque specifications between Newton-meters, foot-pounds, "
        "and inch-pounds — the three units you'll see across ISO, DIN, ASME, "
        "and AS fastener documentation."
    )
else:
    st.markdown("##### 🔩 Fastener Torque Converter")

col_value, col_unit = st.columns([2, 1])
with col_value:
    input_value = st.number_input(
        "Torque value",
        min_value=0.0,
        value=25.0,
        step=0.5,
        format="%.3f",
    )
with col_unit:
    input_unit = st.selectbox("Unit", UNITS, index=0)

results = convert(input_value, input_unit)

st.write("")
for unit in UNITS:
    active_class = "is-active" if unit == input_unit else ""
    st.markdown(
        f"""
        <div class="fi-result-card {active_class}">
            <span class="fi-result-unit">{unit}</span>
            <span class="fi-result-value">{results[unit]:,.3f}</span>
        </div>
        """,
        unsafe_allow_html=True,
    )

with st.expander("Reference: common bolt torque ranges"):
    st.markdown(
        """
        | Bolt size (metric) | Property class | Typical torque (dry) |
        |---|---|---|
        | M6 | 8.8 | 9–11 Nm (6.6–8.1 ft-lb) |
        | M8 | 8.8 | 22–25 Nm (16–18 ft-lb) |
        | M10 | 8.8 | 43–48 Nm (32–35 ft-lb) |
        | M12 | 8.8 | 75–83 Nm (55–61 ft-lb) |

        Always confirm torque values against the fastener manufacturer's
        datasheet and the applicable standard (ISO 898-1, DIN 267, ASME
        B18.2.1, or AS 1252) — this table is a rough reference only.
        """
    )

if not is_embed:
    st.markdown("---")
    st.caption(
        "Built by the FastenerInsight team in Python + Streamlit. "
        "[Back to the blog](https://www.fastenerinsight.com)"
    )
