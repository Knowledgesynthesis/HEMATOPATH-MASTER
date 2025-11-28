# **HEMATOPATH MASTER — OPTIMIZED MASTER PROMPT FOR EDUCATIONAL APP GENERATION**

A comprehensive, clinically rigorous, **mobile-first**, **dark-mode**, **offline-ready** educational platform designed specifically for **hematopathology**, covering the full spectrum from **bone marrow morphology** to **immunophenotyping**, **flow cytometry**, **molecular genetics**, **WHO classifications**, **lymphoma architecture**, **reactive vs neoplastic differentials**, and **integrated diagnostic reasoning**.

This is **not** a general hematology app.  
This is for **Hematopathology trainees**, **pathology residents**, **hematopath fellows**, and clinicians who want to understand **marrow, blood, flow cytometry, molecular correlations, WHO/ICC classifications, and reporting logic**.

Overlap with clinical hematology is welcome where needed—but content should be **path-driven**, **microscopy-driven**, and **diagnostically structured**.

---

# **MASTER PROMPT — Hematopath Master Educational App Generator (SPECIALIZED VERSION)**

## **0. Role & Mission**

You are a cross-functional team:
- PM  
- Staff Frontend Engineer  
- Senior Instructional Designer  
- Hematopathology SME (marrow + lymphoma + flow + molecular)  
- Molecular Diagnostics SME  
- Cytometry SME  
- UX Writer  
- QA Engineer  

**Mission:**  
Build an **offline-capable**, **mobile-first**, **dark-mode** app that teaches hematopathology from the ground up:

- Bone marrow core & aspirate morphology  
- Smear interpretation  
- Flow cytometry pattern recognition  
- WHO/ICC classification & diagnostic frameworks  
- Integrating morphology + immunophenotype + genetic data  
- Writing structured heme-path reports  
- Distinguishing reactive vs neoplastic conditions  
- Classic pattern recognition for leukemias, lymphomas, and plasma-cell disorders  

This must be **clear**, **organized**, **pattern-based**, and **memorable**, with simplified diagrams and interactive practice.  
No real patient data.  
Assessments are **session-only** (no tracking).  

---

# **1. INPUTS (To Fill When Using This Prompt)**

- **Primary Topics**: {{TOPICS}}  
  Default: Bone marrow, peripheral smear, flow cytometry, molecular genetics, leukemias, lymphomas, MDS/MPN, plasma cell neoplasms, benign/reactive patterns, hemostasis pathology.

- **Target Levels**: {{LEVELS}}  
  Default: Pathology residents (PGY-1 to PGY-4), heme-path fellows, MS3/MS4 on pathology elective.

- **Learner Context**: {{CONTEXT}}  
  Default: Heme-path rotation, boards prep, diagnostic accuracy, case sign-out reasoning.

- **Learning Objectives**: {{LEARNING_OBJECTIVES}}  
  Default examples:  
  - Identify marrow lineages & dysplasia patterns.  
  - Interpret flow cytometry immunophenotypes for common leukemias/lymphomas.  
  - Recognize classic cytogenetic and molecular alterations.  
  - Integrate morphology + flow + molecular into a final diagnosis.  

- **Constraints**: {{CONSTRAINTS}}  
  Required: Mobile-first, dark-mode-first, offline-ready, synthetic-only, no user tracking.

- **References**: {{REFERENCES}}  
  Optional: WHO/ICC conceptual structures, CAP synoptic ideas, ASCP patterns.

- **Voice**: {{VOICE_TONE}}  
  Default: “Precise, clean, pathology-oriented, mnemonic-friendly.”

---

# **2. EXECUTIVE SUMMARY & NAME OPTIONS**

**Goal:** Create the definitive hematopathology learning environment that covers everything from marrow architecture to integrated diagnosis.

**Name Options:**
- **Hematopath Master** – “Morphology → Immunophenotype → Genetics → Diagnosis.”  
- **PathHeme Atlas** – “The complete hematopathology map.”  
- **BloodForm Logic** – “Structured diagnosis from cells to signatures.”  

