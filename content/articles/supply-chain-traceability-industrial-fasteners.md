---
title: "Supply Chain Traceability: How to Trace Industrial Fasteners from Raw Material to Customer"
slug: supply-chain-traceability-industrial-fasteners
description: "A practical guide for procurement, quality assurance and warehouse teams — trace industrial fasteners from raw material to customer through heat numbers, lot records, process certificates and EN 10204 documents."
date: 2026-08-24
tags:
  - Engineering
  - Procurement
  - Quality Assurance
  - Fasteners
---

# Supply Chain Traceability: How to Trace Industrial Fasteners from Raw Material to Customer

*A practical guide for procurement, quality assurance and warehouse teams.*

> **Core principle:** Traceability is not the number of certificates in a file. It is the strength of the documented links between the physical product, its batch, its processes and its original material.

## 1. What is supply-chain traceability?

Supply-chain traceability is the ability to follow a product, material or batch both backward and forward through the supply chain. It is particularly important for industrial, defence, marine, energy and safety-critical products, where the consequences of supplying the wrong material can be serious.

Backward traceability starts with a finished item and identifies who made it, which production batch it came from, which raw-material heat was used, what testing was performed, which special processes were applied and who inspected and released it.

Forward traceability identifies how much of a batch remains in stock, which branches received it and which customers were supplied from it. This allows an affected population to be isolated quickly if a defect, non-conformance or recall arises.

> **The practical test:** Start with one carton of finished fasteners and work backward to the original mill certificate, then work forward to every customer who received material from the same lot.

## 2. Levels of traceability

| Level | What can be identified | Typical evidence |
|---|---|---|
| Commercial | Supplier, order and delivery | Purchase order, invoice and packing list |
| Product | Part number, size, grade and standard | Product label and Certificate of Conformance |
| Batch or lot | Specific manufacturing or inspection batch | Lot number and batch inspection report |
| Material or heat | Original steel melt or raw-material heat | Heat number and original mill certificate |
| Process | Heat treatment, plating, passivation or machining | Process certificates and subcontractor records |
| Distribution | Movement from supplier through warehouse to customer | ERP transactions and delivery records |

Commercial traceability is not full material traceability. An invoice describing "M20 Class 8.8 screws" proves that an item was purchased, but it does not prove which heat of steel was used to manufacture it.

## 3. How to establish traceability

### Define requirements before ordering

Traceability requirements should appear in the purchase order or contract before production starts. A statement such as "certificate required" is too vague and may result in nothing more than a generic CoC.

- Exact product description, part number, dimensions and thread details
- Product standard, drawing number and applicable revision
- Material grade, property class, coating and special-process requirements
- Required testing, inspection and certificate type
- Heat-number and manufacturing-lot traceability
- Product marking, packaging and labelling requirements
- Whether mixed heats or manufacturing lots are prohibited
- Record-retention and customer or third-party inspection requirements

### Use unique identifiers

A workable system uses identifiers that remain consistent across physical labels, certificates, inspection reports and ERP records. These may include the manufacturer, part number, raw-material heat, manufacturing lot, heat-treatment batch, plating batch, inspection lot, purchase order, certificate number and packaged quantity.

### Preserve segregation

Different heats and manufacturing lots should remain physically and electronically segregated. Topping up an existing bin, removing original labels or returning unidentified material to stock can destroy an otherwise valid traceability chain.

### Control subcontracted processes

When products leave the factory for heat treatment, plating, passivation, machining or testing, the subcontractor's batch number must be linked back to the original manufacturing lot. Records should state the quantity sent, the quantity returned, the process performed and any rejected, scrapped or replaced material.

### Verify the goods against the documents

Receiving inspection should compare the package label, product markings and physical goods against the certificate package before stock is released. A complete set of documents is not sufficient when the identifiers do not match the goods.

## 4. Documents commonly required

### Commercial and receiving records

- Customer and supplier purchase orders
- Order acknowledgement, invoice and packing list
- Delivery docket and goods-receipt record
- Receiving-inspection record
- Original and internal product labels

### Material and test documents

- Original Mill Test Certificate or Material Test Report
- EN 10204 3.1 certificate where contractually applicable
- EN 10204 3.2 certificate where independent validation is required
- Chemical composition and mechanical-property results
- Raw-material heat or melt number
- Country-of-origin or country-of-melt declaration where required

### Manufacturing and special-process records

- Manufacturing traveller or route card
- Heat-treatment, plating, coating or passivation certificate
- Dimensional inspection and product-testing reports
- NDT or magnetic-permeability reports where applicable
- First Article Inspection or PPAP documentation
- Calibration, non-conformance, deviation and concession records

### Critical-sector additions

