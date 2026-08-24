---
title: "Magnetic Permeability Testing for Stainless-Steel Fasteners: A Practical RFQ Guide"
slug: magnetic-permeability-testing-stainless-steel-fasteners
description: "What magnetic permeability testing measures, why cold-worked stainless fasteners can become magnetic, and what buyers should specify in RFQs and test reports."
date: 2026-08-24
tags:
  - Fasteners
  - Stainless Steel
  - Magnetic Permeability
  - MIL-DTL-1222
  - ASTM A342
  - Quality Assurance
---

# Magnetic Permeability Testing for Stainless-Steel Fasteners: A Practical RFQ Guide

Stainless steel is often described as “non-magnetic,” but that statement is too simple for defence, marine and other high-reliability applications. An austenitic stainless-steel fastener may begin with very low magnetic response and become measurably magnetic after cold drawing, cold heading or thread rolling.

This is why some military drawings and procurement specifications require **magnetic permeability testing**. The requirement is not merely intended to confirm that the product is stainless steel. It verifies that the finished component has a sufficiently low magnetic response for its intended service.

For buyers and suppliers, the difficult part is usually not understanding the phrase “magnetic permeability.” The real challenge is defining exactly **what must be tested, to which method, at what field strength, against what limit, and with what documentary evidence**.

## What is magnetic permeability?

Magnetic permeability describes how readily a material supports magnetic flux when exposed to a magnetic field. It is normally expressed as **relative magnetic permeability**, written as \(\mu_r\):

\[
\mu_r = \frac{\text{permeability of the material}}{\text{permeability of vacuum}}
\]

Air is treated as approximately 1.0. A material with a relative permeability close to 1.0 has very little magnetic response. Ferromagnetic materials such as carbon steel may have values hundreds or thousands of times higher, depending on the material and test conditions.

For weakly magnetic stainless-steel components, requirements are commonly expressed in forms such as:

> Relative magnetic permeability shall not exceed 2.0, with air equal to 1.0, at a magnetic field strength of H = 200 oersteds.

The field strength matters. A statement such as “permeability below 2.0” is not fully defined unless the applicable test standard, method and field strength are also identified.

## Why can 304 and 316 stainless steel become magnetic?

Grades 304 and 316 are austenitic stainless steels. In a properly solution-annealed condition, they normally have a low magnetic response. However, manufacturing can change their metallurgical structure.

Processes that may increase magnetic permeability include:

- cold drawing of bar or wire;
- cold heading;
- thread rolling;
- heavy bending or forming;
- localised machining and grinding;
- welding; and
- severe mechanical deformation.

Cold working can transform part of the austenitic structure into deformation-induced martensite, which has a stronger magnetic response. The effect is not necessarily uniform throughout a fastener. The head, head-to-shank transition, thread run-out and rolled threads may respond differently because they experience different amounts of deformation.

Consequently, a raw-material certificate showing 316 chemistry does not demonstrate that the **finished fastener** meets a low-permeability limit.

Magnetic response also does not automatically mean that the supplier used the wrong material. A correctly manufactured 316 fastener can exhibit some magnetism after cold working.

## What does the test prove?

Magnetic permeability testing can verify that a component remains within a specified magnetic-response limit. It can provide evidence that the finished part is suitable for use near magnetic sensors, navigation equipment or other magnetically sensitive systems.

It does **not**, by itself, prove:

- that the material is definitely 304 or 316;
- that the chemical composition complies with the material specification;
- that the fastener has the required tensile strength;
- that passivation was performed correctly;
- that the material has adequate corrosion resistance; or
- that the component is completely “non-magnetic.”

Magnetic permeability testing should therefore complement—not replace—chemical analysis, mechanical testing, dimensional inspection and traceability documentation.

## Where is low magnetic permeability required?

The requirement is uncommon for normal commercial fasteners. It appears mainly where magnetic response could interfere with equipment performance or increase the magnetic signature of an assembly.

### Submarine and naval equipment

Typical examples include:

- submarine safety systems;
- mine-countermeasure vessels;
- low-magnetic-signature naval equipment;
- sonar and underwater sensing assemblies;
- equipment positioned near magnetic compasses; and
- sensitive marine navigation or detection systems.

[MIL-DTL-1222J](https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=2901) covers studs, bolts, screws and nuts for submarine safety and other applications where a high degree of reliability is required. Its clause 3.8 establishes a relative-permeability limit for annealed 300-series austenitic corrosion-resistant steels.

### Aerospace and defence electronics

Low-permeability components may also be specified around:

- avionics;
- magnetometers;
- gyroscopes;
- guidance and navigation equipment;
- electrical connectors; and
- precision electronic sensors.

The requirement is not restricted to fasteners. Military specifications for connectors, washers and other components also contain magnetic-permeability limits.

### Medical, scientific and industrial equipment

