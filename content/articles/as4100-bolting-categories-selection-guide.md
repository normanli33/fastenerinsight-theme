# Choosing the Right Bolt: A Practical Guide to AS 4100 Bolting Categories

If you've ever stared at a structural drawing and seen a callout like "8.8/TF" or "4.6/S" and wondered what it actually means for the bolts you're about to order, you're not alone. AS 4100 — Australia's structural steel design standard — organises bolted connections around three variables working together: **strength grade**, **tightening method**, and **joint type**. Get any one of the three wrong and you can end up with a connection that's technically the "right" bolt but the wrong category entirely.

This article breaks down how the system works and, more importantly, what you actually need to think through when selecting fasteners against an AS 4100 spec.

## The three-part naming system

Every AS 4100 bolting category is built from the same formula:

**Strength grade** + **/** + **tightening method** (+ **joint type**, where relevant)

- **Strength grade** — 4.6 (commercial), 8.8 (high-strength structural), or 10.9 (since AS 4100:2020 formally incorporated Grade 10.9 alongside the EN 14399 HR assembly types)
- **Tightening method** — **S** for snug-tight, **T** for fully tensioned
- **Joint type** — only applies to fully tensioned bolts: **B** for bearing-type, **F** for friction-type

That gives you the four categories you'll meet on almost every project:

| Category | Grade | Tightening | Joint type | Where it typically shows up |
|---|---|---|---|---|
| 4.6/S | Commercial | Snug-tight | Bearing | Purlin cleats, handrails, temporary works, secondary members |
| 8.8/S | High-strength | Snug-tight | Bearing | The default for flexible (simple/pinned) connections in Australian practice |
| 8.8/TB | High-strength | Fully tensioned | Bearing | The default for rigid connections — moment frames, primary structure |
| 8.8/TF | High-strength | Fully tensioned | Friction (slip-critical) | Connections where any slip at serviceability is unacceptable |

Grade 10.9 versions of all three tensioned categories (10.9/S, 10.9/TB, 10.9/TF) exist for connections needing more capacity per bolt than 8.8 can deliver without going up a diameter.

## What each variable is actually telling you

It helps to think of the three parts of the code as answering three separate questions.

**Strength grade — how much can one bolt carry?**
This is the material property: 4.6 bolts have a minimum tensile strength around 400 MPa, 8.8 around 830 MPa. It's a straightforward capacity question, and for a given diameter, an 8.8 bolt simply carries more load than a 4.6.

**Tightening method — how was it installed, and how confident can we be in that?**
Snug-tight means the plies were drawn into firm contact by hand (a standard podger spanner) or a few hits of an impact wrench — no measured preload, no calibration, no torque-controlled procedure. Full tensioning means the bolt is deliberately preloaded to a specified minimum tension using a controlled, verifiable method (part-turn, torque control, direct tension indicators). This isn't a strength distinction so much as a **quality assurance** one — full tensioning comes with mandatory inspection under AS 4100, snug-tight doesn't.

**Joint type — how does the connection actually transfer load?**
This only matters once you've committed to full tensioning. A bearing-type joint (TB) still transfers load through the bolt shank bearing against the hole, same as a snug-tight joint — the tensioning is there to control fatigue and vibration-loosening, not to change the load path. A friction-type joint (TF) transfers load through clamping friction between the plies, and the bolt shear capacity is almost secondary. This is why 8.8/S and 8.8/TB have the *same* ultimate shear capacity on paper — they resist load the same way. 8.8/TF is genuinely different: lower nominal shear capacity, but no slip until well past working load.

## What needs to be considered when selecting fasteners

Once you understand the naming logic, selection comes down to working backwards from the connection's actual requirements. Here's the checklist that matters in practice.

### 1. What load path does the connection actually need?

This is the first fork in the road. If slip between plies at serviceability load is genuinely a problem — think bracing connections, connections near openings, anything where a small amount of movement causes a serviceability issue or feeds into a fatigue-sensitive detail — you need a friction-type joint (TF). If the connection can tolerate ordinary bearing behaviour, bearing-type (S or TB) is cheaper and simpler to install and inspect. Specifying TF where it isn't needed is one of the more common ways a design ends up more expensive than it has to be.

### 2. Is fatigue or vibration a factor?

Snug-tight bolts can loosen under repeated load cycling or vibration — think machinery mounts, crane runways, anything with cyclic or dynamic loading. If that's the environment, you're generally looking at a fully tensioned category (TB at minimum, TF if slip resistance also matters), because the controlled preload resists self-loosening in a way snug-tight simply can't guarantee.

### 3. What inspection regime can the project actually support?

This is the practical, budget-facing consideration that often gets missed at spec stage. Snug-tight categories (4.6/S, 8.8/S) require the site inspector to confirm the correct bolt type and count — that's it. Fully tensioned categories require verified tensioning procedure, calibrated equipment, and documented inspection per AS 4100. That inspection cost is a real line item, and on a large connection count it adds up fast. If a drawing calls for 8.8/TB or 8.8/TF where the connection genuinely doesn't need it, it's worth raising with the engineer before quoting — not after.

### 4. Is the connection primary or secondary structure?

Rigid, primary connections (moment frames, main member splices) in Australian practice default to 8.8/TB. Flexible, secondary connections (simple shear connections, bracing, purlin cleats) commonly use 8.8/S or, for genuinely non-critical members, 4.6/S. Matching the category to the structural role — rather than defaulting to "high-strength everywhere" — keeps both cost and inspection burden proportionate to the actual risk.

### 5. Does the drawing callout actually specify a complete category?

A drawing or spec that just says "8.8 bolts" without an S/TB/TF suffix is incomplete information from a procurement standpoint. The grade alone doesn't tell you what tightening method the connection needs, what inspection regime applies, or what installation hardware (torque wrenches, direct tension indicators, load-indicating washers) the installer needs on site. This is worth flagging back to the design source rather than assuming — the wrong assumption here can mean supplying bolts that are technically the right grade but installed to the wrong procedure.

### 6. Corrosion protection and environment

AS 4100 governs the structural category, but it doesn't tell you the coating. Galvanised, mechanically galvanised, or other coatings need to be checked for compatibility with the tensioning method — heavily galvanised threads can affect achievable preload and torque-tension relationships in fully tensioned joints, which is why coating thickness and lubrication condition matter enough that pre-installation verification testing is often specified for TB/TF connections in coated bolts.

### 7. Bolt hole condition and thread position

Not part of the category name itself, but tied to it in design: whether threads are included or excluded from the shear plane changes the nominal shear capacity materially, and standard vs oversize/slotted holes affect both bearing capacity and, for TF joints, the achievable slip resistance. When cross-checking a supplier quote against a drawing, these details need to line up with the bolting category quoted, not just the grade and diameter.

## The bottom line

AS 4100's three-part system — grade, tightening, joint type — isn't just classification for its own sake. Each part maps to a real decision: how much load can this bolt carry, how confident can we be in the installed preload, and how does this joint actually transfer force. Selecting the right fastener means working through those three questions in order, checking them against the connection's actual structural role, and not defaulting to the most expensive category just because it sounds more robust. A properly specified 8.8/S connection where slip resistance isn't required will outperform an over-specified 8.8/TF connection on cost and installation time, for exactly the same structural outcome.

---

*This article covers AS 4100's structural bolting categories for general reference. Always confirm the specific bolting category against the project's structural drawings and specification, and consult a structural engineer for connection design decisions.*
