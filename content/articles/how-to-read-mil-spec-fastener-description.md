---
title: "How to Read a MIL-Spec Fastener Description: MIL-DTL, MS, NASM, Type, Class and Dash Numbers Explained"
slug: how-to-read-mil-spec-fastener-description
description: "A practical guide for procurement and engineering teams on decoding MIL-Spec fastener callouts, checking current document status, understanding Type, Class and dash numbers, and preparing an accurate RFQ."
date: 2026-10-08
tags:
  - Standards
  - Procurement
  - Quality Assurance
  - Fasteners
---

# How to Read a MIL-Spec Fastener Description: MIL-DTL, MS, NASM, Type, Class and Dash Numbers Explained

A military fastener callout can look like a string of codes:

**MIL-S-24149/3, Type V, Class 1**

or:

**MS16995-98**

or:

**NASM16995**

Each element tells you something different.

Read the elements in the wrong order, or assume that a term such as **Type**, **Class**, or a dash number has the same meaning across different specifications, and the RFQ can go out wrong.

This guide shows how to break a MIL-Spec fastener callout into its individual layers and how to turn that information into a procurement-ready description.

---

## Layer 1: Identify the Document Type

The prefix tells you what kind of document governs the part.

| Element | What it usually tells you | Example |
|---|---|---|
| **MIL-DTL** | Detail specification defining detailed technical requirements | MIL-DTL-1222 |
| **MIL-PRF** | Performance specification focused primarily on required performance | MIL-PRF-xxxxx |
| **MIL-STD** | Military standard covering practices, interfaces, test methods or standardisation requirements | MIL-STD-792 |
| **MIL-S, MIL-B, MIL-N, etc.** | Older military specification numbering still commonly found on drawings and legacy procurement records | MIL-S-24149 |
| **/3, /6, etc.** | Specification sheet under a parent specification | MIL-S-24149/3 |
| **MS** | Military Standard sheet or drawing with defined product configurations and part-number tables | MS16995 |
| **NAS / NASM** | National Aerospace Standard; many former MS documents were later adopted into the NAS system | NASM16995 |
| **Revision letter** | The edition of the document, not the part number | MS16995, Revision H |

### Revision letters are not part numbers

A revision letter identifies the edition of the document.

For example:

**MS16995, Revision H**

means Revision H of the MS16995 standard.

By contrast:

**MS16995-9**

identifies a specific part configuration.

Do not confuse the document revision with the product dash number.

---

## Start with ASSIST

For U.S. Department of Defense specifications and standards, the first place to check is the Defense Logistics Agency's **ASSIST Quick Search** system.

Use ASSIST to verify:

- document status;
- current revision;
- whether the document is Active, Inactive for New Design, or Canceled;
- cancellation notices;
- superseding documents;
- available specification sheets.

Official search:

https://quicksearch.dla.mil/

This is important because customer drawings often retain specification references that are decades old.

An old reference does **not** automatically mean the product is obsolete.

For example, **MS16995** was canceled and superseded by **NASM16995**. A customer may still identify the product using the original MS part number, while the current governing document is NASM16995.

For procurement purposes, it is often useful to retain both references:

**MS16995-98 / current NASM16995**

rather than silently replacing the customer's original reference.

---

## Layer 2: General Specification vs Specification Sheet

Some MIL specification families use a parent specification together with individual specification sheets.

Where this structure is used, the parent specification normally establishes common requirements such as:

- materials;
- workmanship;
- inspection;
- testing;
- marking;
- packaging;
- quality requirements.

The specification sheet then defines a particular product family or configuration.

### Example: MIL-S-24149

**MIL-S-24149** is the general specification family for welding studs and arc shields.

**MIL-S-24149/3** covers Type V corrosion-resistant-steel studs for direct-energy arc welding.

Therefore:

**Weld stud to MIL-S-24149, CRES**

is usually not enough information to identify the product.

A more useful callout may be:

**MIL-S-24149/3, Type V, Class 1**

together with the required thread, length, material and weld-end configuration.

### Procurement rule

**Where a specification sheet exists, quote the applicable sheet rather than only the parent specification.**

Do not assume that every MIL specification has slash sheets. Always check the governing document family.

