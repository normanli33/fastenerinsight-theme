# Tapping Screws Decoded: Types, Points, and the Standards Behind Them

Tapping screws look like the simplest products in the catalogue — until an RFQ asks for a "Type C" and the buyer, the drawing, and the supplier each mean something different. This guide sorts the family into its functional types and maps them to the ISO, DIN, and ASME standards you'll actually see on drawings.

## Three Ways a Screw Makes Its Own Thread

Everything in this family does one of three things to the mating material:

| Function | How It Works | Best For | Trade-Off |
|---|---|---|---|
| **Thread-forming (tapping)** | Displaces material as it drives | Sheet metal, plastics | Radial stress in the part |
| **Thread-cutting** | Cuts a mating thread, producing chips | Thicker metal, brittle materials | Chips; lower stripping resistance |
| **Thread-rolling (chip-less forming)** | Cold-forms a metric thread in ductile metal | Machine-thread joints without a tapping operation | Needs ductile material, correct hole size |

Self-drilling (TEK) screws add a fourth trick — a drill point that makes its own hole first — but they're a big enough topic that we've covered them separately on this blog.

## The ISO System: Thread First, Then Head Styles

The metric system is cleanly layered. **ISO 1478** defines the tapping screw thread itself (the ST thread series) together with the two standard point forms:

- **Type C — cone (gimlet) point**: sharp, self-starting in sheet and plastics
- **Type F — flat (blunt) point**: for pre-punched or pre-drilled holes

Every ISO tapping screw product standard then combines that thread with a head and drive:

| ISO Standard | Product |
|---|---|
| ISO 1479 | Hexagon head tapping screws |
| ISO 7049 | Cross-recessed pan head tapping screws |
| ISO 7050 | Cross-recessed countersunk head tapping screws |
| ISO 14585 | Hexalobular (6-lobe) pan head tapping screws |
| ISO 14586 | Hexalobular countersunk head tapping screws |
| ISO 14587 | Hexalobular raised countersunk (oval) head tapping screws |

Most of these are supplied in either Type C or Type F point — so a complete metric callout names **standard + size + point type**: e.g., *ISO 14585 – ST4.2 × 19 – C*.

Thread-rolling screws for metric machine threads sit outside the ST system: look to **DIN 7500** for the product family and **ISO 7085** for mechanical requirements.

## DIN Legacy Numbers Still on Drawings

| DIN | Current ISO | Product |
|---|---|---|
| DIN 7981 | ISO 7049 | Pan head tapping (cross recess) |
| DIN 7982 | ISO 7050 | Countersunk tapping (cross recess) |
| DIN 7504 | ISO 15480 series | Self-drilling screws |

As with hex bolts and cap screws, treat the DIN numbers as legacy aliases: quote and certify to the ISO designation, but expect the DIN callout on older drawings for years yet.

## The ASME World: Letter Types Decoded

Inch-series tapping screws are classified by letter (and legacy number) types. These originated in **ASME B18.6.4**, whose content was consolidated in 2013 into **ASME B18.6.3** — *Machine Screws, Tapping Screws, and Metallic Drive Screws (Inch Series)* — which remains the governing standard today.

**Thread-forming types** (displace material, no chips):

| Type | Point / Thread | Typical Use |
|---|---|---|
| **A** | Sharp gimlet point, coarse spaced thread | Very thin sheet; legacy — superseded by AB |
| **AB** | Sharp gimlet point, finer spaced thread than A | Thin sheet metal, plastics; the modern default sharp-point screw |
| **B** | Blunt point, spaced thread, tapered entering threads | Heavier sheet and non-ferrous castings, pre-punched/drilled holes |
| **BP** | Type B thread with a cone point | Misaligned or hard-to-locate punched holes |
| **C** | Blunt point, **machine-screw pitch** thread | Forms a standard machine thread in metal; high drive torque |
| **TRS** | Thread-rolling screw, machine-screw thread | Chip-less machine threads in ductile metal — the inch cousin of DIN 7500 |

**Thread-cutting types** (cut a thread, produce chips):

| Type | Cutting Feature | Typical Use |
|---|---|---|
| **BF / BT (25)** | Spaced Type B thread with cutting flutes — BF multiple, BT one wide flute | Plastics, die castings, other brittle or friable materials |
| **D (1)** | Machine thread, single narrow flute | General metal, field replacement of machine screws |
| **F** | Machine thread, multiple cutting slots, blunt taper point | Heavy sections — cast iron, thick sheet, brass |
| **G** | Machine thread, single through-slot | Similar to D with more aggressive cutting |
| **T (23)** | Machine thread, fine chip-clearing cavity | Deep blind holes; low drive torque |
| **17** | Coarse spaced thread, sharp fluted point | Wood and soft materials |

**Drive screws:**

| Type | Description | Typical Use |
|---|---|---|
| **U** | Multi-start high-helix thread, blunt point, hammer-driven | Permanent assemblies — nameplates, tags; not removable |

The numbers in parentheses are the older numeric designations (Type 1 = D, Type 23 = T, Type 25 = BT) — both conventions still circulate on drawings and packaging, so treat them as aliases.

**The Type C trap:** inch **Type C** means a blunt-point thread-forming screw with machine-screw-pitch thread — a completely different product from ISO's cone-point Type C. If a drawing says "Type C" with no standard reference, confirm which system it belongs to before quoting. This single ambiguity causes more tapping screw mis-supply than any other.

## Worked Example: Reading a Full Callout

*Hexalobular socket pan head tapping screw, cone point* resolves to:

- **Function:** thread-forming tapping screw, ST thread per ISO 1478
- **Point:** Type C (cone)
- **Drive:** hexalobular internal (per ISO 10664)
- **Product standard:** **ISO 14585**

Standard, size, and point letter — three elements, zero ambiguity.

## The Bottom Line

Classify by function first (forming, cutting, rolling, drilling), then attach the head/drive product standard, and always state the point type in metric callouts. And whenever "Type C" appears without context, ask which world it comes from — ISO's cone point or ASME's machine-thread screw — before a container of the wrong product ships.
