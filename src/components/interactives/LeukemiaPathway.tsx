import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ChevronLeft, ArrowRight } from 'lucide-react';

interface PathwayStep {
  question: string;
  options: { text: string; next: string | null; diagnosis?: string; info?: string }[];
}

const pathwaySteps: Record<string, PathwayStep> = {
  start: {
    question: 'What is the blast percentage?',
    options: [
      { text: '≥20% blasts', next: 'acute' },
      { text: '<20% blasts', next: 'chronic' }
    ]
  },
  acute: {
    question: 'Are Auer rods present?',
    options: [
      { text: 'Yes - Auer rods present', next: 'aml_confirmed', diagnosis: 'Likely AML', info: 'Auer rods are pathognomonic for myeloid lineage' },
      { text: 'No Auer rods', next: 'lineage_markers' }
    ]
  },
  aml_confirmed: {
    question: 'Check cytogenetics/molecular',
    options: [
      { text: 't(15;17)', next: null, diagnosis: 'APL - Acute Promyelocytic Leukemia', info: 'Medical emergency. Start tretinoin immediately. Risk of DIC.' },
      { text: 't(8;21)', next: null, diagnosis: 'AML with t(8;21)', info: 'Favorable prognosis. Core-binding factor AML.' },
      { text: 'inv(16)', next: null, diagnosis: 'AML with inv(16)', info: 'Favorable prognosis. Core-binding factor AML.' },
      { text: 'Other/normal', next: null, diagnosis: 'AML - further classify by morphology', info: 'Proceed with myeloid panel testing for additional mutations (FLT3, NPM1, etc.)' }
    ]
  },
  lineage_markers: {
    question: 'What does flow cytometry show?',
    options: [
      { text: 'MPO+ or CD13+/CD33+', next: 'aml_confirmed', diagnosis: 'AML confirmed by flow', info: 'Myeloid lineage confirmed' },
      { text: 'TdT+ and CD19+/CD10+', next: 'b_all' },
      { text: 'TdT+ and cytoplasmic CD3+', next: 't_all' }
    ]
  },
  b_all: {
    question: 'Check for high-risk features',
    options: [
      { text: 't(9;22) present', next: null, diagnosis: 'Philadelphia chromosome-positive B-ALL', info: 'Poor prognosis. Requires TKI therapy (e.g., imatinib, dasatinib)' },
      { text: 't(12;21) in child', next: null, diagnosis: 'B-ALL with ETV6::RUNX1', info: 'Favorable prognosis in pediatric patients' },
      { text: 'Hyperdiploidy (>50 chr)', next: null, diagnosis: 'Hyperdiploid B-ALL', info: 'Favorable prognosis' },
      { text: 'Other', next: null, diagnosis: 'B-Acute Lymphoblastic Leukemia', info: 'Classify further by cytogenetics and risk stratify' }
    ]
  },
  t_all: {
    question: 'T-ALL confirmed',
    options: [
      { text: 'Continue', next: null, diagnosis: 'T-Acute Lymphoblastic Leukemia', info: 'Often presents with mediastinal mass. Higher risk of CNS involvement.' }
    ]
  },
  chronic: {
    question: 'Describe the peripheral smear',
    options: [
      { text: 'Left shift with basophilia', next: 'cml_suspect' },
      { text: 'Mature lymphocytosis + smudge cells', next: 'cll_suspect' },
      { text: 'Dysplasia in multiple lineages', next: 'mds' },
      { text: 'Tear drops + leukoerythroblastosis', next: 'myelofibrosis' }
    ]
  },
  cml_suspect: {
    question: 'Check BCR::ABL1',
    options: [
      { text: 'BCR::ABL1 positive', next: null, diagnosis: 'Chronic Myeloid Leukemia (CML)', info: 't(9;22) Philadelphia chromosome. Treat with TKI (imatinib, dasatinib, nilotinib)' },
      { text: 'BCR::ABL1 negative', next: null, diagnosis: 'Leukocytosis - other cause', info: 'Consider reactive leukocytosis, other MPN, or atypical CML' }
    ]
  },
  cll_suspect: {
    question: 'Flow cytometry shows:',
    options: [
      { text: 'CD5+/CD23+ B cells', next: null, diagnosis: 'Chronic Lymphocytic Leukemia (CLL)', info: 'Most common leukemia in adults. Often indolent.' },
      { text: 'CD5+/CD23- + cyclin D1+', next: null, diagnosis: 'Mantle Cell Lymphoma (leukemic phase)', info: 'Aggressive. t(11;14) with cyclin D1 overexpression' },
      { text: 'Other pattern', next: null, diagnosis: 'Lymphocytosis - further workup', info: 'Consider other small B-cell lymphomas or reactive causes' }
    ]
  },
  mds: {
    question: 'Blast percentage and dysplasia:',
    options: [
      { text: '<5% blasts, unilineage dysplasia', next: null, diagnosis: 'MDS with low blasts', info: 'Check for del(5q), ring sideroblasts (SF3B1)' },
      { text: '5-9% blasts', next: null, diagnosis: 'MDS with excess blasts-1 (MDS-EB1)', info: 'Intermediate risk' },
      { text: '10-19% blasts', next: null, diagnosis: 'MDS with excess blasts-2 (MDS-EB2)', info: 'Higher risk, approaching transformation to AML' }
    ]
  },
  myelofibrosis: {
    question: 'Check JAK2/CALR/MPL:',
    options: [
      { text: 'JAK2 V617F positive', next: null, diagnosis: 'Primary Myelofibrosis', info: 'JAK2 mutation in ~50% of PMF cases' },
      { text: 'CALR mutation', next: null, diagnosis: 'Primary Myelofibrosis (CALR-mutated)', info: 'CALR mutations in ~25-35% of PMF, often better prognosis' },
      { text: 'Triple negative', next: null, diagnosis: 'Primary Myelofibrosis (triple negative)', info: 'No JAK2/CALR/MPL. ~10% of cases.' }
    ]
  }
};