---

## Layer 3: Type and Class Have Local Meanings

This is one of the most common sources of error.

**Type** and **Class** do not have universal meanings across MIL specifications.

Their meaning is defined locally by the governing document.

### Example: MIL-S-24149

Within the MIL-S-24149 family:

- **Type** identifies a material/process grouping defined by the applicable specification sheet;
- **Class** identifies a stud configuration defined within that sheet.

For example, MIL-S-24149/3 covers Type V corrosion-resistant-steel direct-energy arc-welding studs.

### Example: MIL-DTL-1222

MIL-DTL-1222 uses Type differently depending on the product category.

| Product category | Example Type meaning |
|---|---|
| Stud | Type can distinguish body configuration |
| Bolt | Type can distinguish bolt form |
| Screw | Type can distinguish screw form, such as socket head cap screw |

This means that **Type II** does not automatically describe the same geometry across every product category.

### Thread class is a separate concept

In a thread designation such as:

**1/2"-13 UNC-3A**

the **3A** is a Unified thread tolerance class.

It has nothing to do with a product Type or Class defined elsewhere in the MIL specification.

As a general guide:

- **2A** = external thread;
- **2B** = internal thread;
- **3A** = closer-tolerance external thread;
- **3B** = closer-tolerance internal thread.

### Procurement rule

**Never carry the meaning of Type or Class from one specification into another.**

Look it up in the governing document every time.

---

## Layer 4: Dash Numbers and Part Numbers

A military part number normally identifies a defined configuration, but the numbering method varies by standard.

There are two common approaches.

### 1. Sequential dash numbers

In some standards, the dash number is simply a row in a table.

For example, within MS16995:

**MS16995-9**

and:

**MS16995-10**

refer to different dimensional configurations.

The number itself does not tell you the dimensions.

You must read the table in the governing standard.

This is why it is dangerous to guess a size from a familiar-looking dash number.

### 2. Coded part numbers

Other standards build the size or configuration into the part number.

For example, an NAS1352 socket head cap screw number can encode information such as:

- product family;
- material version;
- thread size;
- length.

A cross-reference such as:

**NAS1352C04-4**

can be broken down approximately as:

| Code | Meaning |
|---|---|
| NAS1352 | Standard family |
| C | CRES version |
| 04 | #4 thread size |
| -4 | Length code, 4/16" = 1/4" |

However, this coding logic belongs to that specific standard.

Do not assume that:

- `C`;
- `04`;
- `-4`;

have the same meaning in another NAS, MS or MIL numbering system.

### Procurement rule

**Decode the part number only from the governing document, never by pattern-matching against another standard.**

---

## Layer 5: MS to NASM — The PIN May Stay the Same, but Verify It

A number of former Military Standard documents were transferred into the National Aerospace Standards system.

In some cases, the original Part Identification Numbers remained unchanged.

**MS16995** is one example.

The MS document was canceled and superseded by **NASM16995**, while existing MS16995 part-number references continued to be used.

This means a drawing may still call out:

**MS16995-98**

while the current technical document is:

**NASM16995**

### Do not generalise this rule

Do not assume that every MS-to-NASM transition preserved the same part number.

Read the actual cancellation or adoption notice for the standard you are working with.

### Good RFQ practice

When appropriate, show both:

**Customer / legacy reference:** MS16995-98  
**Current governing document:** NASM16995

This preserves traceability while showing the supplier which current standard has been reviewed.

---

## Layer 6: What the Part Number May Not Tell You

Finding the correct military part number is important, but it does not automatically mean the RFQ is complete.

Depending on the standard and customer requirement, additional information may still need to be specified separately.

These can include:

- exact stainless-steel grade;
- mechanical property class;
- heat-treatment condition;
- plating or passivation;
- coating thickness;
- locking feature;
- weld-end flux;
- marking;
- inspection level;
- Certificate of Conformance;
- Material Test Report;
- mechanical test certification;
- lot or heat traceability;
- special packaging;
- customer-specific requirements.

### Example: 316 stainless vs A4-80

Consider a callout such as:

**1/2"-13 UNC-3A × 2", AISI 316, A4-80, MS16995**

These requirements are not interchangeable.

