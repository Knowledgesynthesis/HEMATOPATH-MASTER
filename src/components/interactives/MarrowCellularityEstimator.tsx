import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ChevronLeft } from 'lucide-react';

export function MarrowCellularityEstimator() {
  const [age, setAge] = useState<string>('');
  const [estimatedCellularity, setEstimatedCellularity] = useState<string>('');
  const [showResult, setShowResult] = useState(false);

  const calculateExpectedCellularity = (patientAge: number) => {
    const expected = 100 - patientAge;
    const min = Math.max(0, expected - 10);
    const max = Math.min(100, expected + 10);
    return { expected, min, max };
  };

  const handleCalculate = () => {
    if (age) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setAge('');
    setEstimatedCellularity('');
    setShowResult(false);
  };

  const assessEstimate = () => {
    if (!age || !estimatedCellularity) return null;

    const patientAge = parseInt(age);
    const estimate = parseInt(estimatedCellularity);
    const { min, max } = calculateExpectedCellularity(patientAge);

    if (estimate >= min && estimate <= max) {
      return {
        status: 'correct',
        message: 'Excellent! Your estimate is within the normal range.',
        color: 'text-green-600'
      };
    } else if (estimate > max) {
      return {
        status: 'high',
        message: 'Your estimate is higher than expected. This would suggest hypercellular marrow.',
        color: 'text-orange-600'
      };
    } else {
      return {
        status: 'low',
        message: 'Your estimate is lower than expected. This would suggest hypocellular marrow.',
        color: 'text-orange-600'
      };
    }
  };

  const ageNum = age ? parseInt(age) : null;
  const expectedValues = ageNum ? calculateExpectedCellularity(ageNum) : null;
  const assessment = assessEstimate();

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
        <h1 className="text-4xl font-bold tracking-tight">Marrow Cellularity Estimator</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Practice estimating bone marrow cellularity based on age-adjusted norms
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Patient Information</CardTitle>
            <CardDescription>Enter patient age and estimate cellularity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Patient Age (years)
              </label>
              <input
                type="number"
                min="0"
                max="120"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                  setShowResult(false);
                }}
                className="w-full rounded-lg border bg-background px-4 py-2"
                placeholder="Enter age (0-120)"
              />
            </div>

            {age && (
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Your Cellularity Estimate (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={estimatedCellularity}
                  onChange={(e) => setEstimatedCellularity(e.target.value)}
                  className="w-full rounded-lg border bg-background px-4 py-2"
                  placeholder="Enter your estimate (0-100)"
                />
              </div>
            )}

            <div className="flex gap-2">
              <Button onClick={handleCalculate} disabled={!age || !estimatedCellularity} className="flex-1">
                Check Estimate
              </Button>
              <Button onClick={handleReset} variant="outline">
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {showResult && expectedValues && (
          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>Expected cellularity for age {age}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border bg-muted p-4">
                <div className="mb-2 text-sm font-medium">Expected Cellularity</div>
                <div className="text-3xl font-bold text-primary">
                  {expectedValues.expected}%
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Normal range: {expectedValues.min}% - {expectedValues.max}%
                </div>
              </div>

              <div className="rounded-lg border bg-muted p-4">
                <div className="mb-2 text-sm font-medium">Your Estimate</div>
                <div className="text-3xl font-bold">{estimatedCellularity}%</div>
              </div>

              {assessment && (
                <div className={`rounded-lg border p-4 ${
                  assessment.status === 'correct' ? 'bg-green-500/10' : 'bg-orange-500/10'
                }`}>
                  <div className={`font-semibold ${assessment.color}`}>
                    {assessment.message}
                  </div>
                </div>
              )}

              <div className="space-y-2 text-sm">
                <div className="font-semibold">Interpretation Guide:</div>
                <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                  <li>Expected cellularity = 100 - age (±10%)</li>
                  <li>Hypercellular: {'>'}80% or {'>'}10% above expected</li>
                  <li>Hypocellular: {'<'}20% or {'>'}10% below expected</li>
                  <li>Always assess cellularity on core biopsy, not aspirate</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Educational Notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">Cellularity Formula</h3>
            <p className="text-sm text-muted-foreground">
              Expected bone marrow cellularity = 100 - patient age (±10%)
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              For example, a 50-year-old should have ~50% cellularity (40-60% range).
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Age-Related Changes</h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Infants: 80-100% cellular (very active hematopoiesis)</li>
              <li>Young adults (20 years): 70-80%</li>
              <li>Middle age (50 years): 40-60%</li>
              <li>Elderly (80 years): 20-30%</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Clinical Pearls</h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Cellularity must be assessed on core biopsy, not aspirate smears</li>
              <li>Fat:cell ratio inversely correlates with cellularity</li>
              <li>Hypercellular marrow: Think leukemia, MPN, reactive states</li>
              <li>Hypocellular marrow: Think aplasia, post-chemotherapy, MDS variant</li>
              <li>Focal vs diffuse hypercellularity matters (e.g., lymphoid aggregates)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
