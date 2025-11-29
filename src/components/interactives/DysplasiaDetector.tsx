import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ChevronLeft } from 'lucide-react';

interface DysplasiaCase {
  id: string;
  lineage: string;
  description: string;
  isDysplastic: boolean;
  explanation: string;
}

const dysplasiaCases: DysplasiaCase[] = [
  {
    id: '1',
    lineage: 'Megakaryocytic',
    description: 'Megakaryocyte with single round nucleus (hypolobated)',
    isDysplastic: true,
    explanation: 'Hypolobated megakaryocytes (single or bilobed nuclei) are a classic dysplastic feature seen in MDS and MPN.'
  },
  {
    id: '2',
    lineage: 'Erythroid',
    description: 'Normoblast with two separate nuclei (binucleation)',
    isDysplastic: true,
    explanation: 'Multinucleated erythroid precursors are a dysplastic feature indicating abnormal maturation.'
  },
  {
    id: '3',
    lineage: 'Granulocytic',
    description: 'Neutrophil with bilobed nucleus resembling pince-nez glasses (pseudo-Pelger-Huët)',
    isDysplastic: true,
    explanation: 'Pseudo-Pelger-Huët anomaly (hypolobated neutrophils) is characteristic of granulocytic dysplasia in MDS.'
  },
  {
    id: '4',
    lineage: 'Erythroid',
    description: 'Normoblast with normal nuclear:cytoplasmic ratio and regular chromatin',
    isDysplastic: false,
    explanation: 'This describes normal erythroid maturation without dysplastic features.'
  },
  {
    id: '5',
    lineage: 'Granulocytic',
    description: 'Neutrophil with absent or decreased granules (hypogranulation)',
    isDysplastic: true,
    explanation: 'Hypogranular neutrophils are a dysplastic feature commonly seen in MDS.'
  },
  {
    id: '6',
    lineage: 'Megakaryocytic',
    description: 'Large megakaryocyte with multilobated nucleus and abundant cytoplasm',
    isDysplastic: false,
    explanation: 'This describes a normal mature megakaryocyte.'
  },
  {
    id: '7',
    lineage: 'Erythroid',
    description: 'Ringed sideroblasts with iron deposits encircling ≥1/3 of nucleus',
    isDysplastic: true,
    explanation: 'Ring sideroblasts (≥15% or ≥5% with SF3B1 mutation) are diagnostic of MDS with ring sideroblasts.'
  },
  {
    id: '8',
    lineage: 'Granulocytic',
    description: 'Mature neutrophil with 3-5 nuclear lobes and normal granulation',
    isDysplastic: false,
    explanation: 'This is a normal mature neutrophil with appropriate segmentation and granulation.'
  },
  {
    id: '9',
    lineage: 'Erythroid',
    description: 'Normoblasts with irregular nuclear contours and budding',
    isDysplastic: true,
    explanation: 'Nuclear irregularity, budding, and fragmentation in erythroid precursors indicate dysplasia.'
  },
  {
    id: '10',
    lineage: 'Megakaryocytic',
    description: 'Megakaryocyte with multiple widely separated small nuclei',
    isDysplastic: true,
    explanation: 'Megakaryocytes with multiple separated nuclei (not connected by chromatin bridges) are dysplastic.'
  }
];

export function DysplasiaDetector() {
  const [currentCase, setCurrentCase] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);

  const currentCaseData = dysplasiaCases[currentCase];

  const handleAnswer = (answer: boolean) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    setAnswered(answered + 1);
    if (answer === currentCaseData.isDysplastic) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentCase < dysplasiaCases.length - 1) {
      setCurrentCase(currentCase + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const handleReset = () => {
    setCurrentCase(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setAnswered(0);
  };

  const isCorrect = selectedAnswer === currentCaseData.isDysplastic;
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
        <Badge className="mb-4">Morphology Tool</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Dysplasia Pattern Recognition</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Learn to identify dysplastic features in hematopoietic lineages
        </p>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-4">
          <Badge variant="outline">
            Case {currentCase + 1} of {dysplasiaCases.length}
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
            <CardTitle>Case Presentation</CardTitle>
            <CardDescription>
              <Badge className="mt-1">{currentCaseData.lineage} Lineage</Badge>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg border bg-muted p-6">
              <p className="text-lg">{currentCaseData.description}</p>
            </div>

            <div>
              <p className="mb-4 font-semibold">Is this a dysplastic feature?</p>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleAnswer(true)}
                  disabled={showFeedback}
                  variant={selectedAnswer === true ? 'default' : 'outline'}
                  className="flex-1"
                >
                  Yes - Dysplastic
                </Button>
                <Button
                  onClick={() => handleAnswer(false)}
                  disabled={showFeedback}
                  variant={selectedAnswer === false ? 'default' : 'outline'}
                  className="flex-1"
                >
                  No - Normal
                </Button>
              </div>
            </div>

            {showFeedback && (
              <div className={`rounded-lg border p-4 ${
                isCorrect ? 'bg-green-500/10 border-green-500' : 'bg-red-500/10 border-red-500'
              }`}>
                <div className={`mb-2 font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                </div>
                <div className="mb-2 text-sm">
                  <span className="font-medium">Correct answer: </span>
                  {currentCaseData.isDysplastic ? 'Dysplastic' : 'Normal'}
                </div>
                <div className="text-sm text-muted-foreground">
                  {currentCaseData.explanation}
                </div>
              </div>
            )}

            {showFeedback && currentCase < dysplasiaCases.length - 1 && (
              <Button onClick={handleNext} className="w-full">
                Next Case
              </Button>
            )}

            {showFeedback && currentCase === dysplasiaCases.length - 1 && (
              <div className="rounded-lg border bg-primary/10 p-4 text-center">
                <div className="mb-2 text-2xl font-bold">Quiz Complete!</div>
                <div className="text-lg">
                  Final Score: {score} / {dysplasiaCases.length} ({Math.round((score / dysplasiaCases.length) * 100)}%)
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
            <CardTitle>Dysplasia Quick Reference</CardTitle>
            <CardDescription>Key dysplastic features by lineage</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold text-primary">Megakaryocytic Dysplasia</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Hypolobated nuclei (single or bilobed)</li>
                <li>Multiple widely separated nuclei</li>
                <li>Small (micro) megakaryocytes</li>
                <li>Non-lobated nuclei</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-primary">Erythroid Dysplasia</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Nuclear irregularity, budding, fragmentation</li>
                <li>Multinucleation (2+ nuclei)</li>
                <li>Ring sideroblasts (≥15% or ≥5% with SF3B1)</li>
                <li>Megaloblastic changes</li>
                <li>Asynchronous maturation</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-primary">Granulocytic Dysplasia</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Pseudo-Pelger-Huët (hypolobation)</li>
                <li>Hypogranulation or agranulation</li>
                <li>Abnormal nuclear segmentation</li>
                <li>Small size</li>
              </ul>
            </div>

            <div className="rounded-lg bg-muted p-4">
              <h3 className="mb-2 font-semibold">Diagnostic Criteria</h3>
              <p className="text-sm text-muted-foreground">
                Dysplasia must be present in <span className="font-bold text-foreground">≥10%</span> of cells
                in a lineage to be considered significant for MDS diagnosis.
              </p>
            </div>

            <div className="rounded-lg bg-muted p-4">
              <h3 className="mb-2 font-semibold">Clinical Pearl</h3>
              <p className="text-sm text-muted-foreground">
                Dysplastic changes can also be seen in vitamin B12/folate deficiency, drug effects,
                HIV, and other non-clonal conditions. Clinical correlation is essential!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
