---
title: "MIL-Spec Fasteners: How to Prepare an Accurate RFQ"
slug: mil-spec-fasteners-how-to-prepare-an-accurate-rfq
description: "A military reference controls far more than size and material. How to check document status, decode slash sheets and part numbers, and separate MIL requirements from customer add-ons before an RFQ reaches a supplier."
date: 2026-10-08
tags:
  - Standards
  - Procurement
  - Quality Assurance
  - Fasteners
---

# MIL-Spec Fasteners: How to Prepare an Accurate RFQ

A customer enquiry reading **"1/2-13 UNC-3A × 2 socket head cap screw, MS16995, 316"** looks like a commercial order. It isn't. Depending on the document, a military reference can control dimensions, thread class, material, mechanical properties, finish, marking, inspection, and traceability.

The buyer's job is not to rewrite that requirement. It is to work out what the reference actually controls, whether it is current, and what the customer has added on top — then make all three unambiguous to the supplier.

## Know What Kind of Document You're Reading

"MIL-Spec" is shorthand for a family of documents, not a single specification.

| Prefix | What it is | Fastener example |
|---|---|---|
| **MIL-DTL** | Detail specification — design and technical requirements | MIL-DTL-1222 |
| **MIL-PRF** | Performance specification — required performance, not design | Less common for standard fasteners |
| **MIL-STD** | Practices, test methods, sampling, interfaces | MIL-STD-1916 (sampling) |
| **MIL-S, MIL-B, MIL-N…** | Older numbering, still active on many drawings | MIL-S-24149 |
| **MS** | Military Standard sheet / part-number system | MS16995 |
| **NAS / NASM** | Aerospace industry standards; many MS sheets transferred here | NASM16995 |

The format of these documents is itself standardised: MIL-STD-961 for defence specifications and MIL-STD-962 for defence standards. **The prefix tells you the document type, not the product requirement** — you still need the document, revision, slash sheet, and part number.

## Check Status in ASSIST First

Look up every MIL reference in the DoD **ASSIST Quick Search** database. A document may be Active, Inactive for New Design (still usable for reprocurement), or Cancelled — and a cancellation notice usually names the superseding document.

MS16995 (CRES socket head cap screw, UNC-3A) is a typical case: it was cancelled by Notice 1 in June 1998 and superseded by NASM16995.

**Keep the customer's reference and add the current one — "MS16995-xx / NASM16995" — rather than deleting the legacy number without written authorisation.**

## Find the Slash Sheet and the Part Number

General specifications set the common rules; slash sheets define the product. MIL-S-24149 covers weld studs and ferrules in general, but **two different slash sheets cover CRES studs**: /3 (Type V, direct-energy arc welding) and /6 (Type VIII, capacitor-discharge welding). "CRES weld stud to MIL-S-24149" therefore does not define a product. State the slash sheet, type, class, style, and ferrule.

For screws and bolts, match the description against the standard's part-number table and send **both the military part number and the full description**. Defence distributors often stock by MS/NAS number, and the description acts as a cross-check.

## The "316 + A4-80" Trap

Enquiries often stack a military reference with commercial material and strength designations. Read each one separately:

- **MS16995 / NASM16995** parts are 300-series CRES — distributor records commonly list 302 or 303 — with a minimum tensile strength around 80 ksi (≈ 550 MPa). **316 is not the standard material**, so a 316 part is a deviation, not a catalogue part number.
- **A4-80** (ISO 3506-1) means an austenitic A4 stainless at property class 80: 800 MPa minimum tensile. That is well above the MS16995 level, so it is a separate, additional requirement — not something an MS16995 part delivers by default.

When the requirements conflict, resolve it with the customer *before* quoting. The same discipline applies to "CRES": **do not convert CRES to 316 on your own, and do not drop "316" when the customer specified it.**

## Use Thread Class and Length as Error Checks

Unified tolerance classes carry a built-in sanity check: **A = external thread, B = internal**, with class 3 tighter than class 2. A "weld stud, 5/16-24 UNF-2B" is either an internally threaded stud or a typo — confirm against the drawing.

Length needs the same scrutiny. Weld studs shorten during welding, so a length that matches no standard ordering length may be an installed dimension, not the stud length to manufacture.

## Treat Certification as a Deliverable

For high-reliability items such as MIL-DTL-1222 studs, bolts, screws, and nuts (written for submarine safety and similar applications), marking, inspection, and traceability are part of the product. A physically identical part without them may be unusable.

Name the documents in the RFQ — Certificate of Conformance, material test report, mechanical and plating certificates, lot/heat traceability — and check export-control restrictions before sending drawings to overseas suppliers.

## A Better RFQ Line

Once the customer has confirmed which requirement governs:

> **SOCKET HEAD CAP SCREW, 1/2"-13 UNC-3A × 2.000" LG, MS16995 / CURRENT NASM16995, CRES, PASSIVATED. SUPPLIER TO QUOTE APPLICABLE PART NUMBER AND CONFIRM FULL COMPLIANCE. COC AND MATERIAL CERTIFICATION REQUIRED.**
>
> **ADDITIONAL CUSTOMER REQUIREMENT (if confirmed): AISI 316 MATERIAL AND ISO 3506-1 A4-80 MECHANICAL PROPERTIES. NOT STANDARD FOR MS16995 — SUPPLIER TO CONFIRM FEASIBILITY AND PROVIDE TEST CERTIFICATION.**

This separates what the military standard requires from what the customer has added.

## Key Takeaways

**Buyers:** Check ASSIST, quote the part number and the description, and never send a conflict to the supplier to resolve. "Same size and thread" does not make a commercial part an equivalent.

**Engineers:** Material, strength class, and dimensional standard are three separate requirements. A 316 A4-80 screw and an MS16995 screw are different parts.

**Quality & documentation:** Specify certificates and traceability at RFQ stage, not after production. Retain the original MIL reference alongside any superseding document.

## Bottom Line

A good MIL-Spec RFQ answers three questions without ambiguity: what exact product is required, which specifications and additional requirements apply, and what evidence proves compliance. If any answer is uncertain, clarify first. A one-day query costs far less than a lot made to the wrong thread class, material, or revision.

*Related: [ISO 3506 stainless property classes](https://blog.fastenerinsight.com/tag/iso-3506/) · [ISO 3269 acceptance inspection](https://blog.fastenerinsight.com/iso-3269-acceptance-inspection-the-complete-guide-to-fastener-sampling/)*
