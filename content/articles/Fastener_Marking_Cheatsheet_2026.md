---
title: "Fastener Head and Nut Marking Cheatsheet"
date: 2026-08-06
status: "reference aid"
tags: ["fasteners", "marking", "ISO", "DIN", "SAE", "ASTM", "ASME", "AS-NZS"]
---

# Fastener Head and Nut Marking Cheatsheet

> **Golden rule:** A dimensional standard is not automatically a strength or material grade. Standards such as DIN 931, DIN 933, ISO 4014, ISO 4017, ASME B18.2.1 and IFI-145 mainly identify product geometry. The property/material standard controls the required grade and manufacturer marking, unless the product standard explicitly includes mechanical and marking requirements.

Use this guide for receiving-screening only. The purchase order, applicable edition of the standard, product certificate and lot traceability govern acceptance.

## 1. Metric carbon and alloy steel — ISO 898

### Bolts, screws and studs — ISO 898-1

| Typical mark | Meaning | Key receiving check |
|---|---|---|
| Maker ID + `4.6` | Property class 4.6 | Check dimensions, thread and certificate separately |
| Maker ID + `8.8` | Property class 8.8 | Nominal tensile-strength relationship: 8 × 100 = 800 MPa |
| Maker ID + `10.9` | Property class 10.9 | Higher-strength quenched-and-tempered class |
| Maker ID + `12.9` | Property class 12.9 | Very-high-strength class; application and embrittlement controls matter |

The first number multiplied by 100 gives the nominal tensile-strength level in MPa. The second number is the nominal yield-to-tensile ratio expressed in tenths. This is a decoding relationship, not a substitute for test results.

### Nuts — ISO 898-2

| Typical nut mark | Meaning |
|---|---|
| Maker ID + `8` | Nut property class 8 |
| Maker ID + `10` | Nut property class 10 |
| Maker ID + `12` | Nut property class 12 |
| `04`, `05` etc. | Low-profile/thin-nut class system where applicable |

Do not mark a metric nut `8.8`: bolt property classes use two numbers; standard full-height nut classes normally use one class number.

## 2. Stainless steel — ISO 3506

| Typical mark | General interpretation |
|---|---|
| Maker ID + `A2-70` | Austenitic stainless grade family A2, property class 70 |
| Maker ID + `A4-70` | Austenitic stainless grade family A4, property class 70 |
| Maker ID + `A4-80` | A4 stainless, property class 80 |

`A2` or `A4` alone does not prove property class 70 or 80. The complete grade/property-class designation is required where marking applies. The mark identifies a standardized grade family and property class, not the exact heat chemistry or certificate traceability.

## 3. DIN legacy callouts and current references

| Legacy product callout | Current dimensional reference | Strength/material marking source |
|---|---|---|
| DIN 931, hex bolt, partial thread | DIN EN ISO 4014 | ISO 898-1 or ISO 3506-1 |
| DIN 933, hex screw, full thread | DIN EN ISO 4017 | ISO 898-1 or ISO 3506-1 |
| DIN 934, hex nut | DIN EN ISO 4032 or DIN EN ISO 8673 | ISO 898-2 or ISO 3506-2 |
| DIN 6914 structural HV bolt | DIN EN 14399-4 | EN 14399 assembly/system marking |

**Procurement rule:** `DIN 933 A4-80` is meaningful because DIN/ISO identifies the geometry and A4-80 identifies the stainless grade/property class. `DIN 933` by itself does not identify strength or stainless grade.

## 4. EN 14399 preloaded structural assemblies

| Component | Typical System HR mark |
|---|---|
| Bolt | Maker ID + `8.8 HR` or specified class/system mark |
| Nut | Maker ID + `8 HR` |
| Washer | Required manufacturer/system identification under the applicable part |

HR and HV are different assembly systems. Do not mix bolts, nuts and washers from different systems or unlinked manufacturing lots merely because dimensions appear compatible.

## 5. SAE inch-series bolts and screws — SAE J429

| Grade | Common visual grade identifier | Important caution |
|---|---|---|
| Grade 2 | No radial grade lines | Can resemble ungraded, commercial or exempt fasteners |
| Grade 5 | Three radial lines | Similar visual family can occur under ASTM A449 in applicable ranges |
| Grade 8 | Six radial lines | Similar visual family can occur under ASTM A354 Grade BD |

A manufacturer identification is separate from the radial grade identifier. Never identify the governing standard from radial lines alone.

## 6. SAE inch-series steel nuts — SAE J995

| Nut grade | Common grade identifier |
|---|---|
| Grade 5 | Two circumferential arcs/lines, 120° apart |
| Grade 8 | Two circumferential arcs/lines, 60° apart |

The nut mechanical standard is **SAE J995**, not SAE J429.

### Correct stack for a 5/8-11 UNC Grade 8 serrated flange nut

- **Geometry/serration:** IFI-145 or the customer drawing.
- **Thread:** 5/8-11 UNC-2B.
- **Mechanical properties:** SAE J995 Grade 8.
- **Mark:** manufacturer ID plus the J995 Grade 8 identifier.
- **Finish:** state `plain`, `plain/oiled`, plating or coating separately.
- **Packing:** state maximum carton mass separately.