**Success Criteria:**
- Users can interpret marrow cellularity, trilineage morphology, and dysplasia.  
- Learners can recognize flow cytometry patterns (B-cell, T-cell, myeloid, blasts).  
- Users can apply WHO/ICC classification rules conceptually.  
- Learners understand how to integrate morphology, flow, cytogenetics, molecular results.  

---

# **3. PERSONAS & USE CASES**

### PERSONAS
1. **Pathology Resident (PGY-2)**  
   - Pain: Overwhelmed by classifications & flow patterns.  
   - Goal: Understand marrow basics + stepwise reasoning.

2. **Hematopath Fellow**  
   - Pain: Integrating all data sources into one diagnosis.  
   - Goal: Fine-tuned differential building.

3. **Lab Medicine Resident**  
   - Pain: Flow cytometry and molecular testing logic.  
   - Goal: Understand test selection and immunophenotypic patterns.

### USE CASES
- “This marrow is hypercellular—what are the possibilities?”  
- “What does this flow cytometry pattern suggest?”  
- “Is this a reactive lymph node or lymphoma?”  
- “Is this MDS or reactive dysplasia?”  
- “What does del(5q), JAK2, BCR-ABL, or t(15;17) mean in context?”  

---

# **4. CURRICULUM MAP & KNOWLEDGE GRAPH (HEMATOPATHY-FOCUSED)**

### MODULE A — Foundations of Hematopathology
- CBC correlation  
- Bone marrow anatomy  
- Aspirate vs core strengths  
- Dry tap reasoning  
- Cellularity estimation (age-related)  
- Trilineage hematopoiesis  
- Dysplasia: definitions & thresholds  

---

### MODULE B — Peripheral Smear & Marrow Morphology
- RBC morphology: tear drops, spherocytes, schistocytes, polychromasia  
- WBC morphology: blasts, promyelocytes, reactive lymphocytes, plasma cells  
- Platelet morphology: giant platelets, hypo-/hypergranular forms  
- Megakaryocyte patterns  
- Fibrosis grading (conceptual)  
- “Big picture” integrated interpretation

---

### MODULE C — Acute Leukemias (WHO/ICC-Oriented)
- AML:  
  - Blast % thresholds  
  - Auer rods  
  - Cytogenetic groups:  
    - t(8;21)  
    - inv(16)  
    - t(15;17)  
  - Immunophenotype: MPO+, CD34±  

- ALL:  
  - B-ALL vs T-ALL  
  - TdT  
  - Flow patterns (CD19, CD10, CD79a, CD3, CD7)  

- Inherited predisposition syndromes (conceptual)  
- MRD by flow (conceptual only)  

---

### MODULE D — Chronic Myeloid & Myeloproliferative Neoplasms
- CML:  
  - Basophilia  
  - BCR-ABL fusion  
  - Low LAP  
- MPNs:  
  - Polycythemia Vera → JAK2  
  - Essential Thrombocythemia  
  - Primary Myelofibrosis (tear drops, leukoerythroblastosis)  
  - CALR/MPL conceptual introduction  

---

### MODULE E — Myelodysplastic Syndromes (MDS)
- Dysplasia in ≥10% of a lineage  
- Ring sideroblasts (conceptual)  
- Cytogenetics (del5q, complex karyotype)  
- Hypocellular vs hypercellular variants  
- Flow cytometry signs of dyspoiesis  

---

### MODULE F — Lymph Node Pathology & Lymphomas
#### Lymph Node Architecture
- Germinal center, mantle zone, marginal zone  
- Sinuses, paracortex  

#### Hodgkin Lymphoma
- Reed-Sternberg patterns  
- Immunophenotype: CD30+, CD15+, PAX5 weak  

#### Non-Hodgkin Lymphomas
- B-cell:  
  - Follicular (BCL2 rearrangement, CD10+)  
  - DLBCL  
  - Burkitt (MYC, starry sky)  
  - MCL (Cyclin D1, t(11;14))  
  - Marginal zone patterns  

- T-cell lymphomas:  
  - Peripheral T-cell  
  - Anaplastic large cell (CD30+)  
  - Mycosis fungoides/Sezary  

- Small B-cell lymphoma table:  
  - CLL/SLL  
  - FL  
  - MZL  
  - MCL  
  - LPL  

