# ISO 3269 Acceptance Inspection: The Complete Guide to Fastener Sampling

When purchasing bolts, nuts, screws and other threaded fasteners, one of the most common questions from customers is:

> **How many pieces should be inspected from a production lot?**

Inspecting every fastener is usually impractical. Instead, **ISO 3269 — Fasteners: Acceptance Inspection** provides a statistically based sampling system that determines:

- How many samples to inspect
- Which inspection category to use
- When a lot should be accepted
- When a lot should be rejected
- When additional samples must be inspected

The objective is to give confidence that the production lot meets the specified requirements without performing 100% inspection.

## What Is ISO 3269?

ISO 3269 is the international standard that defines **acceptance inspection procedures for mechanical fasteners**.

It applies to products such as:

- Hex bolts
- Socket screws
- Nuts
- Studs
- Washers
- Tapping screws
- Threaded fasteners

The standard is widely referenced together with ISO 898-1, ISO 898-2, ISO 3506, ASTM fastener specifications, and EN and DIN fastener standards. Rather than specifying product dimensions or mechanical properties, ISO 3269 specifies **how inspection should be performed after manufacturing**.

## The Three Inspection Categories

ISO 3269 divides characteristics into three inspection categories according to their importance.

### Category 1 — Critical Characteristics

Category 1 covers characteristics that directly affect the safety or functionality of the fastener:

- Mechanical properties
- Thread dimensions
- Major dimensions
- Surface discontinuities affecting strength
- Material grade

Because these characteristics are critical, the acceptance criteria are very strict: **Acceptance Number (Ac) = 0**. Any failed sample normally results in rejection or additional inspection.

### Category 2 — Major Characteristics

Category 2 includes characteristics that are important but generally less critical than Category 1:

- Head dimensions
- Across flats
- Bearing surface
- Drive recess
- Marking
- Surface finish

A small number of defects may be tolerated depending on the sampling plan.

### Category 3 — Minor Characteristics

Category 3 covers cosmetic or minor dimensional characteristics that have little influence on the fastener's performance:

- Appearance
- Minor burrs
- Cosmetic plating issues
- Minor surface imperfections

Because these defects are less critical, higher acceptance numbers are allowed.

## The Acceptance Inspection Workflow

The diagram below summarises the complete ISO 3269 acceptance inspection process — from determining lot size to the final accept/reject decision:

<img src="https://blog.fastenerinsight.com/content/images/2026/08/iso-3269-workflow.jpg" alt="ISO 3269 Acceptance Inspection Workflow" loading="lazy" />

The workflow runs through six steps:

1. **Determine the production lot size (N)** — count or confirm the total quantity in the lot.
2. **Select the inspection category** — choose Category 1, 2 or 3 based on the characteristic being inspected.
3. **Locate the correct sampling plan** — find the plan (e.g. 1+6, 2+11, 15+15) in the ISO 3269 sampling table for the lot size and category.
4. **Perform the initial sample inspection** — inspect the first sample part according to the specified requirements.
5. **Perform additional sampling (if required)** — if the initial sample does not conform, inspect the additional number of samples specified in the sampling plan (second stage).
6. **Compare defects with Ac and Re** — count the defective parts and compare with the acceptance (Ac) and rejection (Re) numbers.

**If the initial sample conforms, the lot is accepted — no further inspection is required.** If not, the second stage decides: defects ≤ Ac means accept; defects ≥ Re means reject.

## The ISO 3269 Sampling Table

The following table summarises the sampling plans commonly used in ISO 3269:

| Lot Size (N) | Category 1 | Ac/Re | Category 2 | Ac/Re | Category 3 | Ac/Re |
|--------------|-----------:|:-----:|-----------:|:-----:|-----------:|:-----:|
| 2–50 | 1 + 4 | Ac=0 / Re=1 | 4 + 4 | Ac=0 / Re=2 | N/A | – |
| 51–90 | 1 + 5 | Ac=0 / Re=1 | 5 + 5 | Ac=0 / Re=2 | 5 | Ac=1 / Re=2 |
| 91–150 | 1 + 6 | Ac=0 / Re=1 | 6 + 6 | Ac=0 / Re=2 | 6 | Ac=1 / Re=2 |
| 151–280 | 1 + 7 | Ac=0 / Re=1 | 7 + 7 | Ac=0 / Re=2 | 7 | Ac=1 / Re=2 |
| 281–500 | 2 + 9 | Ac=0 / Re=1 | 9 + 9 | Ac=0 / Re=2 | 9 | Ac=1 / Re=2 |
| 501–1,200 | 2 + 11 | Ac=0 / Re=1 | 11 + 11 | Ac=0 / Re=2 | 11 | Ac=1 / Re=2 |
| 1,201–3,200 | 2 + 13 | Ac=0 / Re=1 | 13 + 13 | Ac=0 / Re=2 | 13 | Ac=1 / Re=2 |
| 3,201–35,000 | 3 + 15 | Ac=0 / Re=1 | 15 + 15 | Ac=0 / Re=2 | 15 | Ac=2 / Re=3 |
| 35,001–500,000 | 5 + 20 | Ac=0 / Re=1 | 20 + 20 | Ac=0 / Re=2 | 20 | Ac=2 / Re=3 |
| >500,000 | 8 + 20 | Ac=0 / Re=1 | 20 + 20 | Ac=0 / Re=2 | 20 | Ac=2 / Re=3 |