Defence, aerospace, marine and other critical projects may additionally require approved-manufacturer evidence, authorised-distributor records, source inspection, government quality-assurance release, counterfeit-parts controls, configuration records, export-control documentation and extended record retention.

## 5. Worked example: an M20 hex-head cap screw

The following fictional example shows how the documents should connect for an M20 × 80 fully threaded hex-head cap screw to ISO 4017, property class 8.8, zinc electroplated Fe/Zn8, quantity 2,000 pieces, with EN 10204 3.1 certification and full heat and manufacturing-lot traceability.

> **Important:** The numerical results and document identifiers below are illustrative. Actual acceptance criteria must be taken from the specifications and editions governing the purchase order.

### Step 1 — Purchase order

The distributor issues purchase order PO-260845 and defines the item, standard, property class, coating, testing, certificate type, lot segregation and package-labelling requirements.

| Field | Requirement |
|---|---|
| Product | M20 × 80 fully threaded hex-head cap screw |
| Thread | M20 × 2.5–6g |
| Product standard | ISO 4017, specified edition |
| Property class | 8.8 |
| Finish | Zinc electroplated Fe/Zn8 |
| Quantity | 2,000 pieces |
| Certification | EN 10204 3.1 |
| Traceability | Raw-material heat through finished-product lot |
| Lot mixing | Not permitted unless separately identified and documented |

### Step 2 — Original mill certificate

The steel mill issues MTC-458921 for raw-material heat H26-18475. It identifies the steel producer, material form, heat number, material specification, chemical limits, actual chemical results and authorised validation.

| Element | Illustrative actual result |
|---|---|
| Carbon | 0.36% |
| Manganese | 0.78% |
| Silicon | 0.22% |
| Phosphorus | 0.018% |
| Sulphur | 0.012% |

The mill certificate establishes the identity of the raw material. It does not by itself prove that the finished screws were manufactured from that heat.

### Step 3 — Incoming-material record

The fastener manufacturer receives the steel under material receipt MR-260417 and assigns internal batch RM-260417-03. This document creates the link between the manufacturer's internal material identity and mill heat H26-18475.

### Step 4 — Manufacturing traveller

The manufacturer produces the screws under finished lot FG-M20-260512. The traveller is the central linking record:

| Production stage | Traceability reference |
|---|---|
| Raw-material issue | RM-260417-03 / Heat H26-18475 |
| Cold forming | CF-260512-02 |
| Thread rolling | TR-260513-01 |
| Heat treatment | HT-260515-07 |
| Zinc plating | ZP-260519-04 |
| Final inspection | FI-260521-02 |
| Finished manufacturing lot | FG-M20-260512 |

### Step 5 — Heat-treatment certificate

The heat-treatment processor issues HTC-260515-07 for batch HT-260515-07. It identifies the product, manufacturing lot, quantity, furnace or batch, process, specification, date and authorised release. The essential connection is that HT-260515-07 was applied to FG-M20-260512.

### Step 6 — Mechanical test report

Representative samples from finished lot FG-M20-260512 are tested under report LAB-260520-114. The report should state the sample identity and quantity, test methods, acceptance requirements, actual results, test date and authorised signatory.

| Test | Illustrative result | Status |
|---|---|---|
| Tensile strength | 845 MPa | Pass |
| Proof/yield-related property | 688 MPa | Pass |
| Elongation | 14% | Pass |
| Hardness | 27 HRC | Pass |
| Proof-load test | No failure or permanent deformation | Pass |
| Decarburisation | Within specified limits | Pass |

Actual measured results normally provide stronger evidence than a report containing only the word "Pass."

### Step 7 — Plating certificate

The plating company issues PC-260519-04 for batch ZP-260519-04. It identifies manufacturing lot FG-M20-260512, quantities received and returned, coating designation, applicable standard, measured thickness, appearance and adhesion. Where applicable, it should also address hydrogen-embrittlement controls and relief treatment.

### Step 8 — Dimensional inspection

Final inspection report DIR-260521-02 identifies inspection lot FI-260521-02, the sampling plan and the measuring equipment used.

| Characteristic | Illustrative sample result | Status |
|---|---|---|
| Overall length | 79.82–80.10 mm | Pass |
| Width across flats | 29.86–29.94 mm | Pass |
| Head height | 12.55–12.68 mm | Pass |
| Thread | M20 × 2.5–6g; GO/NO-GO accepted | Pass |
| Head marking | Manufacturer ID and 8.8 verified | Pass |

### Step 9 — Finished-product EN 10204 3.1 certificate

The manufacturer issues certificate 3.1-260521-88, consolidating the evidence and linking the finished product to its supporting reports.

