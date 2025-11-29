import { CaseVignette } from '@/types';

export const caseVignettes: CaseVignette[] = [
  {
    id: 'case1',
    cbc: {
      wbc: 52.0,
      hgb: 8.2,
      plt: 45
    },
    morph: ['Blasts with Auer rods', 'Increased myeloblasts'],
    flow: {
      cd34: 'positive',
      mpo: 'positive',
      cd13: 'positive',
      cd33: 'positive'
    },
    cyto: ['t(8;21)(q22;q22.1)'],
    molecular: ['RUNX1::RUNX1T1 fusion detected'],
    question: 'Based on the integrated findings, what is the most likely diagnosis?',
    options: [
      'AML with t(8;21); RUNX1::RUNX1T1',
      'Acute promyelocytic leukemia',
      'Acute lymphoblastic leukemia',
      'CML in blast crisis'
    ],
    correct: 'AML with t(8;21); RUNX1::RUNX1T1',
    rationale: 'The combination of myeloblasts with Auer rods, MPO positivity, and t(8;21) with RUNX1::RUNX1T1 fusion defines AML with t(8;21), a core-binding factor AML with favorable prognosis.'
  },
  {
    id: 'case2',
    cbc: {
      wbc: 145.0,
      hgb: 10.5,
      plt: 450
    },
    morph: ['Left shift', 'All myeloid stages present', 'Marked basophilia'],
    flow: {
      cd13: 'positive',
      cd33: 'positive',
      cd34: 'positive in <5%'
    },
    cyto: ['t(9;22)(q34;q11.2)'],
    molecular: ['BCR::ABL1 p210 fusion positive'],
    question: 'What is the diagnosis?',
    options: [
      'Chronic myeloid leukemia, chronic phase',
      'Acute myeloid leukemia',
      'Polycythemia vera',
      'Essential thrombocythemia'
    ],
    correct: 'Chronic myeloid leukemia, chronic phase',
    rationale: 'Marked leukocytosis with left shift, basophilia, and BCR::ABL1 fusion from t(9;22) are diagnostic of CML. Low blast percentage indicates chronic phase.'
  },
  {
    id: 'case3',
    cbc: {
      wbc: 5.8,
      hgb: 9.5,
      plt: 85
    },
    morph: ['Dysplastic neutrophils (pseudo-Pelger-Huët)', 'Hypogranular neutrophils', 'Oval macrocytes'],
    flow: {
      cd34: 'positive in 8% of cells',
      aberrant: 'Decreased CD38 on monocytes'
    },
    cyto: ['del(5q)'],
    question: 'What is the most likely diagnosis?',
    options: [
      'MDS with isolated del(5q)',
      'Aplastic anemia',
      'Megaloblastic anemia',
      'AML with myelodysplasia-related changes'
    ],
    correct: 'MDS with isolated del(5q)',
    rationale: 'Cytopenias, dysplastic features, and isolated del(5q) define MDS with del(5q). This subtype often responds well to lenalidomide.'
  },
  {
    id: 'case4',
    cbc: {
      wbc: 85.0,
      hgb: 8.0,
      plt: 30
    },
    morph: ['Small lymphoblasts', 'Scant cytoplasm', 'High nuclear:cytoplasmic ratio'],
    flow: {
      tdt: 'positive',
      cd19: 'positive',
      cd10: 'positive',
      cd20: 'dim/negative',
      surfaceIg: 'negative'
    },
    cyto: ['t(9;22)(q34;q11.2)'],
    molecular: ['BCR::ABL1 p190 fusion'],
    question: 'What is the diagnosis?',
    options: [
      'B-lymphoblastic leukemia with BCR::ABL1 (Philadelphia chromosome positive)',
      'Chronic myeloid leukemia',
      'T-lymphoblastic leukemia',
      'Burkitt lymphoma'
    ],
    correct: 'B-lymphoblastic leukemia with BCR::ABL1 (Philadelphia chromosome positive)',
    rationale: 'TdT+, CD19+, CD10+ immunophenotype defines B-lymphoblastic leukemia. BCR::ABL1 p190 fusion indicates Philadelphia chromosome-positive B-ALL, requiring TKI therapy.'
  },
  {
    id: 'case5',
    cbc: {
      wbc: 4.2,
      hgb: 18.5,
      plt: 550
    },
    morph: ['Panmyelosis', 'Normal morphology'],
    flow: {},
    cyto: ['Normal karyotype'],
    molecular: ['JAK2 V617F mutation detected'],
    question: 'Given the elevated hemoglobin and JAK2 V617F mutation, what is the diagnosis?',
    options: [
      'Polycythemia vera',
      'Essential thrombocythemia',
      'Secondary polycythemia',
      'Primary myelofibrosis'
    ],
    correct: 'Polycythemia vera',
    rationale: 'Elevated hemoglobin with JAK2 V617F mutation is diagnostic of polycythemia vera. The mutation is found in >95% of PV cases.'
  },
  {
    id: 'case6',
    morph: ['Lymph node with effaced architecture', 'Follicular pattern', 'BCL2+ follicles'],
    flow: {
      cd19: 'positive',
      cd10: 'positive',
      bcl2: 'positive',
      bcl6: 'positive',
      kappa: 'restricted'
    },
    cyto: ['t(14;18)(q32;q21)'],
    molecular: ['BCL2 rearrangement confirmed'],
    question: 'What is the diagnosis?',
    options: [
      'Follicular lymphoma',
      'Reactive follicular hyperplasia',
      'Mantle cell lymphoma',
      'DLBCL'
    ],
    correct: 'Follicular lymphoma',
    rationale: 'Follicular architecture with BCL2+ follicles, t(14;18), and κ light chain restriction confirm follicular lymphoma. BCL2 is abnormally expressed in neoplastic follicles.'
  },
  {
    id: 'case7',
    morph: ['Monomorphic medium-sized cells', 'Starry-sky pattern', 'Square cytoplasm with vacuoles'],
    flow: {
      cd19: 'positive',
      cd10: 'positive',
      bcl6: 'positive',
      bcl2: 'negative',
      surfaceIgM: 'positive',
      ki67: '~100%'
    },
    cyto: ['t(8;14)(q24;q32)'],
    molecular: ['MYC rearrangement detected'],
    question: 'What is the most likely diagnosis?',
    options: [
      'Burkitt lymphoma',
      'DLBCL',
      'Follicular lymphoma',
      'B-lymphoblastic leukemia'
    ],
    correct: 'Burkitt lymphoma',
    rationale: 'Monomorphic cells with starry-sky pattern, MYC rearrangement, CD10+/BCL6+/BCL2-, and very high Ki-67 are characteristic of Burkitt lymphoma.'
  },
  {
    id: 'case8',
    cbc: {
      wbc: 65.0,
      hgb: 11.0,
      plt: 150
    },
    morph: ['Small mature lymphocytes', 'Smudge cells'],
    flow: {
      cd5: 'positive',
      cd23: 'positive',
      cd20: 'dim',
      surfaceIg: 'dim',
      kappa: 'restricted'
    },
    cyto: ['Normal karyotype'],
    question: 'What is the diagnosis?',
    options: [
      'Chronic lymphocytic leukemia',
      'Mantle cell lymphoma',
      'Follicular lymphoma',
      'Marginal zone lymphoma'
    ],
    correct: 'Chronic lymphocytic leukemia',
    rationale: 'Small lymphocytes with smudge cells, CD5+/CD23+, dim CD20 and surface Ig, and κ restriction are diagnostic of CLL.'
  },
  {
    id: 'case9',
    morph: ['Bone marrow with 25% plasma cells', 'Rouleaux on smear'],
    flow: {
      cd38: 'bright positive',
      cd138: 'positive',
      cd56: 'positive',
      cd19: 'negative',
      lambda: 'restricted'
    },
    molecular: ['FISH: del(17p) detected'],
    question: 'Patient has hypercalcemia and lytic bone lesions. What is the diagnosis?',
    options: [
      'Multiple myeloma with del(17p)',
      'MGUS',
      'Plasmacytoma',
      'Reactive plasmacytosis'
    ],
    correct: 'Multiple myeloma with del(17p)',
    rationale: '≥10% clonal plasma cells, λ light chain restriction, and CRAB features (Calcium elevated, Bone lesions) confirm multiple myeloma. del(17p) indicates high-risk disease.'
  },
  {
    id: 'case10',
    cbc: {
      wbc: 3.2,
      hgb: 8.5,
      plt: 550
    },
    morph: ['Teardrop cells', 'Leukoerythroblastic picture', 'Circulating blasts <5%'],
    flow: {
      cd34: 'positive in 3%'
    },
    cyto: ['Unable to obtain (dry tap)'],
    molecular: ['JAK2 V617F positive'],
    question: 'Bone marrow biopsy shows marked fibrosis. What is the diagnosis?',
    options: [
      'Primary myelofibrosis',
      'Essential thrombocythemia',
      'Polycythemia vera',
      'Chronic myeloid leukemia'
    ],
    correct: 'Primary myelofibrosis',
    rationale: 'Teardrop cells, leukoerythroblastosis, dry tap, marrow fibrosis, and JAK2 V617F mutation are consistent with primary myelofibrosis.'
  }
];