Other applications can include MRI-related equipment, electron microscopes, semiconductor-manufacturing systems, particle accelerators, cryogenic equipment and precision laboratory instruments.

However, compliance with a general military limit such as \(\mu_r \leq 2.0\) does not automatically make a part suitable for MRI use. MRI applications may impose substantially stricter material, attraction-force and safety requirements.

## The common test standard: ASTM A342/A342M

[ASTM A342/A342M](https://www.astm.org/a0342_a0342m-21.html), *Standard Test Methods for Permeability of Weakly Magnetic Materials*, is widely referenced for determining the relative permeability of weakly magnetic materials.

The standard contains different procedures for different specimen forms, permeability ranges and accuracy requirements. For production fasteners, a low-permeability indicator or comparator-type method is popular because it is quick, non-destructive and can be applied to finished parts.

For more demanding work, a laboratory may use a more precise permeameter or flux-based procedure. The selected method must be suitable for the part’s size and geometry.

A simple handheld magnet is not a quantitative magnetic-permeability test. It may detect an obvious magnetic response, but it cannot demonstrate compliance with a specified numerical limit.

## Should the raw material or finished fastener be tested?

If the objective is to qualify the supplied fastener, testing the finished component is normally more meaningful. Raw material can satisfy a low-permeability requirement before manufacturing and then develop higher permeability during heading, rolling or forming.

Potential test locations on a finished fastener include:

- the head;
- the head-to-shank transition;
- the plain shank;
- the threaded section; and
- the thread run-out.

The laboratory should use a method appropriate to the geometry and identify any locations that cannot be measured reliably. The RFQ should also state whether the reported result is the highest value found on the component.

## The important distinction between annealed stainless and A4-80

This issue becomes particularly important when an order specifies both MIL-DTL-1222J and A4-80.

Under ISO 3506, **A4** identifies an austenitic stainless-steel group normally associated with molybdenum-bearing grades such as 316. The property class **80** requires a minimum tensile strength of 800 MPa. That strength is normally achieved through substantial cold working.

MIL-DTL-1222J clause 3.8 states:

> For the annealed condition of 300 series austenitic corrosion-resistant steels, the relative magnetic permeability shall be determined and shall not exceed 2.0 (air = 1.0).

On a strict reading, this clause applies to the **annealed condition**, not automatically to a cold-worked A4-80 fastener. A4-80 should not be described simply as “annealed but then cold worked”; the finished fastener is supplied in a cold-worked strength condition, even if its starting stock was solution annealed earlier in production.

There is also a practical tension between the two requirements:

- A4-80 needs cold work to achieve its mechanical strength.
- Cold work can increase magnetic permeability.
- Re-annealing may reduce the magnetic response but also remove the cold-worked strength needed for property class 80.

Therefore, a supplier should not promise simultaneous compliance with A4-80 strength and a stringent permeability limit without evaluating representative finished parts.

Moreover, A4-80 is an ISO 3506 classification and is not itself a MIL-DTL-1222J grade and condition. An RFQ that states only “A4-80 to MIL-DTL-1222J” may need clarification of the intended material designation, mechanical requirements and magnetic requirement.

## What should be written in the RFQ?

“Magnetic test required” or “must be non-magnetic” is not sufficient. A workable RFQ should define the following:

1. **Acceptance limit** — for example, \(\mu_r \leq 2.0\).
2. **Applied field strength** — for example, H = 200 oersteds.
3. **Test standard and method** — for example, an applicable method of ASTM A342/A342M.
4. **Test object** — raw material, semi-finished blank or finished fastener.
5. **Test locations** — head, shank, thread or maximum observed value.
6. **Sampling frequency** — per heat, per manufacturing lot or 100% testing.
7. **Timing** — whether testing must occur after all forming, heat treatment and finishing operations.
8. **Laboratory requirements** — manufacturer’s laboratory or independent ISO/IEC 17025-accredited laboratory.
9. **Documentation** — CoC statement, actual-value report or witnessed inspection.

Where the drawing or governing specification already defines these requirements, the RFQ should reference that document rather than introduce a conflicting sampling plan or test condition.

### Suggested RFQ clause

> Magnetic permeability testing shall be performed on representative finished fasteners in accordance with the applicable method of ASTM A342/A342M. Relative magnetic permeability shall not exceed 2.0 at a field strength of H = 200 oersteds. Testing shall be conducted after completion of all forming, heat-treatment and finishing operations. The test report shall identify the purchase order, product, material heat, manufacturing lot, sample quantity, test method, field strength, test locations, acceptance criterion and actual or bounded results. Sampling frequency and laboratory accreditation shall be as specified by the purchase order or approved inspection and test plan.

This wording is an example only. The applicable drawing, contract and end-customer specification remain controlling.

## What paperwork is normally supplied?

The required level of documentation depends on the criticality of the application.

### 1. Certificate of Conformance

The lowest level is a CoC containing a statement such as:

> Magnetic permeability complies with the applicable specification.

This may be acceptable when the contract permits supplier certification, but it provides limited evidence because it may not identify the method, sample size or actual result.

### 2. Manufacturer’s magnetic-permeability test report

A useful test report should contain:

- supplier and laboratory details;
- customer PO and item number;
- product description and part number;
- material grade and condition;
- heat number and manufacturing-lot number;
- quantity represented and number of samples tested;
- test standard, procedure and method;
- field strength;
- test locations;
- actual measured result or verified comparison limit;
- specified acceptance limit;
- pass/fail conclusion;
- equipment identification and calibration status;
- test date; and
- authorised inspector or laboratory signatory.

An example result statement is:

> Three finished fasteners from manufacturing lot 260824-01 were tested in accordance with ASTM A342/A342M using a low-permeability indicator at H = 200 oersteds. The maximum observed relative permeability was 1.18 against a specified maximum of 2.0. Result: Pass.

If the chosen method only establishes that the specimen is below a comparison standard rather than producing a precise measurement, the report should not invent an exact numerical value. It should state the verified bound, such as “less than 2.0 at H = 200 Oe.”

### 3. Independent accredited laboratory report

High-reliability defence work may require testing by an independent ISO/IEC 17025-accredited laboratory. The buyer should confirm that the relevant magnetic-permeability method is included within the laboratory’s accredited scope—not merely that the laboratory holds general accreditation.

### 4. Witnessed testing and manufacturing record book

For critical contracts, magnetic testing may be a hold or witness point in the inspection and test plan. The completed report can then form part of the manufacturing data record, together with the material certificate, mechanical results, dimensional report, passivation evidence and traceability records.

## Common procurement mistakes

Several mistakes recur in stainless fastener RFQs:

### Treating “non-magnetic” as a complete specification

No real engineering material should be accepted against an undefined word. State the maximum relative permeability, test field and method.

### Relying only on the raw-material certificate

Raw-material chemistry and starting-condition permeability do not account for cold heading and thread rolling. Require finished-part testing when finished-part performance matters.

### Using a handheld magnet as acceptance evidence

A magnet check is qualitative screening, not an ASTM A342/A342M test report.

### Assuming A4-80 will automatically pass

A4-80 is deliberately strengthened through cold work. The actual magnetic response depends on material composition, manufacturing route, degree of deformation and part geometry.

### Requesting an exact result from a limit-comparison method

Some indicator methods demonstrate that permeability is above or below a calibrated reference. They may not support a highly precise numerical result. The report must reflect the capability of the method used.

### Removing a test without contractual confirmation

Even if a general specification limits the test to annealed material, the customer’s drawing, PO, inspection plan or end-user requirement may independently require it. Any discrepancy should be resolved in writing before the test is removed.

## A practical buyer’s checklist

Before placing an order, confirm:

- [ ] What operational reason requires low magnetic permeability?
- [ ] Which document controls the requirement?
- [ ] Is the material annealed, cold worked or strain hardened?
- [ ] Does the requirement apply to the raw material or finished fastener?
- [ ] What is the maximum permitted \(\mu_r\)?
- [ ] At what magnetic field strength?
- [ ] Which ASTM A342/A342M method is acceptable?
- [ ] Which areas of the fastener must be checked?
- [ ] What is the sampling frequency?
- [ ] Is destructive testing permitted if required by the method?
- [ ] Must the laboratory be ISO/IEC 17025 accredited?
- [ ] Are actual results required, or is a compliance statement sufficient?
- [ ] How will samples and results be traced to the supplied manufacturing lot?
- [ ] Is customer or third-party witnessing required?

## Conclusion

Magnetic permeability testing is a specialised verification of magnetic behaviour, not a substitute for material identification. It becomes important when fasteners are used in submarines, mine-countermeasure equipment, navigation systems, magnetic sensors, defence electronics and other magnetically sensitive assemblies.

The most important procurement lesson is to avoid an undefined instruction such as “non-magnetic.” A technically complete requirement identifies the finished condition, maximum relative permeability, applied field strength, ASTM A342/A342M method, test location, sampling frequency and required certification.

For A4-80 fasteners, additional caution is necessary. Their strength normally depends on cold working—the same process that may increase magnetic response. When both high strength and low permeability are required, compliance should be confirmed on representative finished fasteners and documented against the actual manufacturing lot.

## References

1. U.S. Defense Logistics Agency, [MIL-DTL-1222 document details](https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=2901).
2. ASTM International, [ASTM A342/A342M — Standard Test Methods for Permeability of Weakly Magnetic Materials](https://www.astm.org/a0342_a0342m-21.html).
3. International Organization for Standardization, [ISO 3506-1:2020 — Mechanical properties of corrosion-resistant stainless steel fasteners](https://www.iso.org/obp/ui/).

*Technical note: This article provides general procurement guidance. The purchase order, drawing, approved inspection and test plan, and end-customer specification should always take precedence.*
