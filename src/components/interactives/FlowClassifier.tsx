import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ChevronLeft } from 'lucide-react';

interface FlowCase {
  id: string;
  markers: Record<string, string>;
  diagnosis: string;
  explanation: string;
  category: string;
}

const flowCases: FlowCase[] = [
  {
    id: '1',
    markers: {
      CD19: 'positive',
      CD20: 'dim',
      CD5: 'positive',
      CD23: 'positive',
      'Surface Ig': 'dim',
      'κ/λ': 'κ restricted'
    },
    diagnosis: 'CLL/SLL',
    explanation: 'CD5+/CD23+ B cells with dim CD20 and surface Ig are characteristic of chronic lymphocytic leukemia.',
    category: 'B-cell'
  },
  {
    id: '2',
    markers: {
      CD34: 'positive',
      MPO: 'positive',
      CD13: 'positive',
      CD33: 'positive',
      'HLA-DR': 'positive',
      TdT: 'negative'
    },
    diagnosis: 'AML',
    explanation: 'CD34+ blasts with MPO positivity define myeloid lineage, consistent with acute myeloid leukemia.',
    category: 'Myeloid'
  },
  {
    id: '3',
    markers: {
      TdT: 'positive',
      CD19: 'positive',
      CD10: 'positive',
      CD34: 'positive',
      CD20: 'negative',
      'Surface Ig': 'negative'
    },
    diagnosis: 'B-ALL',
    explanation: 'TdT+ CD19+ CD10+ blasts are characteristic of B-lymphoblastic leukemia (B-ALL).',
    category: 'B-cell'
  },
  {
    id: '4',
    markers: {
      CD3: 'positive',
      CD4: 'positive',
      CD8: 'negative',
      CD5: 'positive',
      CD7: 'positive',
      TdT: 'negative'
    },
    diagnosis: 'Mature T cells (CD4+)',
    explanation: 'CD3+ CD4+ CD5+ CD7+ pattern represents normal mature helper T cells.',
    category: 'T-cell'
  },
  {
    id: '5',
    markers: {
      CD19: 'positive',
      CD10: 'positive',
      BCL2: 'positive',
      BCL6: 'positive',
      CD20: 'positive',
      'κ/λ': 'κ restricted'
    },
    diagnosis: 'Follicular Lymphoma',
    explanation: 'CD10+ BCL2+ B cells with light chain restriction suggest follicular lymphoma (BCL2 abnormal in follicle center).',
    category: 'B-cell'
  },
  {
    id: '6',
    markers: {
      CD38: 'bright positive',
      CD138: 'positive',
      CD56: 'positive',
      CD19: 'negative',
      'κ/λ (cytoplasmic)': 'λ restricted'
    },
    diagnosis: 'Plasma Cell Neoplasm',
    explanation: 'CD38 bright, CD138+, with cytoplasmic light chain restriction is diagnostic of clonal plasma cells (myeloma).',
    category: 'Plasma cell'
  },
  {
    id: '7',
    markers: {
      CD19: 'positive',
      CD5: 'positive',
      CD23: 'negative',
      'Cyclin D1': 'positive',
      CD20: 'positive',
      'κ/λ': 'λ restricted'
    },
    diagnosis: 'Mantle Cell Lymphoma',
    explanation: 'CD5+ CD23- B cells with cyclin D1 positivity are diagnostic of mantle cell lymphoma.',
    category: 'B-cell'
  },
  {
    id: '8',
    markers: {
      TdT: 'positive',
      CD3: 'positive (cytoplasmic)',
      CD7: 'positive',
      CD34: 'positive',
      CD4: 'positive',
      CD8: 'positive'
    },
    diagnosis: 'T-ALL',
    explanation: 'TdT+ cytoplasmic CD3+ blasts with CD7 positivity indicate T-lymphoblastic leukemia.',
    category: 'T-cell'
  },
  {
    id: '9',
    markers: {
      CD13: 'positive',
      CD33: 'positive',
      CD14: 'positive',
      CD64: 'positive',
      MPO: 'positive',
      CD34: 'negative'
    },
    diagnosis: 'AML with monocytic differentiation',
    explanation: 'Myeloid markers (MPO+) with monocytic markers (CD14+, CD64+) suggest AML with monocytic component.',
    category: 'Myeloid'
  },
  {
    id: '10',
    markers: {
      CD30: 'positive',
      CD15: 'positive',
      PAX5: 'weak positive',
      CD45: 'negative',
      CD20: 'negative'
    },
    diagnosis: 'Classical Hodgkin Lymphoma',
    explanation: 'CD30+ CD15+ cells with weak PAX5 and negative CD45 are characteristic of Reed-Sternberg cells in classical Hodgkin lymphoma.',
    category: 'Other'
  }
];