export function LeukemiaPathway() {
  const [currentStep, setCurrentStep] = useState('start');
  const [path, setPath] = useState<string[]>(['start']);
  const [diagnosis, setDiagnosis] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const handleOption = (next: string | null, diag?: string, information?: string) => {
    if (next) {
      setCurrentStep(next);
      setPath([...path, next]);
    }
    if (diag) {
      setDiagnosis(diag);
      setInfo(information || null);
    }
  };

  const handleReset = () => {
    setCurrentStep('start');
    setPath(['start']);
    setDiagnosis(null);
    setInfo(null);
  };

  const step = pathwaySteps[currentStep];

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/interactives">
        <Button variant="ghost" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Interactive Tools
        </Button>
      </Link>

      <div className="mb-8">
        <Badge className="mb-4">Integration Tool</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Leukemia Logic Pathway</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Interactive diagnostic algorithm for leukemias and related disorders
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Diagnostic Pathway</CardTitle>
            <CardDescription>Follow the algorithm to reach a diagnosis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg border bg-muted p-4">
              <div className="mb-3 text-lg font-semibold">{step.question}</div>
              <div className="space-y-2">
                {step.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOption(option.next, option.diagnosis, option.info)}
                    className="flex w-full items-center justify-between rounded-lg border bg-background p-3 text-left transition-colors hover:bg-accent"
                  >
                    <span>{option.text}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>

            {diagnosis && (
              <div className="rounded-lg border bg-primary/10 p-4">
                <div className="mb-2 text-sm font-medium text-muted-foreground">
                  Suggested Diagnosis:
                </div>
                <div className="mb-3 text-xl font-bold text-primary">
                  {diagnosis}
                </div>
                {info && (
                  <div className="rounded-md bg-background p-3 text-sm text-muted-foreground">
                    {info}
                  </div>
                )}
              </div>
            )}

            <Button onClick={handleReset} variant="outline" className="w-full">
              Start Over
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pathway Taken</CardTitle>
              <CardDescription>Your diagnostic journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {path.map((stepId, idx) => {
                  const stepData = pathwaySteps[stepId];
                  return (
                    <div key={idx} className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">
                        {idx + 1}
                      </Badge>
                      <div className="text-sm">
                        {stepData.question}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Decision Points</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <div className="mb-1 font-medium">Blast Percentage</div>
                <p className="text-muted-foreground">
                  ≥20% blasts = acute leukemia. {'<'}20% blasts = consider chronic processes, MDS, or reactive.
                </p>
              </div>

              <div>
                <div className="mb-1 font-medium">Auer Rods</div>
                <p className="text-muted-foreground">
                  Pathognomonic for myeloid lineage. If present, diagnosis is AML.
                </p>
              </div>

              <div>
                <div className="mb-1 font-medium">Flow Cytometry</div>
                <p className="text-muted-foreground">
                  Essential for lineage determination. MPO defines myeloid, TdT suggests lymphoid.
                </p>
              </div>

              <div>
                <div className="mb-1 font-medium">Cytogenetics</div>
                <p className="text-muted-foreground">
                  Guide both diagnosis and prognosis. Some are diagnostic (e.g., t(15;17) = APL).
                </p>
              </div>

              <div>
                <div className="mb-1 font-medium">Clinical Integration</div>
                <p className="text-muted-foreground">
                  Always correlate with CBC, smear morphology, clinical presentation, and age.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Educational Note</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                This is a simplified diagnostic algorithm for educational purposes. Actual
                diagnosis requires integration of morphology, immunophenotyping, cytogenetics,
                molecular studies, and clinical correlation. Always follow institutional protocols
                and WHO/ICC classification guidelines.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