**AISI 316** identifies a stainless-steel material.

**A4-80** is an ISO 3506 stainless-fastener designation in which:

- **A4** identifies the stainless group;
- **80** identifies a mechanical property class.

The MS/NASM standard has its own material and mechanical requirements.

A 316 stainless screw made to the military standard is therefore **not automatically A4-80**.

If the customer genuinely requires both, the RFQ should show A4-80 as an **additional mechanical requirement**.

### Procurement rule

**A correct part number identifies the configuration. It does not necessarily replace the complete purchase specification.**

---

## Watch the Thread Designation Carefully

Thread notation can reveal errors in a customer description.

For example:

**5/16"-24 UNF-2B weld stud**

deserves immediate investigation.

Why?

Because **2B** identifies an internal thread.

If the buyer assumes the item is an ordinary externally threaded stud, the interpretation may be wrong.

The item could instead be an internally threaded weld stud or weld boss.

Small details such as:

**2A vs 2B**

or:

**UNC vs UNF**

can completely change the product.

Never silently correct the description.

Check it against the governing specification and obtain clarification when necessary.

---

## Check What the Length Actually Means

The stated length is not always the dimension you first expect.

Depending on the fastener, the requirement may refer to:

- length under the head;
- overall length;
- thread length;
- grip length;
- pre-weld length;
- installed projection;
- post-weld length.

Weld studs are a particularly important example.

A MIL weld-stud standard may define the ordering length before welding, while the installed projection becomes shorter after welding.

If the customer gives a length that does not appear in the standard table, do not immediately assume a special part is required.

First ask whether the dimension refers to the installed or post-weld condition.

---

## Worked Example: Decode the Callout Layer by Layer

Consider:

**MIL-S-24149/3D, Type V, Class 1, 3/8"-16 UNC-2A × 1.375"**

Break it down as follows.

### MIL-S

This is an older Military Specification designation.

### 24149

This identifies the welding-stud specification family.

### /3

This is the applicable specification sheet.

MIL-S-24149/3 covers Type V corrosion-resistant-steel studs for direct-energy arc welding.

### D

This identifies the revision of the specification sheet.

It is a document revision, not part of the product number.

### Type V

This identifies the material/process category defined by this particular specification sheet.

Do not assume Type V has the same meaning in another MIL standard.

### Class 1

This identifies a stud configuration defined by MIL-S-24149/3.

Again, Class 1 is meaningful only within the governing specification.

### 3/8"-16 UNC-2A

This identifies:

- 3/8" nominal thread diameter;
- 16 threads per inch;
- Unified National Coarse thread;
- Class 2A external thread.

### 1.375"

This is the specified length, but the buyer still needs to confirm how the standard defines that dimension.

For a weld stud, this can be particularly important because the installed length may differ from the pre-weld length.

### Military PIN

The final step is to match the configuration to the part-number table in the specification and identify the applicable military PIN or dash number.

Do not guess the dash number from another size.

---

## Turning the Decoded Callout into an RFQ

After decoding the military reference, build the RFQ in a controlled sequence.

A good RFQ should normally state:

| Field | What to confirm |
|---|---|
| Product type | Bolt, screw, stud, weld stud, nut, washer, pin, etc. |
| Governing standard | MIL-DTL, MIL-S, MS, NASM, etc. |
| Specification sheet | Applicable slash sheet where relevant |
| Revision | Revision inspected, where contractually relevant |
| Type / Class / Style | Exactly as defined in the governing document |
| Military PIN | Applicable part number or dash number |
| Size | Diameter and length |
| Thread | UNC, UNF, UNJ, pitch and tolerance class |
| Material | Exact grade if required |
| Mechanical properties | Property class or additional strength requirement |
| Finish | Plating, passivation, coating and specification |
| Marking | Grade, material or manufacturer marking |
| Certification | COC, MTR, test certificate, plating certificate, etc. |
| Traceability | Heat, lot, batch or manufacturer traceability |
| Additional requirements | Anything added by the customer beyond the base standard |

### Example RFQ wording

Instead of writing:

**1/2-13 × 2 stainless bolt MS16995**

write something closer to:

**SOCKET HEAD CAP SCREW, 1/2"-13 UNC-3A × 2.000" LG, AISI 316 CRES, MS16995 / CURRENT NASM16995, PASSIVATED. SUPPLIER TO CONFIRM APPLICABLE MIL/NAS PART NUMBER, MATERIAL, MARKING AND FULL COMPLIANCE. COC AND MATERIAL CERTIFICATION REQUIRED.**

If the customer also requires A4-80, show it separately:

**ADDITIONAL REQUIREMENT: MECHANICAL PROPERTIES TO A4-80 / 800 MPa MINIMUM TENSILE STRENGTH. SUPPLIER TO CONFIRM COMPLIANCE AND PROVIDE MECHANICAL TEST CERTIFICATION.**

This makes it clear which requirements come from the military standard and which requirements have been added by the customer.

---

## Common RFQ Mistakes

### 1. Quoting only the parent MIL specification

**Wrong:**

MIL-S-24149 CRES weld stud

**Better:**

MIL-S-24149/3, Type V, applicable Class and Style, plus size and material requirements.

---

### 2. Treating Type or Class as universal

**Wrong assumption:**

Type II means socket head cap screw in every MIL specification.

**Correct approach:**

Look up Type II in the exact specification and product category being used.

---

### 3. Guessing the dash number

A dash number may simply refer to a table row.

Do not calculate or infer it from another part-number system.

---

### 4. Assuming CRES means 316

**CRES** means corrosion-resistant steel.

A specification may permit several stainless grades.

If the customer requires **316**, retain 316 explicitly in the RFQ.

If the customer only specifies CRES, do not add 316 without justification.

---

### 5. Treating material and strength as the same thing

**316** is a material designation.

**A4-80** is a material group plus mechanical property class.

**SAE J429 Grade 8** is a mechanical/material specification for high-strength steel fasteners.

These are not interchangeable.

---

### 6. Ignoring thread tolerance

**UNC-2A** and **UNC-3A** are not the same requirement.

Neither are **2A** and **2B**.

Do not reduce the RFQ to diameter and TPI alone.

---

### 7. Treating certification as an afterthought

For military and defence procurement, documentation can be part of the deliverable.

A physically correct fastener may still be unusable if the required traceability or certification is missing.

---

## Buyer Checklist Before Sending a MIL-Spec RFQ

Before sending the RFQ, confirm:

1. What exact product is being requested?
2. What is the governing MIL, MS, NAS or NASM document?
3. Is the document current, inactive, or canceled?
4. Is there a superseding document?
5. Does a specification sheet apply?
6. What do Type, Class and Style mean in this exact document?
7. Is there an established military PIN or dash number?
8. What exact size and thread are required?
9. Is the thread external or internal?
10. What does the stated length measure?
11. What material grade is required?
12. What mechanical properties are required?
13. What finish or coating is required?
14. What marking is required?
15. What certification and traceability are required?
16. Has the customer added requirements beyond the military standard?
17. Are there any conflicts between the customer description and the governing specification?
18. Are there any export-control or controlled-technical-data restrictions before sending drawings or technical data to overseas suppliers?

If any of these points remain uncertain, clarify them before placing the order.

---

## Key Takeaways

**For buyers:**  
Separate the document, revision, specification sheet, Type, Class, Style and dash number before writing the RFQ. Then separately check size, thread, material, strength, finish, marking, certification and any customer-added requirements.

**For engineers:**  
Type and Class are local to the governing specification. Thread class 3A is a thread tolerance and is not the same thing as a product Class.

**For quality teams:**  
Record which revision was reviewed, preserve the relationship between legacy MS references and current NASM documents where applicable, and confirm exactly what evidence the supplier must provide.

---

## Bottom Line

A MIL-Spec fastener callout is a stack of layers:

**document → revision → specification sheet → product category → Type/Class/Style → size/thread → material → part number → additional requirements**

Read each layer from the governing document and the description becomes precise.

Read it by analogy and it becomes a guess.

---

## Related Articles

- [MIL-Spec Fasteners: How to Prepare an Accurate RFQ](https://blog.fastenerinsight.com/mil-spec-fasteners-how-to-prepare-an-accurate-rfq/)