#### Reactive vs Neoplastic
- Paracortical hyperplasia  
- Follicular hyperplasia  
- Sinus histiocytosis  
- Polyclonal vs restricted patterns  

---

### MODULE G — Plasma Cell Neoplasms
- MGUS vs Myeloma  
- CRAB features correlation  
- Flow: CD38 bright, CD138+  
- Light chain restriction  
- Plasmacytoma clues  

---

### MODULE H — Flow Cytometry Mastery
#### Principles
- Forward scatter (size)  
- Side scatter (granularity)  
- Compensation basics  
- Gating philosophy  

#### Lineage Patterns
- B-cell markers: CD19, CD20, CD22, CD79a  
- T-cell markers: CD2, CD3, CD4, CD5, CD7, CD8  
- Myeloid markers: CD13, CD33, MPO  
- Blast markers: CD34, CD117, TdT  

#### Aberrancy Patterns  
- Co-expression clues  
- Loss-of-marker patterns  
- Clonality: κ/λ ratios  

---

### MODULE I — Cytogenetics & Molecular Diagnostics
- Karyotyping overview  
- FISH basics  
- Common translocations (t8;21, t15;17, t11;14, etc.)  
- Copy number variations  
- PCR, RT-PCR, NGS basics  
- Mutation profiles: JAK2, CALR, MPL, BCR-ABL, MYD88  

---

### MODULE J — Integrated Diagnosis & Reporting
- Morphology → Flow → Cytogenetics → Molecular → Clinical integration  
- Typical heme-path report skeleton  
- Differential diagnoses  
- When to recommend additional testing  
- “Pitfalls & Pearls” in interpretation  

---

# **5. INTERACTIVE MODELS (TABLE)**

| Interactive | Purpose | Inputs | Outputs | Visual | Guardrails |
|------------|---------|--------|---------|--------|------------|
| Marrow Cellularity Estimator | Visual interpretation practice | Age, core sample description | Expected vs actual cellularity | Schematic core | Educational only |
| Dysplasia Detector | Recognize dysplasia patterns | Cell description | Dysplasia yes/no | Morphology icons | Synthetic data |
| Flow Cytometry Pattern Classifier | B-cell, T-cell, myeloid, blasts | CD marker panel | Likely lineage | Dot plots (schematic) | No real patient data |
| Leukemia Logic Pathway | Acute vs chronic | CBC + smear + flow | Category + key features | Algorithmic flow | Educational |
| Lymph Node Pattern Explorer | Reactive vs lymphoma | Pattern descriptions | Architecture-based interpretation | Node diagram | No photos |
| Cytogenetic Signature Match | Translocation recognition | t(x;y) clues | Associated disease | Chromosome diagrams | No real data |
| Plasma Cell Clonality Checker | κ/λ patterns | Light chain ratios | Polyclonal vs clonal | Ratio bars | Educational |
| Integrated Diagnosis Builder | Combine morph + flow + molecular | Selected findings | Final diagnosis (suggested category) | Integration map | Not for clinical use |

---

# **6. ASSESSMENT & MASTERY (Session-Only)**

Types of items:
- Morphology ID (icon-based)  
- Flow cytometry patterns  
- Cytogenetic associations  
- WHO/ICC category classification  
- Reactive vs neoplastic distinctions  
- Small B-cell lymphoma differentials  
- MDS vs aplastic anemia vs reactive cytopenias  

End of quiz:
- Show session-only score  
- Suggest related lessons  
- No history stored  

---

# **7. HEMATOPATH REASONING FRAMEWORK**

1. **Start with CBC & history**  
2. **Evaluate smear**  
3. **Assess marrow morphology (core + aspirate)**  
4. **Run flow cytometry (lineage + aberrancy)**  
5. **Check cytogenetics**  
6. **Add molecular testing when needed**  
7. **Integrate all data into WHO/ICC category**  
8. **Draft a structured report**  
9. **Recognize pitfalls (false clonality, sampling error, hemodilution, reactive mimics)**  

---

# **8. ACCESSIBILITY, EQUITY, SAFETY**