| Certificate field | Recorded value |
|---|---|
| Purchase order | PO-260845 |
| Product | M20 × 80 ISO 4017, property class 8.8 |
| Quantity | 2,000 pieces |
| Manufacturing lot | FG-M20-260512 |
| Raw-material heat | H26-18475 |
| Mill certificate | MTC-458921 |
| Heat-treatment batch | HT-260515-07 |
| Mechanical test report | LAB-260520-114 |
| Plating batch | ZP-260519-04 |
| Dimensional report | DIR-260521-02 |

An EN 10204 3.1 certificate must be properly validated by the manufacturer's authorised inspection representative, independent of the manufacturing department. A trader's basic CoC should not automatically be treated as a 3.1 certificate.

### Step 10 — Packaging label

Every carton should retain the product identity, manufacturing lot and heat number. If a second heat or lot is supplied, it should be packaged separately and allocated to its own supporting records.

> **Example carton label**<br>
> M20 × 80 HEX-HEAD CAP SCREW — ISO 4017, PROPERTY CLASS 8.8<br>
> FINISH: Fe/Zn8 · QUANTITY: 200 PIECES<br>
> MANUFACTURING LOT: FG-M20-260512<br>
> RAW-MATERIAL HEAT: H26-18475<br>
> PURCHASE ORDER: PO-260845 · CARTON: 1 OF 10

### Step 11 — Distributor receiving and storage

The distributor creates GRN-260622, records the lot and heat in the ERP, verifies the carton labels against the certificate package and assigns a controlled warehouse location. Any repacking or stock transfer must preserve these identifiers.

### Step 12 — Customer delivery

If 600 screws are supplied under delivery docket DD-261104, the docket or attached certificate schedule identifies lot FG-M20-260512 and heat H26-18475. The ERP then shows 600 pieces supplied to that customer and 1,400 pieces remaining from the same lot.

## 6. Complete traceability chain

The diagram below brings the worked example together. Each stage has its own identifier, but the identifiers only become meaningful when the records connect them to the stage before and after.

<img src="https://blog.fastenerinsight.com/content/images/2026/08/traceability-chain.png" alt="Complete traceability chain for the example M20 hex-head cap screw" loading="lazy" />

*Figure 1. Complete traceability chain for the example M20 hex-head cap screw*

> **Audit interpretation:** If the finished lot FG-M20-260512 cannot be linked to heat H26-18475 through the manufacturing traveller, the chain is broken even when both the mill certificate and finished-product certificate appear genuine.

## 7. Common pitfalls

- **Documents do not match the goods:** The certificate may be genuine but refer to another part, size, grade, revision, heat or manufacturing lot.
- **A generic CoC is accepted as full traceability:** A basic statement of compliance may contain no actual test results or heat-level connection.
- **The mill heat is not linked to the finished lot:** This is the most serious gap: two valid-looking identifiers exist, but no controlled manufacturing record connects them.
- **Mixed heats are supplied under one certificate:** Each heat must be identified, segregated and allocated to the relevant quantity.
- **Traceability is lost during repacking:** Removing the original label or combining stock without controlled records breaks the chain.
- **A trader retypes another party's results:** The purchaser must identify the actual manufacturer, mill, laboratory and authorised issuer.
- **Raw-material certification is treated as finished-product certification:** Chemistry alone does not prove heat treatment, dimensions, thread tolerance, coating or mechanical performance.
- **Electronic records are uncontrolled:** Editable files, missing pages, pasted signatures, duplicate numbers or unverifiable reports are warning signs.
- **Product marking is misunderstood:** Head markings usually identify the manufacturer and property class, not the individual raw-material heat.
- **Specification revisions are not controlled:** A product may meet an older edition but not the edition required by the contract.

## 8. Ten-question traceability audit

1. What exactly is inside the selected carton?
2. Who manufactured the product?
3. What is the finished manufacturing lot?
4. What raw-material heat was used?
5. Which controlled record connects the finished lot to that heat?
6. Which report contains the actual test results for the relevant lot?
7. Which special processes were performed, and by whom?
8. Do all identifiers match the package label and purchase order?
9. Can the distributor identify every customer supplied from the lot?
10. Can the original documents be verified with their issuers?

If any answer depends on a verbal statement, an unexplained spreadsheet or an assumed connection between documents, the traceability is incomplete.

## Conclusion

Full supply-chain traceability is not achieved simply by collecting certificates. It is achieved when the physical product, package label, finished manufacturing lot, test reports, special-process records, raw-material heat and original mill certificate form one consistent and verifiable chain.

The same discipline must continue through receiving, storage, repacking, stock transfers and customer delivery. Otherwise, traceability established by the manufacturer can be lost later in the supply chain.

> **The decisive question:** Can we prove that these certificates apply to these specific products?

When every identifier connects without assumptions, the supply chain is traceable. When a critical link is missing — particularly the link between the finished manufacturing lot and the raw-material heat — the claim of full traceability should be questioned.
