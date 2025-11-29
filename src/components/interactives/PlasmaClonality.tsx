import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ChevronLeft } from 'lucide-react';

export function PlasmaClonality() {
  const [kappa, setKappa] = useState('');
  const [lambda, setLambda] = useState('');
  const [showResult, setShowResult] = useState(false);

  const calculateRatio = () => {
    const k = parseFloat(kappa);
    const l = parseFloat(lambda);
    if (l === 0) return null;
    return k / l;
  };

  const interpretRatio = (ratio: number | null) => {
    if (ratio === null) return null;

    if (ratio >= 0.3 && ratio <= 3.0) {
      return {
        interpretation: 'Polyclonal',
        message: 'Normal κ:λ ratio suggests polyclonal plasma cells (reactive/normal)',
        color: 'text-green-600',
        bgColor: 'bg-green-500/10 border-green-500'
      };
    } else if (ratio > 3.0) {
      return {
        interpretation: 'Monoclonal (κ-restricted)',
        message: 'Elevated κ:λ ratio indicates monoclonal κ light chain expression',
        color: 'text-orange-600',
        bgColor: 'bg-orange-500/10 border-orange-500'
      };
    } else {
      return {
        interpretation: 'Monoclonal (λ-restricted)',
        message: 'Decreased κ:λ ratio indicates monoclonal λ light chain expression',
        color: 'text-orange-600',
        bgColor: 'bg-orange-500/10 border-orange-500'
      };
    }
  };

  const handleCalculate = () => {
    setShowResult(true);
  };

  const handleReset = () => {
    setKappa('');
    setLambda('');
    setShowResult(false);
  };

  const ratio = calculateRatio();
  const interpretation = interpretRatio(ratio);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/interactives">
        <Button variant="ghost" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Interactive Tools
        </Button>
      </Link>

      <div className="mb-8">
        <Badge className="mb-4">Plasma Cell Tool</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Plasma Cell Clonality Checker</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Calculate and interpret κ/λ light chain ratios
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Light Chain Ratio Calculator</CardTitle>
            <CardDescription>Enter κ and λ percentages from flow cytometry</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                κ (Kappa) Percentage
              </label>
              <input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={kappa}
                onChange={(e) => {
                  setKappa(e.target.value);
                  setShowResult(false);
                }}
                className="w-full rounded-lg border bg-background px-4 py-2"
                placeholder="Enter κ % (0-100)"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                λ (Lambda) Percentage
              </label>
              <input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={lambda}
                onChange={(e) => {
                  setLambda(e.target.value);
                  setShowResult(false);
                }}
                className="w-full rounded-lg border bg-background px-4 py-2"
                placeholder="Enter λ % (0-100)"
              />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleCalculate}
                disabled={!kappa || !lambda || parseFloat(lambda) === 0}
                className="flex-1"
              >
                Calculate Ratio
              </Button>
              <Button onClick={handleReset} variant="outline">
                Reset
              </Button>
            </div>

            {showResult && ratio !== null && interpretation && (
              <div className="space-y-4">
                <div className="rounded-lg border bg-muted p-4">
                  <div className="mb-2 text-sm font-medium">κ:λ Ratio</div>
                  <div className="text-3xl font-bold text-primary">
                    {ratio.toFixed(2)}:1
                  </div>
                </div>

                <div className={`rounded-lg border p-4 ${interpretation.bgColor}`}>
                  <div className={`mb-2 text-lg font-semibold ${interpretation.color}`}>
                    {interpretation.interpretation}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {interpretation.message}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Interpretation Guide</CardTitle>
              <CardDescription>Understanding κ:λ ratios</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border bg-green-500/10 p-4">
                <div className="mb-2 font-semibold text-green-600">
                  Normal (Polyclonal)
                </div>
                <div className="text-sm text-muted-foreground">
                  κ:λ ratio: <span className="font-bold">0.3 - 3.0</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Typical normal ratio: 1.5:1 to 2:1
                </div>
              </div>

              <div className="rounded-lg border bg-orange-500/10 p-4">
                <div className="mb-2 font-semibold text-orange-600">
                  κ-Restricted (Monoclonal)
                </div>
                <div className="text-sm text-muted-foreground">
                  κ:λ ratio: <span className="font-bold">{'>'}3.0</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Clonal plasma cells expressing only κ light chains
                </div>
              </div>

              <div className="rounded-lg border bg-orange-500/10 p-4">
                <div className="mb-2 font-semibold text-orange-600">
                  λ-Restricted (Monoclonal)
                </div>
                <div className="text-sm text-muted-foreground">
                  κ:λ ratio: <span className="font-bold">{'<'}0.3</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Clonal plasma cells expressing only λ light chains
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Clinical Pearls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <div className="mb-1 font-medium">Light Chain Restriction = Clonality</div>
                <p className="text-muted-foreground">
                  Monoclonal light chain expression is the most reliable indicator of clonal
                  B cells or plasma cells.
                </p>
              </div>

              <div className="text-sm">
                <div className="mb-1 font-medium">Flow vs IHC</div>
                <p className="text-muted-foreground">
                  Can be assessed by flow cytometry (surface or cytoplasmic) or by
                  immunohistochemistry on tissue sections.
                </p>
              </div>

              <div className="text-sm">
                <div className="mb-1 font-medium">Serum Free Light Chains</div>
                <p className="text-muted-foreground">
                  Serum free light chain (FLC) ratio is also used clinically. Normal serum
                  κ:λ FLC ratio: 0.26-1.65.
                </p>
              </div>

              <div className="text-sm">
                <div className="mb-1 font-medium">Clinical Significance</div>
                <p className="text-muted-foreground">
                  Light chain restriction supports diagnoses of multiple myeloma, MGUS,
                  B-cell lymphomas, and other clonal lymphoproliferative disorders.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Practice Examples</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="rounded border p-3">
                <div className="font-medium">Example 1: Normal</div>
                <div className="text-muted-foreground">κ = 60%, λ = 40% → Ratio = 1.5:1 (Polyclonal)</div>
              </div>
              <div className="rounded border p-3">
                <div className="font-medium">Example 2: κ-restricted</div>
                <div className="text-muted-foreground">κ = 95%, λ = 5% → Ratio = 19:1 (Monoclonal κ)</div>
              </div>
              <div className="rounded border p-3">
                <div className="font-medium">Example 3: λ-restricted</div>
                <div className="text-muted-foreground">κ = 5%, λ = 95% → Ratio = 0.05:1 (Monoclonal λ)</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
