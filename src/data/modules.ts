import { Module } from '@/types';

export const modules: Module[] = [
  {
    id: 'foundations',
    title: 'Foundations of Hematopathology',
    description: 'Core concepts: CBC correlation, bone marrow anatomy, cellularity, dysplasia',
    icon: '🔬',
    color: 'from-blue-500 to-cyan-500',
    route: '/module/foundations',
    sections: [
      {
        id: 'cbc-correlation',
        title: 'CBC Correlation',
        content: 'Understanding the complete blood count (CBC) is the foundation of hematopathology. The CBC provides quantitative data about blood cells that must be correlated with morphologic findings.',
        subsections: [
          {
            id: 'cbc-basics',
            title: 'CBC Components',
            content: 'Key parameters include WBC count, hemoglobin, hematocrit, platelet count, MCV, MCH, MCHC, and differential.',
            keyPoints: [
              'WBC normal range: 4.5-11.0 × 10⁹/L',
              'Hemoglobin: Males 13.5-17.5 g/dL, Females 12.0-15.5 g/dL',
              'Platelets: 150-400 × 10⁹/L',
              'MCV: 80-100 fL'
            ],
            clinicalPearls: [
              'Always correlate CBC with peripheral smear',
              'Automated counts can be inaccurate in certain conditions',
              'Platelet clumping can falsely lower platelet counts'
            ]
          }
        ]
      },
      {
        id: 'marrow-anatomy',
        title: 'Bone Marrow Anatomy',
        content: 'The bone marrow is the primary site of hematopoiesis in adults. Understanding normal anatomy is essential for recognizing pathology.',
        subsections: [
          {
            id: 'marrow-structure',
            title: 'Structural Components',
            content: 'Bone marrow consists of hematopoietic cells, adipocytes, stromal cells, and vascular sinuses.',
            keyPoints: [
              'Red marrow: Active hematopoiesis',
              'Yellow marrow: Predominantly adipocytes',
              'Trabecular bone provides structural support',
              'Sinusoids allow mature cells to enter circulation'
            ]
          },
          {
            id: 'cellularity',
            title: 'Cellularity Assessment',
            content: 'Marrow cellularity varies with age. Expected cellularity = 100 - age (±10%).',
            keyPoints: [
              'Infant: 80-100% cellular',
              'Young adult (20 years): 70-80%',
              'Middle age (50 years): 40-60%',
              'Elderly (80 years): 20-30%'
            ],
            clinicalPearls: [
              'Assess cellularity on core biopsy, not aspirate',
              'Compare to age-adjusted normal',
              'Hypercellular marrow: >80% or >10% above expected',
              'Hypocellular marrow: <20% or >10% below expected'
            ]
          }
        ]
      },
      {
        id: 'aspirate-vs-core',
        title: 'Aspirate vs Core Biopsy',
        content: 'Both aspirate smears and core biopsies are essential and complementary.',
        subsections: [
          {
            id: 'aspirate-strengths',
            title: 'Aspirate Advantages',
            content: 'Superior for morphologic detail of individual cells.',
            keyPoints: [
              'Excellent cytologic detail',
              'Cell maturation assessment',
              'Differential counts',
              'Flow cytometry source',
              'Cytogenetic studies'
            ]
          },
          {
            id: 'core-strengths',
            title: 'Core Biopsy Advantages',
            content: 'Superior for architecture and cellularity assessment.',
            keyPoints: [
              'Cellularity assessment',
              'Fibrosis evaluation',
              'Architectural patterns',
              'Immunohistochemistry',
              'Useful when dry tap occurs'
            ],
            clinicalPearls: [
              'Dry tap: Consider myelofibrosis, packed marrow, or technical issue',
              'Always get both aspirate and core when possible'
            ]
          }
        ]
      },
      {
        id: 'dysplasia',
        title: 'Dysplasia Definitions',
        content: 'Dysplasia refers to abnormal morphology in maturing cells. Must be present in ≥10% of cells in a lineage to be significant.',
        subsections: [
          {
            id: 'dysplasia-types',
            title: 'Types of Dysplasia',
            content: 'Dysplastic changes can affect any hematopoietic lineage.',
            keyPoints: [
              'Megakaryocytic: Hypolobated nuclei, multiple separated nuclei',
              'Erythroid: Nuclear irregularity, multinucleation, ring sideroblasts',
              'Granulocytic: Pseudo-Pelger-Huët, hypogranulation, abnormal segmentation'
            ],
            clinicalPearls: [
              'Dysplasia threshold: ≥10% of lineage',
              'Can be seen in MDS, therapy-related changes, vitamin deficiencies',
              'Must distinguish from reactive changes'
            ]
          }
        ]
      },
      {
        id: 'trilineage',
        title: 'Trilineage Hematopoiesis',
        content: 'Normal marrow shows balanced maturation of all three lineages: erythroid, myeloid, and megakaryocytic.',
        subsections: [
          {
            id: 'me-ratio',
            title: 'Myeloid:Erythroid Ratio',
            content: 'Normal M:E ratio is approximately 3:1 to 4:1.',
            keyPoints: [
              'Increased M:E: Granulocytic proliferation or erythroid hypoplasia',
              'Decreased M:E: Erythroid hyperplasia or granulocytic hypoplasia',
              'Assess on aspirate smears'
            ]
          },
          {
            id: 'maturation',
            title: 'Maturation Assessment',
            content: 'Each lineage should show orderly maturation from precursors to mature forms.',
            keyPoints: [
              'Myeloid: Blasts → promyelocytes → myelocytes → metamyelocytes → bands → neutrophils',
              'Erythroid: Pronormoblasts → basophilic → polychromatic → orthochromatic normoblasts',
              'Megakaryocytic: Megakaryoblasts → promegakaryocytes → mature megakaryocytes'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'marrow-smear',
    title: 'Peripheral Smear & Marrow Morphology',
    description: 'RBC, WBC, platelet morphology, megakaryocyte patterns',
    icon: '🩸',
    color: 'from-red-500 to-pink-500',
    route: '/module/marrow-smear',
    sections: [
      {
        id: 'rbc-morphology',
        title: 'Red Blood Cell Morphology',
        content: 'RBC morphology provides crucial diagnostic clues.',
        subsections: [
          {
            id: 'rbc-variants',
            title: 'Common RBC Variants',
            content: 'Recognition of RBC morphologic abnormalities.',
            keyPoints: [
              'Spherocytes: Hereditary spherocytosis, AIHA',
              'Schistocytes: Microangiopathic hemolysis, TTP/HUS',
              'Tear drops: Myelofibrosis, extramedullary hematopoiesis',
              'Target cells: Liver disease, thalassemia, HbC',
              'Polychromasia: Reticulocytosis, active erythropoiesis',
              'Howell-Jolly bodies: Asplenia, severe hemolysis'
            ],
            clinicalPearls: [
              'Teardrop cells highly suggestive of myelofibrosis',
              'Schistocytes >1% suggests microangiopathic process',
              'Polychromasia correlates with reticulocyte count'
            ]
          }
        ]
      },
      {
        id: 'wbc-morphology',
        title: 'White Blood Cell Morphology',
        content: 'Detailed WBC morphology is essential for diagnosis.',
        subsections: [
          {
            id: 'blast-features',
            title: 'Blast Identification',
            content: 'Blasts are immature precursor cells with specific features.',
            keyPoints: [
              'High nuclear:cytoplasmic ratio',
              'Fine, open chromatin',
              'Nucleoli present (1-3)',
              'Scant to moderate cytoplasm',
              'May have Auer rods (myeloid blasts)'
            ],
            clinicalPearls: [
              'Auer rods are pathognomonic for myeloid lineage',
              'Not all large cells with nucleoli are blasts',
              'Blast count >20% defines acute leukemia'
            ]
          },
          {
            id: 'reactive-lymphs',
            title: 'Reactive Lymphocytes',
            content: 'Distinguishing reactive from neoplastic lymphocytes.',
            keyPoints: [
              'Viral infections: EBV, CMV, HIV',
              'Enlarged with abundant basophilic cytoplasm',
              'Variable morphology',
              'Immunoblasts may have prominent nucleoli'
            ]
          },
          {
            id: 'plasma-cells',
            title: 'Plasma Cells',
            content: 'Normal plasma cells and recognition of abnormal forms.',
            keyPoints: [
              'Eccentric nucleus with clock-face chromatin',
              'Perinuclear hof (Golgi zone)',
              'Abundant basophilic cytoplasm',
              'Normal marrow: <5% plasma cells',
              'Increased in myeloma, plasmacytoma, reactive conditions'
            ]
          }
        ]
      },
      {
        id: 'platelet-morphology',
        title: 'Platelet Morphology',
        content: 'Platelet abnormalities can indicate underlying disorders.',
        subsections: [
          {
            id: 'platelet-variants',
            title: 'Morphologic Variants',
            content: 'Recognition of abnormal platelet forms.',
            keyPoints: [
              'Giant platelets: MPN, immune thrombocytopenia',
              'Hypogranular: MDS, storage pool disease',
              'Platelet clumping: Can cause pseudothrombocytopenia',
              'Circulating megakaryocyte fragments: Myelofibrosis'
            ]
          }
        ]
      },
      {
        id: 'megakaryocytes',
        title: 'Megakaryocyte Patterns',
        content: 'Megakaryocyte morphology in marrow provides diagnostic information.',
        subsections: [
          {
            id: 'normal-megs',
            title: 'Normal Megakaryocytes',
            content: 'Baseline megakaryocyte characteristics.',
            keyPoints: [
              'Large cells (50-100 μm)',
              'Multilobated nucleus',
              'Abundant cytoplasm',
              'Scattered distribution',
              '1-3 per low-power field in core'
            ]
          },
          {
            id: 'abnormal-megs',
            title: 'Pathologic Patterns',
            content: 'Megakaryocyte abnormalities in disease.',
            keyPoints: [
              'Hypolobation: MDS, MPN',
              'Clustering: MPN',
              'Increased: ITP, reactive, MPN',
              'Decreased: Aplasia, MDS',
              'Dysplastic: Separated nuclei, small forms'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'acute-leukemias',
    title: 'Acute Leukemias',
    description: 'AML and ALL: blasts, cytogenetics, immunophenotypes',
    icon: '⚡',
    color: 'from-orange-500 to-red-500',
    route: '/module/acute-leukemias',
    sections: [
      {
        id: 'aml-overview',
        title: 'Acute Myeloid Leukemia (AML)',
        content: 'AML is defined by ≥20% blasts in blood or marrow, or specific cytogenetic abnormalities.',
        subsections: [
          {
            id: 'aml-diagnosis',
            title: 'Diagnostic Criteria',
            content: 'WHO/ICC criteria for AML diagnosis.',
            keyPoints: [
              '≥20% blasts in blood or marrow',
              'OR specific defining cytogenetics: t(15;17), t(8;21), inv(16), t(16;16)',
              'Myeloid lineage confirmed by MPO, CD13, CD33',
              'Auer rods are pathognomonic'
            ],
            clinicalPearls: [
              't(15;17) = APL - medical emergency (DIC risk)',
              't(8;21) = RUNX1::RUNX1T1 - favorable prognosis',
              'inv(16) = CBFB::MYH11 - favorable prognosis'
            ]
          },
          {
            id: 'aml-cytogenetics',
            title: 'Key Cytogenetic Groups',
            content: 'Cytogenetics guide prognosis and therapy.',
            keyPoints: [
              'Favorable: t(8;21), inv(16), t(15;17)',
              'Intermediate: Normal karyotype, others',
              'Unfavorable: Complex karyotype, del(5q), del(7q), inv(3)'
            ]
          },
          {
            id: 'aml-flow',
            title: 'Immunophenotype',
            content: 'Flow cytometry patterns in AML.',
            keyPoints: [
              'MPO+: Defines myeloid lineage',
              'CD34+: Immature marker (variable)',
              'CD117+: Myeloid progenitors',
              'CD13, CD33: Myeloid markers',
              'Aberrant expression helps identify MRD'
            ]
          }
        ]
      },
      {
        id: 'all-overview',
        title: 'Acute Lymphoblastic Leukemia (ALL)',
        content: 'ALL is characterized by lymphoid blasts, either B- or T-lineage.',
        subsections: [
          {
            id: 'b-all',
            title: 'B-Acute Lymphoblastic Leukemia',
            content: 'B-ALL is more common than T-ALL.',
            keyPoints: [
              'TdT+: Immature lymphoid marker',
              'CD19+, CD79a+: B-cell markers',
              'CD10+ (CALLA): Common in B-ALL',
              'Surface Ig usually negative',
              't(9;22) BCR::ABL1 - requires TKI therapy',
              't(12;21) ETV6::RUNX1 - favorable in children'
            ],
            clinicalPearls: [
              'Philadelphia chromosome t(9;22) worse prognosis',
              'CD10+ "common ALL" historically most frequent subtype',
              'Hyperdiploidy (>50 chromosomes) - favorable'
            ]
          },
          {
            id: 't-all',
            title: 'T-Acute Lymphoblastic Leukemia',
            content: 'T-ALL represents ~15% of ALL cases.',
            keyPoints: [
              'TdT+',
              'CD3+, CD7+: T-cell markers',
              'CD4 and/or CD8 expression variable',
              'Often presents with mediastinal mass',
              'CNS involvement more common'
            ]
          }
        ]
      },
      {
        id: 'blast-differential',
        title: 'Distinguishing AML from ALL',
        content: 'Key features to differentiate acute leukemias.',
        subsections: [
          {
            id: 'morphology',
            title: 'Morphologic Clues',
            content: 'Cytologic features favoring AML vs ALL.',
            keyPoints: [
              'Auer rods: Myeloid only',
              'MPO stain positive: Myeloid',
              'Large blasts with granules: Often myeloid',
              'Small blasts, scant cytoplasm: Often lymphoid'
            ]
          },
          {
            id: 'definitive',
            title: 'Definitive Testing',
            content: 'Flow cytometry and molecular studies are definitive.',
            keyPoints: [
              'Flow cytometry shows lineage markers',
              'MPO by flow confirms myeloid',
              'TdT suggests lymphoid (but can be in AML)',
              'Cytogenetics help classify and prognosticate'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'mpn-mds',
    title: 'MPN & MDS',
    description: 'Myeloproliferative neoplasms and myelodysplastic syndromes',
    icon: '📊',
    color: 'from-purple-500 to-indigo-500',
    route: '/module/mpn-mds',
    sections: [
      {
        id: 'cml',
        title: 'Chronic Myeloid Leukemia (CML)',
        content: 'CML is defined by BCR::ABL1 fusion.',
        subsections: [
          {
            id: 'cml-features',
            title: 'Characteristic Features',
            content: 'Classic findings in CML.',
            keyPoints: [
              'Leukocytosis with left shift',
              'Basophilia',
              'Low LAP (leukocyte alkaline phosphatase)',
              'BCR::ABL1 t(9;22) Philadelphia chromosome',
              'Hypercellular marrow'
            ],
            clinicalPearls: [
              'Basophilia is a key clue',
              't(9;22) in 95% of cases',
              'TKI therapy (imatinib) is first-line',
              'Blast crisis = progression to acute leukemia'
            ]
          }
        ]
      },
      {
        id: 'mpn',
        title: 'Myeloproliferative Neoplasms',
        content: 'Clonal proliferations of one or more myeloid lineages.',
        subsections: [
          {
            id: 'pv',
            title: 'Polycythemia Vera (PV)',
            content: 'Erythroid-predominant MPN.',
            keyPoints: [
              'Elevated hemoglobin/hematocrit',
              'JAK2 V617F mutation in >95%',
              'Hypercellular marrow',
              'Panmyelosis (all lineages increased)',
              'Risk: Thrombosis, progression to MF or AML'
            ]
          },
          {
            id: 'et',
            title: 'Essential Thrombocythemia (ET)',
            content: 'Megakaryocytic-predominant MPN.',
            keyPoints: [
              'Sustained thrombocytosis (>450 × 10⁹/L)',
              'JAK2 V617F (~50%), CALR (~25%), MPL (~3%)',
              'Large, mature megakaryocytes',
              'Risk: Thrombosis, hemorrhage'
            ]
          },
          {
            id: 'pmf',
            title: 'Primary Myelofibrosis (PMF)',
            content: 'MPN with marrow fibrosis.',
            keyPoints: [
              'Marrow fibrosis',
              'Leukoerythroblastic blood picture',
              'Teardrop cells',
              'JAK2, CALR, or MPL mutations',
              'Extramedullary hematopoiesis (splenomegaly)'
            ],
            clinicalPearls: [
              'Dry tap is common',
              'Tear drop RBCs are classic',
              'Reticulin and collagen fibrosis on biopsy'
            ]
          }
        ]
      },
      {
        id: 'mds',
        title: 'Myelodysplastic Syndromes (MDS)',
        content: 'Clonal disorders with ineffective hematopoiesis and dysplasia.',
        subsections: [
          {
            id: 'mds-criteria',
            title: 'Diagnostic Criteria',
            content: 'MDS diagnosis requires dysplasia and/or cytogenetics.',
            keyPoints: [
              'Dysplasia ≥10% in one or more lineages',
              'Cytopenias',
              'Blasts <20% (≥20% = AML)',
              'MDS-defining cytogenetics can diagnose even without dysplasia'
            ]
          },
          {
            id: 'mds-types',
            title: 'MDS Subtypes',
            content: 'Classification based on blasts, dysplasia, ring sideroblasts.',
            keyPoints: [
              'MDS with low blasts (<5%)',
              'MDS with increased blasts (5-19%)',
              'MDS with ring sideroblasts (SF3B1 mutation)',
              'MDS with del(5q): Favorable prognosis'
            ],
            clinicalPearls: [
              'del(5q) responds well to lenalidomide',
              'Complex karyotype (≥3 abnormalities) = poor prognosis',
              'Ring sideroblasts: ≥15% or ≥5% with SF3B1 mutation'
            ]
          },
          {
            id: 'mds-vs-reactive',
            title: 'MDS vs Reactive Dysplasia',
            content: 'Distinguishing clonal from reactive changes.',
            keyPoints: [
              'Clonal cytogenetics support MDS',
              'Flow aberrancy supports MDS',
              'Reactive: B12/folate deficiency, toxins, infection',
              'If uncertain, follow-up and repeat evaluation'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'lymphomas',
    title: 'Lymphomas',
    description: 'Hodgkin and non-Hodgkin lymphomas, architecture, flow patterns',
    icon: '🫀',
    color: 'from-green-500 to-emerald-500',
    route: '/module/lymphomas',
    sections: [
      {
        id: 'lymph-node',
        title: 'Lymph Node Architecture',
        content: 'Understanding normal lymph node structure is essential.',
        subsections: [
          {
            id: 'architecture',
            title: 'Normal Architecture',
            content: 'Structural components of lymph nodes.',
            keyPoints: [
              'Cortex: B-cell follicles with germinal centers',
              'Mantle zone: Naive B cells around GC',
              'Marginal zone: Post-GC memory B cells',
              'Paracortex: T-cell zone',
              'Medullary cords and sinuses: Plasma cells, macrophages'
            ]
          }
        ]
      },
      {
        id: 'hodgkin',
        title: 'Hodgkin Lymphoma',
        content: 'HL characterized by Reed-Sternberg cells in inflammatory background.',
        subsections: [
          {
            id: 'rs-cells',
            title: 'Reed-Sternberg Cells',
            content: 'Diagnostic cells in Hodgkin lymphoma.',
            keyPoints: [
              'Large bi- or multinucleated cells',
              'Prominent nucleoli ("owl eyes")',
              'CD30+, CD15+ (classic)',
              'PAX5 weak/dim',
              'CD45 negative',
              'CD20 usually negative'
            ],
            clinicalPearls: [
              'RS cells are rare; background has reactive cells',
              'Nodular sclerosis most common subtype',
              'EBV associated in some cases'
            ]
          }
        ]
      },
      {
        id: 'nhl-b',
        title: 'B-Cell Non-Hodgkin Lymphomas',
        content: 'Diverse group of B-cell neoplasms.',
        subsections: [
          {
            id: 'follicular',
            title: 'Follicular Lymphoma (FL)',
            content: 'Indolent B-cell lymphoma with follicular pattern.',
            keyPoints: [
              'Follicular (nodular) architecture',
              'CD10+, BCL6+, BCL2+ (abnormal)',
              't(14;18) BCL2 rearrangement',
              'Grades 1-3 based on centroblast count',
              'Indolent course, often incurable'
            ]
          },
          {
            id: 'dlbcl',
            title: 'Diffuse Large B-Cell Lymphoma (DLBCL)',
            content: 'Aggressive B-cell lymphoma.',
            keyPoints: [
              'Diffuse growth pattern',
              'Large cells (>2× normal lymphocyte)',
              'CD20+, CD19+',
              'Variable CD10, BCL6',
              'Aggressive but potentially curable'
            ],
            clinicalPearls: [
              'Most common aggressive lymphoma',
              'Double-hit (MYC + BCL2/BCL6) = worse prognosis',
              'R-CHOP standard therapy'
            ]
          },
          {
            id: 'burkitt',
            title: 'Burkitt Lymphoma',
            content: 'Highly aggressive B-cell lymphoma.',
            keyPoints: [
              'Monomorphic medium-sized cells',
              'Starry-sky pattern (macrophages)',
              'MYC rearrangement t(8;14), t(2;8), or t(8;22)',
              'CD10+, BCL6+, BCL2 negative',
              'Very high proliferation (Ki-67 ~100%)'
            ]
          },
          {
            id: 'mcl',
            title: 'Mantle Cell Lymphoma (MCL)',
            content: 'B-cell lymphoma with aggressive behavior.',
            keyPoints: [
              'Small to medium lymphocytes',
              'Diffuse or vaguely nodular pattern',
              't(11;14) cyclin D1 rearrangement',
              'Cyclin D1+ (IHC)',
              'CD5+, CD20+, CD10 negative'
            ],
            clinicalPearls: [
              'Often presents at advanced stage',
              'GI involvement common (lymphomatous polyposis)',
              'Aggressive clinical course'
            ]
          },
          {
            id: 'cll-sll',
            title: 'CLL/SLL',
            content: 'Chronic lymphocytic leukemia / Small lymphocytic lymphoma.',
            keyPoints: [
              'Small mature lymphocytes',
              'CD5+, CD23+, CD20 dim',
              'Surface Ig dim',
              'Smudge cells on peripheral smear',
              'Indolent, often elderly patients'
            ]
          },
          {
            id: 'small-b-table',
            title: 'Small B-Cell Lymphoma Differential',
            content: 'Key markers to distinguish small B-cell lymphomas.',
            keyPoints: [
              'CLL/SLL: CD5+, CD23+, CD10-',
              'MCL: CD5+, CD23-, cyclin D1+',
              'FL: CD10+, BCL2+, t(14;18)',
              'MZL: CD5-, CD10-, CD23-',
              'LPL: CD5-, CD10-, surface Ig++'
            ]
          }
        ]
      },
      {
        id: 'nhl-t',
        title: 'T-Cell Lymphomas',
        content: 'Less common but important T-cell neoplasms.',
        subsections: [
          {
            id: 'ptcl',
            title: 'Peripheral T-Cell Lymphoma (PTCL)',
            content: 'Heterogeneous group of mature T-cell lymphomas.',
            keyPoints: [
              'CD3+, CD2+, CD5+, CD7+',
              'Loss of pan-T markers common',
              'Often aggressive',
              'Requires T-cell receptor gene rearrangement for clonality'
            ]
          },
          {
            id: 'alcl',
            title: 'Anaplastic Large Cell Lymphoma (ALCL)',
            content: 'T-cell lymphoma with large anaplastic cells.',
            keyPoints: [
              'CD30+ (hallmark)',
              'ALK+ (better prognosis) or ALK-',
              't(2;5) NPM::ALK in ALK+ cases',
              'Large pleomorphic cells'
            ]
          },
          {
            id: 'mf-sezary',
            title: 'Mycosis Fungoides / Sézary Syndrome',
            content: 'Cutaneous T-cell lymphomas.',
            keyPoints: [
              'Mycosis fungoides: Skin patches/plaques',
              'Sézary: Leukemic phase with erythroderma',
              'Cerebriform nuclei (Sézary cells)',
              'CD4+, CD7 often lost'
            ]
          }
        ]
      },
      {
        id: 'reactive-vs-neoplastic',
        title: 'Reactive vs Neoplastic',
        content: 'Distinguishing benign from malignant lymphoid proliferations.',
        subsections: [
          {
            id: 'reactive-patterns',
            title: 'Reactive Patterns',
            content: 'Benign lymph node changes.',
            keyPoints: [
              'Follicular hyperplasia: Reactive germinal centers',
              'Paracortical hyperplasia: T-cell response (viral)',
              'Sinus histiocytosis: Macrophage proliferation',
              'Polyclonal plasma cells',
              'Preserved architecture'
            ]
          },
          {
            id: 'clonality',
            title: 'Clonality Assessment',
            content: 'Tools to detect monoclonality.',
            keyPoints: [
              'Flow: κ/λ ratio (B-cells), aberrant T-cell markers',
              'IHC: κ/λ light chain restriction',
              'Molecular: Ig or TCR gene rearrangement',
              'Cytogenetics: Specific translocations'
            ],
            clinicalPearls: [
              'κ:λ ratio >3:1 or <0.3:1 suggests clonality',
              'Architecture effacement favors lymphoma',
              'Monomorphic population suspicious for lymphoma'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'flow-cytometry',
    title: 'Flow Cytometry Mastery',
    description: 'Principles, lineage patterns, aberrancy, clonality',
    icon: '🔬',
    color: 'from-cyan-500 to-blue-500',
    route: '/module/flow-cytometry',
    sections: [
      {
        id: 'flow-principles',
        title: 'Flow Cytometry Principles',
        content: 'Understanding how flow cytometry works.',
        subsections: [
          {
            id: 'scatter',
            title: 'Scatter Properties',
            content: 'Forward and side scatter provide cell size and granularity.',
            keyPoints: [
              'Forward scatter (FSC): Cell size',
              'Side scatter (SSC): Granularity/complexity',
              'Lymphocytes: Low FSC, low SSC',
              'Monocytes: Moderate FSC, moderate SSC',
              'Granulocytes: Moderate FSC, high SSC'
            ]
          },
          {
            id: 'fluorescence',
            title: 'Fluorescence Detection',
            content: 'Antibodies conjugated to fluorochromes detect cell markers.',
            keyPoints: [
              'Multiple fluorochromes allow multi-parameter analysis',
              'Compensation corrects for spectral overlap',
              'Gating: Selecting cell populations of interest'
            ]
          }
        ]
      },
      {
        id: 'b-cell-markers',
        title: 'B-Cell Markers',
        content: 'Key markers for B-cell identification and characterization.',
        subsections: [
          {
            id: 'pan-b',
            title: 'Pan-B-Cell Markers',
            content: 'Markers present on most B cells.',
            keyPoints: [
              'CD19: Best pan-B marker',
              'CD20: Mature B cells',
              'CD22: B-cell marker',
              'CD79a: B-cell cytoplasmic',
              'Surface Ig: Mature B cells'
            ]
          },
          {
            id: 'b-subsets',
            title: 'B-Cell Subset Markers',
            content: 'Markers defining B-cell maturation and subsets.',
            keyPoints: [
              'CD10: Germinal center B cells, pre-B',
              'CD34: B-cell progenitors (hematogones)',
              'TdT: B-lymphoblasts',
              'CD5: Abnormal on B cells (CLL, MCL)',
              'CD23: Activated B cells, CLL'
            ],
            clinicalPearls: [
              'Hematogones: CD19+, CD10+, CD34+, TdT+ (benign regenerating B cells)',
              'CD5+ B cells: CLL/SLL or MCL',
              'κ:λ ratio establishes clonality'
            ]
          }
        ]
      },
      {
        id: 't-cell-markers',
        title: 'T-Cell Markers',
        content: 'Key T-cell markers.',
        subsections: [
          {
            id: 'pan-t',
            title: 'Pan-T-Cell Markers',
            content: 'Markers present on most T cells.',
            keyPoints: [
              'CD3: Best pan-T marker (cytoplasmic and surface)',
              'CD2, CD5, CD7: Pan-T markers',
              'CD4: Helper T cells',
              'CD8: Cytotoxic T cells'
            ]
          },
          {
            id: 't-aberrancy',
            title: 'T-Cell Aberrancy',
            content: 'Loss of pan-T markers suggests clonality.',
            keyPoints: [
              'Loss of CD5 or CD7 common in T-cell lymphoma',
              'Abnormal CD4:CD8 ratio',
              'TCR gene rearrangement confirms clonality'
            ],
            clinicalPearls: [
              'Normal CD4:CD8 ~2:1',
              'T-cell clonality harder to prove by flow than B-cell',
              'Molecular studies often needed'
            ]
          }
        ]
      },
      {
        id: 'myeloid-markers',
        title: 'Myeloid Markers',
        content: 'Markers for myeloid lineage.',
        subsections: [
          {
            id: 'myeloid-panel',
            title: 'Myeloid Markers',
            content: 'Key markers for granulocytic and monocytic cells.',
            keyPoints: [
              'CD13, CD33: Myeloid lineage',
              'MPO: Specific for myeloid lineage',
              'CD14, CD64: Monocytic',
              'CD117: Mast cells, myeloid progenitors',
              'CD34: Myeloid blasts'
            ]
          }
        ]
      },
      {
        id: 'blast-markers',
        title: 'Blast Markers',
        content: 'Markers defining immature cells.',
        subsections: [
          {
            id: 'immaturity-markers',
            title: 'Immaturity Markers',
            content: 'Key blast markers.',
            keyPoints: [
              'CD34: Hematopoietic progenitors',
              'TdT: Lymphoid blasts (can be in AML)',
              'CD117: Myeloid progenitors',
              'HLA-DR: Activation, present on blasts'
            ],
            clinicalPearls: [
              'CD34+ defines stem/progenitor cells',
              'TdT+ lymphoid blasts (or AML-M0)',
              'Combination with lineage markers defines blast type'
            ]
          }
        ]
      },
      {
        id: 'aberrancy',
        title: 'Aberrant Marker Expression',
        content: 'Abnormal marker expression helps identify neoplasia.',
        subsections: [
          {
            id: 'aberrant-patterns',
            title: 'Recognizing Aberrancy',
            content: 'Common aberrant patterns.',
            keyPoints: [
              'Co-expression of lineage markers (e.g., CD5+ B cells)',
              'Loss of expected markers',
              'Abnormal intensity of expression',
              'Asynchronous maturation patterns'
            ],
            clinicalPearls: [
              'Aberrancy helps in MRD detection',
              'Not all aberrancy is pathologic',
              'Compare to normal maturation patterns'
            ]
          }
        ]
      },
      {
        id: 'clonality-flow',
        title: 'Clonality by Flow',
        content: 'Using flow to establish clonality.',
        subsections: [
          {
            id: 'kappa-lambda',
            title: 'Light Chain Restriction',
            content: 'κ/λ ratio establishes B-cell clonality.',
            keyPoints: [
              'Normal κ:λ ratio: 1.5:1 to 3:1',
              '>3:1 or <0.3:1 suggests monoclonality',
              'Surface or cytoplasmic Ig',
              'Plasma cells: Cytoplasmic κ or λ'
            ],
            clinicalPearls: [
              'Most reliable method for B-cell clonality',
              'Light chain restriction = monoclonal B cells',
              'Polyclonal: Mixed κ and λ expression'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'plasma-cell',
    title: 'Plasma Cell Neoplasms',
    description: 'MGUS, myeloma, plasmacytoma, CRAB features',
    icon: '⭕',
    color: 'from-yellow-500 to-orange-500',
    route: '/module/plasma-cell',
    sections: [
      {
        id: 'mgus',
        title: 'MGUS',
        content: 'Monoclonal gammopathy of undetermined significance.',
        subsections: [
          {
            id: 'mgus-criteria',
            title: 'MGUS Criteria',
            content: 'Defining criteria for MGUS.',
            keyPoints: [
              'Serum M-protein <3 g/dL',
              'Clonal plasma cells <10% in marrow',
              'No end-organ damage (no CRAB)',
              'Risk of progression ~1%/year'
            ],
            clinicalPearls: [
              'Most common plasma cell disorder',
              'Follow with SPEP, serum free light chains',
              'Progression to myeloma, WM, or AL amyloidosis'
            ]
          }
        ]
      },
      {
        id: 'myeloma',
        title: 'Multiple Myeloma',
        content: 'Clonal plasma cell neoplasm with end-organ damage.',
        subsections: [
          {
            id: 'myeloma-criteria',
            title: 'Diagnostic Criteria',
            content: 'Defining myeloma.',
            keyPoints: [
              'Clonal plasma cells ≥10% in marrow',
              'M-protein in serum and/or urine',
              'Evidence of end-organ damage (CRAB)',
              'Or ≥60% clonal plasma cells, or ≥2 focal lesions'
            ]
          },
          {
            id: 'crab',
            title: 'CRAB Features',
            content: 'End-organ damage from myeloma.',
            keyPoints: [
              'Calcium elevated (hypercalcemia)',
              'Renal insufficiency',
              'Anemia',
              'Bone lesions (lytic lesions, fractures)'
            ],
            clinicalPearls: [
              'CRAB = myeloma-defining event',
              'Requires treatment',
              'Smoldering myeloma: No CRAB, higher tumor burden than MGUS'
            ]
          },
          {
            id: 'myeloma-flow',
            title: 'Immunophenotype',
            content: 'Flow and IHC patterns in myeloma.',
            keyPoints: [
              'CD38 bright, CD138+',
              'CD19 often negative (vs normal plasma cells)',
              'CD56 often positive (aberrant)',
              'Cytoplasmic κ or λ light chain restriction'
            ]
          }
        ]
      },
      {
        id: 'plasmacytoma',
        title: 'Plasmacytoma',
        content: 'Localized plasma cell tumor.',
        subsections: [
          {
            id: 'plasmacytoma-types',
            title: 'Solitary Plasmacytoma',
            content: 'Single site of plasma cell tumor.',
            keyPoints: [
              'Solitary bone plasmacytoma',
              'Extramedullary plasmacytoma (soft tissue)',
              'No systemic myeloma',
              'Risk of progression to myeloma'
            ]
          }
        ]
      },
      {
        id: 'light-chain',
        title: 'Light Chain Diseases',
        content: 'Light chain restriction and related disorders.',
        subsections: [
          {
            id: 'al-amyloid',
            title: 'AL Amyloidosis',
            content: 'Light chain amyloidosis.',
            keyPoints: [
              'Monoclonal light chains form amyloid fibrils',
              'Congo red stain: Apple-green birefringence',
              'Organ involvement: Heart, kidney, liver, nerves',
              'Associated with plasma cell dyscrasia'
            ]
          },
          {
            id: 'light-chain-ratio',
            title: 'Serum Free Light Chains',
            content: 'κ/λ free light chain ratio.',
            keyPoints: [
              'Normal κ/λ ratio: 0.26-1.65',
              'Abnormal ratio suggests clonal process',
              'Used in screening, prognosis, monitoring'
            ],
            clinicalPearls: [
              'Involved/uninvolved FLC ratio ≥100 = myeloma-defining',
              'Useful in light chain-only myeloma'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'cytogenetics',
    title: 'Cytogenetics & Molecular Diagnostics',
    description: 'Karyotyping, FISH, translocations, mutations (JAK2, BCR-ABL, etc.)',
    icon: '🧬',
    color: 'from-pink-500 to-rose-500',
    route: '/module/cytogenetics',
    sections: [
      {
        id: 'karyotype',
        title: 'Karyotyping',
        content: 'Conventional cytogenetics visualizes chromosomes.',
        subsections: [
          {
            id: 'karyotype-basics',
            title: 'Karyotype Interpretation',
            content: 'Understanding karyotype reports.',
            keyPoints: [
              '46,XY = normal male',
              '46,XX = normal female',
              't = translocation',
              'inv = inversion',
              'del = deletion',
              'add = additional material'
            ],
            clinicalPearls: [
              'Complex karyotype: ≥3 abnormalities (poor prognosis)',
              'Requires dividing cells',
              'Limited resolution (~5-10 Mb)'
            ]
          }
        ]
      },
      {
        id: 'fish',
        title: 'FISH (Fluorescence In Situ Hybridization)',
        content: 'Targeted detection of specific chromosomal abnormalities.',
        subsections: [
          {
            id: 'fish-basics',
            title: 'FISH Principles',
            content: 'Fluorescent probes detect specific DNA sequences.',
            keyPoints: [
              'Can use on non-dividing cells',
              'Higher sensitivity than karyotype',
              'Targeted: Must know what to look for',
              'Fusion probes detect translocations',
              'Break-apart probes detect rearrangements'
            ]
          }
        ]
      },
      {
        id: 'aml-cyto',
        title: 'AML Cytogenetics',
        content: 'Key translocations in AML.',
        subsections: [
          {
            id: 'aml-translocations',
            title: 'Recurrent Translocations',
            content: 'Prognostically important AML cytogenetics.',
            keyPoints: [
              't(15;17) PML::RARA - APL, tretinoin therapy',
              't(8;21) RUNX1::RUNX1T1 - favorable',
              'inv(16) or t(16;16) CBFB::MYH11 - favorable',
              't(9;11) KMT2A rearrangement - intermediate',
              'Complex karyotype - unfavorable'
            ],
            clinicalPearls: [
              't(15;17) = medical emergency (DIC)',
              'Core-binding factor AML: t(8;21), inv(16) - better outcomes'
            ]
          }
        ]
      },
      {
        id: 'all-cyto',
        title: 'ALL Cytogenetics',
        content: 'Key cytogenetic findings in ALL.',
        subsections: [
          {
            id: 'all-translocations',
            title: 'ALL Translocations',
            content: 'Prognostic translocations in ALL.',
            keyPoints: [
              't(9;22) BCR::ABL1 - Philadelphia chromosome, poor prognosis',
              't(12;21) ETV6::RUNX1 - favorable (children)',
              't(1;19) TCF3::PBX1',
              'Hyperdiploidy (>50 chr) - favorable',
              'Hypodiploidy (<44 chr) - unfavorable'
            ]
          }
        ]
      },
      {
        id: 'lymphoma-cyto',
        title: 'Lymphoma Cytogenetics',
        content: 'Defining translocations in lymphomas.',
        subsections: [
          {
            id: 'lymphoma-translocations',
            title: 'Lymphoma Translocations',
            content: 'Key cytogenetic abnormalities.',
            keyPoints: [
              't(14;18) BCL2 rearrangement - Follicular lymphoma',
              't(11;14) CCND1 (cyclin D1) - Mantle cell lymphoma',
              't(8;14), t(2;8), t(8;22) MYC - Burkitt lymphoma',
              't(2;5) NPM::ALK - Anaplastic large cell lymphoma'
            ],
            clinicalPearls: [
              'Double-hit: MYC + BCL2 or BCL6 rearrangements (aggressive)',
              'Triple-hit: MYC + BCL2 + BCL6 (very aggressive)'
            ]
          }
        ]
      },
      {
        id: 'mpn-mutations',
        title: 'MPN Driver Mutations',
        content: 'Key mutations in myeloproliferative neoplasms.',
        subsections: [
          {
            id: 'jak2',
            title: 'JAK2 V617F',
            content: 'Most common MPN mutation.',
            keyPoints: [
              'Present in >95% of PV',
              '~50% of ET and PMF',
              'Activating mutation in JAK2 tyrosine kinase',
              'Detected by PCR or NGS'
            ]
          },
          {
            id: 'calr-mpl',
            title: 'CALR and MPL',
            content: 'Alternative MPN driver mutations.',
            keyPoints: [
              'CALR: ~25% of ET, ~35% of PMF',
              'MPL: ~3% of ET and PMF',
              'Mutually exclusive with JAK2',
              'Triple-negative: No JAK2, CALR, or MPL (~10%)'
            ],
            clinicalPearls: [
              'Testing order: JAK2 first, then CALR and MPL if negative',
              'CALR mutations associated with better prognosis in PMF'
            ]
          }
        ]
      },
      {
        id: 'molecular',
        title: 'Molecular Techniques',
        content: 'PCR, RT-PCR, NGS for detecting mutations.',
        subsections: [
          {
            id: 'pcr',
            title: 'PCR and RT-PCR',
            content: 'Amplification-based detection.',
            keyPoints: [
              'PCR: DNA amplification',
              'RT-PCR: RNA-based (for fusion transcripts)',
              'Quantitative PCR: Measure disease burden',
              'Examples: BCR::ABL1, PML::RARA'
            ]
          },
          {
            id: 'ngs',
            title: 'Next-Generation Sequencing',
            content: 'Comprehensive mutation profiling.',
            keyPoints: [
              'Detects multiple mutations simultaneously',
              'Myeloid panels: FLT3, NPM1, CEBPA, IDH1/2, etc.',
              'Can detect low-frequency variants',
              'Expensive but increasingly used'
            ],
            clinicalPearls: [
              'NGS identifies actionable mutations',
              'Useful for prognosis and targeted therapy',
              'Clonal hematopoiesis of indeterminate potential (CHIP) can confound'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'integration',
    title: 'Integrated Diagnosis & Reporting',
    description: 'Combining morphology, flow, cytogenetics, molecular data',
    icon: '🎯',
    color: 'from-indigo-500 to-purple-500',
    route: '/module/integration',
    sections: [
      {
        id: 'diagnostic-approach',
        title: 'Integrated Diagnostic Approach',
        content: 'Systematic integration of all data sources.',
        subsections: [
          {
            id: 'stepwise',
            title: 'Step-by-Step Integration',
            content: 'Methodical approach to diagnosis.',
            keyPoints: [
              '1. CBC and clinical history',
              '2. Peripheral smear morphology',
              '3. Bone marrow aspirate and core morphology',
              '4. Flow cytometry immunophenotyping',
              '5. Cytogenetic analysis',
              '6. Molecular testing',
              '7. Integrate findings into WHO/ICC category',
              '8. Generate final diagnosis with comment'
            ],
            clinicalPearls: [
              'Each modality has strengths and limitations',
              'All data must be concordant for confident diagnosis',
              'Discordant findings require further investigation'
            ]
          }
        ]
      },
      {
        id: 'report-structure',
        title: 'Hematopathology Report Structure',
        content: 'Standard format for heme path reports.',
        subsections: [
          {
            id: 'report-sections',
            title: 'Report Components',
            content: 'Essential elements of a heme path report.',
            keyPoints: [
              'Specimen adequacy',
              'Aspirate smear description',
              'Core biopsy description (cellularity, architecture)',
              'Immunophenotyping results',
              'Cytogenetic results',
              'Molecular results',
              'Final diagnosis',
              'Comment/interpretation'
            ]
          },
          {
            id: 'diagnosis-format',
            title: 'Diagnosis Formulation',
            content: 'How to write the final diagnosis.',
            keyPoints: [
              'WHO/ICC classification preferred',
              'Include relevant cytogenetic/molecular findings',
              'Be specific when possible',
              'Use descriptive terms if unclassifiable'
            ],
            clinicalPearls: [
              'Example: "Acute myeloid leukemia with t(8;21)(q22;q22.1); RUNX1::RUNX1T1"',
              'Example: "Chronic lymphocytic leukemia/small lymphocytic lymphoma"'
            ]
          }
        ]
      },
      {
        id: 'differential',
        title: 'Building Differential Diagnoses',
        content: 'Generating and narrowing differentials.',
        subsections: [
          {
            id: 'differential-approach',
            title: 'Differential Diagnosis Strategy',
            content: 'Systematic approach to differential.',
            keyPoints: [
              'Start broad based on initial findings',
              'Narrow with each additional test',
              'Consider common things first',
              'Include reactive/benign possibilities'
            ]
          },
          {
            id: 'examples',
            title: 'Example Differentials',
            content: 'Common differential diagnosis scenarios.',
            keyPoints: [
              'Blasts in blood: AML, ALL, blast phase MPN, blastic plasmacytoid dendritic cell neoplasm',
              'Basophilia: CML, reactive (rare), mastocytosis',
              'Small B-cell lymphocytosis: CLL, MCL, MZL, FL, reactive',
              'Cytopenias + dysplasia: MDS, vitamin deficiency, drug effect, HIV'
            ]
          }
        ]
      },
      {
        id: 'ancillary-testing',
        title: 'When to Recommend Additional Testing',
        content: 'Guiding further workup.',
        subsections: [
          {
            id: 'indications',
            title: 'Testing Recommendations',
            content: 'When to suggest additional studies.',
            keyPoints: [
              'FISH if suspicious karyotype',
              'Molecular testing for prognostic mutations',
              'Additional flow if clonality uncertain',
              'Repeat biopsy if initial inadequate',
              'Tissue for special stains or molecular'
            ],
            clinicalPearls: [
              'Comment section: Suggest reflex testing',
              'Example: "FISH for BCR::ABL1 recommended if CML suspected"',
              'Example: "Myeloid mutation panel may provide prognostic information"'
            ]
          }
        ]
      },
      {
        id: 'pitfalls',
        title: 'Pitfalls & Pearls',
        content: 'Common errors and teaching points.',
        subsections: [
          {
            id: 'common-pitfalls',
            title: 'Diagnostic Pitfalls',
            content: 'Mistakes to avoid.',
            keyPoints: [
              'Hemodilution on aspirate - falsely low cellularity',
              'Sampling error - patchy involvement',
              'Reactive changes mimicking dysplasia',
              'Hematogones mistaken for blasts',
              'False clonality due to technical issues'
            ]
          },
          {
            id: 'pearls',
            title: 'Teaching Pearls',
            content: 'Key teaching points.',
            keyPoints: [
              'Auer rods = myeloid lineage',
              'Basophilia → think CML',
              'Tear drops → think myelofibrosis',
              'κ:λ ratio establishes B-cell clonality',
              'Always correlate all findings before finalizing diagnosis'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'cases',
    title: 'Case Studies',
    description: 'Integrated case vignettes for practice',
    icon: '📋',
    color: 'from-teal-500 to-cyan-500',
    route: '/cases',
    sections: []
  },
  {
    id: 'interactives',
    title: 'Interactive Tools',
    description: 'Hands-on learning tools and pattern recognition',
    icon: '🛠️',
    color: 'from-violet-500 to-purple-500',
    route: '/interactives',
    sections: []
  }
];