*Note: this table is a practical summary for guidance. Always refer to the current edition of ISO 3269 for the authoritative plans, as the standard's structure can differ by characteristic type.*

## Understanding "1 + 6" or "3 + 15"

Many engineers misunderstand the notation used by ISO 3269. Take **Category 1, lot size 91–150**, which calls for the plan **1 + 6**:

**Step 1** — Inspect **1** sample.

- If it passes, accept the lot.
- If it fails, continue to Step 2.

**Step 2** — Inspect **6 additional samples**.

- No defects in the additional samples → accept.
- One or more defects → reject.

This staged approach minimises inspection work while maintaining confidence in product quality.

## What Do Ac and Re Mean?

Two important abbreviations appear throughout ISO 3269:

- **Ac (Acceptance Number)** — the maximum number of defective samples allowed before accepting the lot.
- **Re (Rejection Number)** — the number of defective samples that causes the lot to be rejected.

For example, **Ac = 1 / Re = 2** means:

- 0 defects → accept
- 1 defect → accept
- 2 defects → reject

## Worked Example

A supplier delivers **2,000 ASTM A193 B7 studs** with a Category 2 inspection requirement.

From the table:

- Lot size = 1,201–3,200
- Sample size = **13 + 13**

Procedure:

1. Inspect the initial 13 pieces.
2. If all pass, accept the lot.
3. If the initial inspection triggers additional sampling under the plan, inspect 13 more pieces.
4. Apply the acceptance and rejection criteria specified for Category 2.

This process provides a statistically sound inspection while avoiding unnecessary examination of every fastener.

## Quick Decision Guide

| If... | Action |
|-------|--------|
| Initial samples all conform | Accept the lot. |
| Additional sampling is required | Inspect the second-stage sample according to the ISO 3269 plan. |
| Number of defects ≤ Ac | Accept the lot. |
| Number of defects ≥ Re | Reject the lot. |
| Customer specification differs from ISO 3269 | Follow the customer specification. |

## Inspection Checklist

Before starting an acceptance inspection, verify the following:

- Production lot size has been confirmed.
- Inspection category (1, 2 or 3) has been identified.
- Correct ISO 3269 sampling plan has been selected.
- Samples are selected randomly from the entire lot.
- Inspection equipment has valid calibration.
- Inspection results are recorded.
- Acceptance (Ac) and rejection (Re) criteria have been applied correctly.
- Final inspection report has been issued.

> **Best practice:** Always sample randomly across the entire production lot. Avoid taking all samples from the same carton, pallet, or manufacturing batch, as this may not accurately represent the lot quality.

## Why ISO 3269 Matters

For manufacturers, distributors and inspection agencies, ISO 3269 offers several benefits:

- Reduces inspection cost
- Standardises supplier quality control
- Provides objective acceptance criteria
- Minimises disputes between buyers and suppliers
- Ensures consistent inspection across production lots

Many defence, mining, oil & gas, petrochemical and infrastructure projects require ISO 3269 sampling as part of their quality assurance procedures.

## Practical Tips for Procurement Engineers

Before applying the sampling table, always confirm:

- The total lot quantity.
- Which product characteristics belong to Category 1, 2 or 3.
- Whether destructive tests (such as proof load or hardness) are required.
- Whether the purchase specification overrides ISO 3269.
- Whether customer-specific inspection plans or PPAP requirements apply.

Using the wrong inspection category can result in either excessive inspection costs or insufficient quality assurance.

## Summary

ISO 3269 provides a practical, statistically based acceptance inspection system for fasteners. Instead of inspecting every component, inspectors evaluate a representative sample according to the lot size and inspection category.

Understanding the relationship between **lot size**, **sample size**, **inspection category**, and **Ac/Re criteria** allows procurement teams, quality inspectors and suppliers to make consistent acceptance decisions while reducing inspection effort and maintaining product reliability.

For organisations purchasing critical fasteners in industries such as defence, construction, energy and heavy engineering, ISO 3269 remains one of the most important quality standards to understand.