- WCAG 2.2 AA  
- Dark mode default  
- High-contrast morphology diagrams  
- Diverse names and scenarios  
- No treatment recommendations  
- Strict disclaimers (“Educational only. Not for diagnosis.”)  

---

# **9. TECH ARCHITECTURE**

Stack:
- React + TypeScript  
- Tailwind + shadcn/ui  
- Zustand (session-only)  
- Service Worker (offline)

Routes:
- `/foundations`  
- `/marrow`  
- `/smear`  
- `/flow`  
- `/genetics`  
- `/leukemias`  
- `/lymphomas`  
- `/plasmacell`  
- `/mpn-mds`  
- `/integration`  
- `/cases`  
- `/assessment`  
- `/settings`  

Settings ONLY:
- Dark/light toggle  
- About  
- Disclaimers  

---

# **10. DATA SCHEMAS (PLAIN JSON)**

### Morphology Entity

    {
      "id": "auer_rod",
      "name": "Auer rod",
      "associated": ["AML"],
      "description": "Linear red needle-like inclusion in blasts."
    }

### Flow Panel Schema

    {
      "id": "b_cell_panel",
      "markers": ["CD19", "CD20", "CD10"],
      "pattern": "B-cell phenotype, germinal center type"
    }

### Case Schema

    {
      "id": "acute_leukemia_case_4",
      "cbc": {"wbc": 52.0, "hgb": 8.2, "plt": 45},
      "morph": ["blasts", "auer_rods"],
      "flow": {"cd34": "positive", "mpo": "positive", "cd13": "positive"},
      "cyto": ["t(8;21)"],
      "question": "Likely diagnosis?",
      "options": ["AML with t(8;21)", "ALL", "CML blast crisis"],
      "correct": "AML with t(8;21)",
      "rationale": "Compatible blast morphology + immunophenotype + cytogenetic signature."
    }

---

# **11. SCREENS & WIREFRAMES**

### Home  
- Module tiles: Marrow • Flow • Genetics • Leukemias • Lymphomas • MDS/MPN • Plasma Cell • Integration  

### Module Overview  
- Summary  
- Sub-sections  
- Quick quiz  

### Lesson Page  
- Morphology diagrams  
- Flow cytometry schematics  
- Cytogenetic mini-charts  
- Integration pearls  

### Case Engine  
- Single vignette view  
- Flow/morph/molecular snippets  
- Answer + rationale  

### Assessment  
- 5–15 questions  
- Session-only score  

### Settings  
- Theme toggle  
- About  
- Disclaimers  

---

# **12. COPY & CONTENT KIT**

Examples:
- “If you see basophilia, think CML until proven otherwise.”  
- “CD10 + BCL2 = follicular-type pattern.”  
- “Auer rods almost always mean a myeloid blast process.”  
- “κ:λ ratio > 3:1 or < 0.3:1 suggests clonality.”  
- “t(11;14) is highly characteristic of mantle cell lymphoma.”  

Glossary items:
- Blasts, dysplasia, light-chain restriction, gating, clonality, FISH, karyotype, NGS, double-hit lymphoma, etc.

---

# **13. ANALYTICS & A/B PLAN**

(For creators; no user tracking in-app.)

- Compare icon-based morphology vs text-based training.  
- Evaluate learner confusion zones: MDS vs MPN vs reactive.  
- Flow dot-plot readability testing.

---

# **14. QA CHECKLIST**

- Morphology icons accurate  
- Flow patterns accurate  
- Cytogenetic associations correct  
- No treatment/dosing guidance  
- No real patient data  

---

# **15. ROADMAP**

- M0: Marrow + Smear + Basics  
- M1: Leukemias + Flow  
- M2: Lymphomas + Genetics  
- M3: Full Integration Module  
- M4: Massive Case Bank (100+ cases)

---

# **ACCEPTANCE CRITERIA**

- Complete hematopathology coverage  
- High clarity, accurate, structured  
- Integrated reasoning emphasized  
- All interactives offline-capable  
- No user tracking  
- Settings minimal  

---

## **NOW GENERATE**

Using this blueprint, generate the full hematopathology educational app specification and scaffolding in the required order, fully respecting all constraints.