export function FlowClassifier() {
  const [currentCase, setCurrentCase] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);

  const currentCaseData = flowCases[currentCase];
  const allDiagnoses = Array.from(new Set(flowCases.map(c => c.diagnosis))).sort();

  const handleSubmit = () => {
    setShowFeedback(true);
    setAnswered(answered + 1);
    if (userAnswer === currentCaseData.diagnosis) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentCase < flowCases.length - 1) {
      setCurrentCase(currentCase + 1);
      setUserAnswer('');
      setShowFeedback(false);
    }
  };

  const handleReset = () => {
    setCurrentCase(0);
    setUserAnswer('');
    setShowFeedback(false);
    setScore(0);
    setAnswered(0);
  };

  const isCorrect = userAnswer === currentCaseData.diagnosis;
  const percentage = answered > 0 ? Math.round((score / answered) * 100) : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/interactives">
        <Button variant="ghost" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Interactive Tools
        </Button>
      </Link>

      <div className="mb-8">
        <Badge className="mb-4">Flow Cytometry Tool</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Flow Cytometry Pattern Classifier</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Practice identifying immunophenotypes and matching to diagnoses
        </p>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-4">
          <Badge variant="outline">
            Case {currentCase + 1} of {flowCases.length}
          </Badge>
          <Badge variant="secondary">
            Score: {score} / {answered} ({percentage}%)
          </Badge>
        </div>
        <Button variant="outline" size="sm" onClick={handleReset}>
          Reset
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Flow Cytometry Results</CardTitle>
            <CardDescription>
              <Badge className="mt-1">{currentCaseData.category} Lineage</Badge>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg border p-4">
              <h3 className="mb-3 font-semibold">Immunophenotype</h3>
              <div className="space-y-2">
                {Object.entries(currentCaseData.markers).map(([marker, value]) => (
                  <div key={marker} className="flex justify-between text-sm">
                    <span className="font-medium">{marker}:</span>
                    <span className={value.includes('positive') ? 'text-green-600' : 'text-muted-foreground'}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                What is the most likely diagnosis?
              </label>
              <select
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={showFeedback}
                className="w-full rounded-lg border bg-background px-4 py-2"
              >
                <option value="">Select diagnosis...</option>
                {allDiagnoses.map((diag) => (
                  <option key={diag} value={diag}>
                    {diag}
                  </option>
                ))}
              </select>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!userAnswer || showFeedback}
              className="w-full"
            >
              Submit Answer
            </Button>

            {showFeedback && (
              <div className={`rounded-lg border p-4 ${
                isCorrect ? 'bg-green-500/10 border-green-500' : 'bg-red-500/10 border-red-500'
              }`}>
                <div className={`mb-2 font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                </div>
                <div className="mb-2 text-sm">
                  <span className="font-medium">Correct answer: </span>
                  {currentCaseData.diagnosis}
                </div>
                <div className="text-sm text-muted-foreground">
                  {currentCaseData.explanation}
                </div>
              </div>
            )}

            {showFeedback && currentCase < flowCases.length - 1 && (
              <Button onClick={handleNext} className="w-full">
                Next Case
              </Button>
            )}

            {showFeedback && currentCase === flowCases.length - 1 && (
              <div className="rounded-lg border bg-primary/10 p-4 text-center">
                <div className="mb-2 text-2xl font-bold">Quiz Complete!</div>
                <div className="text-lg">
                  Final Score: {score} / {flowCases.length} ({Math.round((score / flowCases.length) * 100)}%)
                </div>
                <Button onClick={handleReset} className="mt-4">
                  Start Over
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Flow Cytometry Quick Reference</CardTitle>
            <CardDescription>Key marker patterns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold text-primary">B-Cell Markers</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Pan-B: CD19, CD20, CD22, CD79a</li>
                <li>Germinal center: CD10, BCL6</li>
                <li>Immature: CD34, TdT</li>
                <li>Clonality: κ/λ ratio {'>'}3:1 or {'<'}0.3:1</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-primary">T-Cell Markers</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Pan-T: CD3, CD2, CD5, CD7</li>
                <li>Helper: CD4+</li>
                <li>Cytotoxic: CD8+</li>
                <li>Immature: TdT, CD34</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-primary">Myeloid Markers</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Myeloid: CD13, CD33, MPO</li>
                <li>Monocytic: CD14, CD64</li>
                <li>Blasts: CD34, CD117</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-primary">Plasma Cell Markers</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>CD38 bright, CD138+</li>
                <li>CD19 often negative (vs normal PC)</li>
                <li>CD56 often positive (aberrant)</li>
                <li>Cytoplasmic κ or λ restriction</li>
              </ul>
            </div>

            <div className="rounded-lg bg-muted p-4">
              <h3 className="mb-2 font-semibold">Clinical Pearl</h3>
              <p className="text-sm text-muted-foreground">
                Always correlate flow cytometry with morphology and clinical findings.
                Aberrant marker expression helps identify minimal residual disease (MRD).
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