ASME B18.16.4 is specifically a 90,000 psi serrated flange locknut product standard. It should not be treated as a generic dimensional reference for a SAE J995 Grade 8 product.

## 7. ASTM structural bolts and nuts

### ASTM F3125/F3125M structural bolts

| Product/grade | Typical mandatory grade symbol |
|---|---|
| Heavy-hex Grade A325 Type 1 | `A325` plus maker ID |
| Heavy-hex Grade A325 Type 3 | Underlined `A325` plus maker ID |
| Heavy-hex Grade A490 Type 1 | `A490` plus maker ID |
| Heavy-hex Grade A490 Type 3 | Underlined `A490` plus maker ID |
| Twist-off Grade F1852 | `A325TC` plus maker ID |
| Twist-off Grade F2280 | `A490TC` plus maker ID |
| Grade 144 structural assembly | `144`/applicable assembly mark plus maker ID |

### ASTM A563/A563M structural nuts

Common grade symbols include `C`, `C3`, `D`, `DH` and `DH3`, with the applicable maker identification. Type 3/weathering designations use the specified distinguishing treatment; do not infer Type 3 from colour or surface appearance.

## 8. ASTM pressure-service bolting — A193/A194

| Product standard | Common examples of grade marks |
|---|---|
| ASTM A193/A193M bolts and studs | `B7`, `B7M`, `B16`, `B8`, `B8M`, with maker identification and any required class/condition marks |
| ASTM A194/A194M nuts | `2H`, `2HM`, `7`, `7M`, `8`, `8M`, with maker identification and any required class/condition marks |

The `M` in grades such as B7M, B8M, 2HM or 7M is part of the ASTM grade designation. It does **not** mean that the thread is metric. The order must separately state inch or metric thread requirements and whether the ASTM `M` specification designation applies.

## 9. Other common ASTM systems

| Product | Typical marking concept | Procurement caution |
|---|---|---|
| ASTM F1554 anchor rods | Grade `36`, `55` or `105` when permanent marking is ordered | Permanent maker/grade identification is a supplementary requirement; call it up explicitly |
| ASTM F593 stainless bolts | Examples: `F593C`, `F593D`, `F593G`, `F593H` | Letter encodes alloy group, condition and applicable diameter range |
| ASTM F594 stainless nuts | Corresponding `F594C/D/G/H`, as applicable | Match alloy group and proof strength to the bolt |
| ASTM A307 general-purpose bolts | Grade B commonly uses `B`; Grade A may be unmarked/exempt | Absence of radial lines does not establish A307 Grade A |

## 10. AS/NZS structural bolt assemblies

For Australian structural work, treat AS/NZS 1252.1 bolt/nut/washer sets as traceable functional assemblies. The Australian Steel Institute identifies EN 14399-3 System HR property class 8.8 as the nominated alternative, with additional assembly types only where expressly specified. Do not interchange AS/NZS components with EN 14399 HR or HV components within one assembly.

Receiving checks should include manufacturer mark, property class/system mark, package and lot identification, SDoC/DoP where applicable, EN 10204 3.1 documentation where specified, and any Australian verification requirement.

## 11. What a head or nut mark does not prove

A correct-looking mark does not by itself establish:

- thread series, pitch, tolerance class or left-hand thread;
- coating or finish;
- exact material heat chemistry;
- heat/lot traceability;
- dimensional conformity;
- full mechanical-test compliance;
- corrosion, temperature, fatigue or hydrogen-embrittlement suitability;
- authenticity of the stamp.

## 12. Five-step receiving check

1. **Read the PO:** identify geometry, thread, grade, finish, standard edition and certification requirements.
2. **Identify every mark:** maker, property/grade class, structural system, type/class and special symbols.
3. **Match the package:** connect the fastener to its packing label, heat/lot/batch and trace number.
4. **Review documents:** MTR, EN 10204 3.1 certificate, SDoC, DoP or test report as required.
5. **Escalate ambiguity:** quarantine mixed, illegible, mismarked or undocumented product; do not infer grade from appearance.

## Primary references checked

- ISO 898-1:2013 with Corrigendum 1 and ISO 898-2:2022.
- ISO 3506-1:2020 and ISO 3506-2:2020.
- DIN Media status and replacement records for DIN 931, 933, 934 and 6914.
- SAE J429 MAY2014 and SAE J995 JUL2017.
- ASTM F3125/F3125M-25a, ASTM A563/A563M, ASTM A193/A193M-26, ASTM A194/A194M-26, ASTM F593-24, ASTM F594-24 and ASTM F1554-20.
- RCSC 2020 Specification for Structural Joints Using High-Strength Bolts.
- AS/NZS 1252.1:2016 and Australian Steel Institute TN001/TN016.
- ASME B18.16.4-2008 and ASME B18.6.4/B18.6.3 status information.

> Standards are copyrighted and may be revised. The purchased/current standard text and the contractual purchase specification govern acceptance.
