import { AssessmentQuestion } from '@/types';

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'q1',
    category: 'Acute Leukemia',
    question: 'A patient presents with blasts containing Auer rods. MPO is positive. What is the most likely diagnosis?',
    options: [
      'Acute myeloid leukemia',
      'Acute lymphoblastic leukemia',
      'Chronic myeloid leukemia',
      'Myelodysplastic syndrome'
    ],
    correct: 'Acute myeloid leukemia',
    rationale: 'Auer rods are pathognomonic for myeloid lineage. Combined with MPO positivity and blast morphology, this confirms acute myeloid leukemia.'
  },
  {
    id: 'q2',
    category: 'MPN',
    question: 'A patient has marked leukocytosis with basophilia and low LAP score. What finding would confirm the diagnosis?',
    options: [
      'BCR::ABL1 fusion',
      'JAK2 V617F mutation',
      't(15;17)',
      'del(5q)'
    ],
    correct: 'BCR::ABL1 fusion',
    rationale: 'The combination of leukocytosis, basophilia, and low LAP is classic for CML. BCR::ABL1 (Philadelphia chromosome) is diagnostic for CML.'
  },
  {
    id: 'q3',
    category: 'Flow Cytometry',
    question: 'What κ:λ ratio would suggest monoclonal B cells?',
    options: [
      '2:1',
      '5:1',
      '1.5:1',
      '0.5:1'
    ],
    correct: '5:1',
    rationale: 'A κ:λ ratio >3:1 or <0.3:1 suggests monoclonality. 5:1 is well outside the normal range (0.3-3), indicating clonal B cells.'
  },
  {
    id: 'q4',
    category: 'Lymphoma',
    question: 'A lymph node biopsy shows follicular architecture with BCL2+ follicles and t(14;18). What is the diagnosis?',
    options: [
      'Follicular lymphoma',
      'Reactive follicular hyperplasia',
      'Mantle cell lymphoma',
      'DLBCL'
    ],
    correct: 'Follicular lymphoma',
    rationale: 'Follicular lymphoma is characterized by follicular architecture, BCL2 positivity (abnormal in follicles), and t(14;18) BCL2 rearrangement.'
  },
  {
    id: 'q5',
    category: 'Morphology',
    question: 'Teardrop RBCs and leukoerythroblastic blood picture are most suggestive of:',
    options: [
      'Primary myelofibrosis',
      'Iron deficiency anemia',
      'Thalassemia',
      'Hereditary spherocytosis'
    ],
    correct: 'Primary myelofibrosis',
    rationale: 'Teardrop cells and leukoerythroblastosis (immature cells in blood) are classic for myelofibrosis with extramedullary hematopoiesis.'
  },
  {
    id: 'q6',
    category: 'Plasma Cell',
    question: 'Which of the following defines CRAB criteria in myeloma?',
    options: [
      'Calcium, Renal, Anemia, Bone lesions',
      'Creatinine, RBC count, Albumin, Bilirubin',
      'CBC, Reticulocyte, Alkaline phosphatase, Biopsy',
      'Clonality, Rearrangement, Aberrancy, Blasts'
    ],
    correct: 'Calcium, Renal, Anemia, Bone lesions',
    rationale: 'CRAB criteria define myeloma-related end-organ damage: Calcium elevated, Renal insufficiency, Anemia, Bone lesions.'
  },
  {
    id: 'q7',
    category: 'MDS',
    question: 'What percentage of dysplasia is required in a lineage to diagnose MDS?',
    options: [
      '≥10%',
      '≥5%',
      '≥20%',
      '≥50%'
    ],
    correct: '≥10%',
    rationale: 'MDS requires dysplasia in ≥10% of cells in one or more lineages, or MDS-defining cytogenetics.'
  },
  {
    id: 'q8',
    category: 'Cytogenetics',
    question: 't(15;17) is associated with which AML subtype?',
    options: [
      'Acute promyelocytic leukemia',
      'AML with inv(16)',
      'AML with t(8;21)',
      'AML-M5'
    ],
    correct: 'Acute promyelocytic leukemia',
    rationale: 't(15;17) creates PML::RARA fusion and defines acute promyelocytic leukemia (APL), which is treated with tretinoin.'
  },
  {
    id: 'q9',
    category: 'Flow Cytometry',
    question: 'Which marker combination is most specific for B-lymphoblasts?',
    options: [
      'TdT+, CD19+, CD10+',
      'CD34+, CD13+, MPO+',
      'CD3+, CD5+, CD7+',
      'CD138+, CD38+, κ restriction'
    ],
    correct: 'TdT+, CD19+, CD10+',
    rationale: 'TdT (immature lymphoid), CD19 (B-cell), and CD10 are characteristic of B-lymphoblasts as seen in B-ALL.'
  },
  {
    id: 'q10',
    category: 'Lymphoma',
    question: 'Cyclin D1 positivity and t(11;14) are characteristic of:',
    options: [
      'Mantle cell lymphoma',
      'Follicular lymphoma',
      'CLL/SLL',
      'Burkitt lymphoma'
    ],
    correct: 'Mantle cell lymphoma',
    rationale: 't(11;14) leads to CCND1 (cyclin D1) overexpression, which is diagnostic for mantle cell lymphoma.'
  },
  {
    id: 'q11',
    category: 'Foundations',
    question: 'Expected bone marrow cellularity in a 50-year-old is approximately:',
    options: [
      '40-60%',
      '20-30%',
      '70-80%',
      '80-100%'
    ],
    correct: '40-60%',
    rationale: 'Expected cellularity = 100 - age (±10%). For a 50-year-old: 50% ± 10% = 40-60%.'
  },
  {
    id: 'q12',
    category: 'Morphology',
    question: 'Schistocytes are most commonly associated with:',
    options: [
      'Microangiopathic hemolytic anemia',
      'Iron deficiency',
      'Thalassemia',
      'Megaloblastic anemia'
    ],
    correct: 'Microangiopathic hemolytic anemia',
    rationale: 'Schistocytes (fragmented RBCs) result from mechanical destruction in microangiopathic processes like TTP, HUS, DIC.'
  },
  {
    id: 'q13',
    category: 'MPN',
    question: 'JAK2 V617F is found in what percentage of polycythemia vera cases?',
    options: [
      '>95%',
      '~50%',
      '~25%',
      '<10%'
    ],
    correct: '>95%',
    rationale: 'JAK2 V617F mutation is present in >95% of polycythemia vera cases, making it a highly sensitive marker.'
  },
  {
    id: 'q14',
    category: 'Acute Leukemia',
    question: 'Which translocation defines core-binding factor AML with favorable prognosis?',
    options: [
      't(8;21)',
      't(15;17)',
      't(9;22)',
      't(11;14)'
    ],
    correct: 't(8;21)',
    rationale: 't(8;21) and inv(16) are core-binding factor AMLs with favorable prognosis. t(8;21) creates RUNX1::RUNX1T1 fusion.'
  },
  {
    id: 'q15',
    category: 'Lymphoma',
    question: 'Reed-Sternberg cells are characteristically CD30+ and CD15+ in:',
    options: [
      'Classical Hodgkin lymphoma',
      'Anaplastic large cell lymphoma',
      'DLBCL',
      'Burkitt lymphoma'
    ],
    correct: 'Classical Hodgkin lymphoma',
    rationale: 'Classical Hodgkin lymphoma is characterized by Reed-Sternberg cells that are typically CD30+, CD15+, with weak PAX5 and negative CD45.'
  }
];
