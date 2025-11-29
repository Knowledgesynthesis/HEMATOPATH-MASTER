import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { caseVignettes } from '@/data/cases';
import { ChevronLeft } from 'lucide-react';

export function Cases() {
  const [currentCase, setCurrentCase] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showRationale, setShowRationale] = useState(false);

  const vignette = caseVignettes[currentCase];

  const handleSubmit = () => {
    setShowRationale(true);
  };

  const handleNext = () => {
    setCurrentCase((prev) => (prev + 1) % caseVignettes.length);
    setSelectedAnswer(null);
    setShowRationale(false);
  };

  const handlePrevious = () => {
    setCurrentCase((prev) => (prev - 1 + caseVignettes.length) % caseVignettes.length);
    setSelectedAnswer(null);
    setShowRationale(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/">
        <Button variant="ghost" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Case Studies</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Integrated diagnostic cases combining morphology, flow cytometry, and molecular data
        </p>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <Badge variant="outline">
          Case {currentCase + 1} of {caseVignettes.length}
        </Badge>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handlePrevious}>
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Case {currentCase + 1}</CardTitle>
          <CardDescription>Review the findings and select the most likely diagnosis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {vignette.cbc && (
              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-semibold">CBC Results</h3>
                <div className="grid grid-cols-2 gap-2 text-sm md:grid-cols-3">
                  {vignette.cbc.wbc && (
                    <div>
                      <span className="text-muted-foreground">WBC:</span> {vignette.cbc.wbc} × 10⁹/L
                    </div>
                  )}
                  {vignette.cbc.hgb && (
                    <div>
                      <span className="text-muted-foreground">Hgb:</span> {vignette.cbc.hgb} g/dL
                    </div>
                  )}
                  {vignette.cbc.plt && (
                    <div>
                      <span className="text-muted-foreground">Plt:</span> {vignette.cbc.plt} × 10⁹/L
                    </div>
                  )}
                </div>
              </div>
            )}

            {vignette.morph && vignette.morph.length > 0 && (
              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-semibold">Morphology</h3>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  {vignette.morph.map((finding, idx) => (
                    <li key={idx}>{finding}</li>
                  ))}
                </ul>
              </div>
            )}

            {vignette.flow && Object.keys(vignette.flow).length > 0 && (
              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-semibold">Flow Cytometry / Immunophenotype</h3>
                <div className="space-y-1 text-sm">
                  {Object.entries(vignette.flow).map(([key, value]) => (
                    <div key={key}>
                      <span className="font-medium">{key.toUpperCase()}:</span> {value}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {vignette.cyto && vignette.cyto.length > 0 && (
              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-semibold">Cytogenetics</h3>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  {vignette.cyto.map((finding, idx) => (
                    <li key={idx}>{finding}</li>
                  ))}
                </ul>
              </div>
            )}

            {vignette.molecular && vignette.molecular.length > 0 && (
              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-semibold">Molecular Studies</h3>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  {vignette.molecular.map((finding, idx) => (
                    <li key={idx}>{finding}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-lg border p-4">
              <h3 className="mb-4 font-semibold">{vignette.question}</h3>
              <div className="space-y-2">
                {vignette.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => !showRationale && setSelectedAnswer(option)}
                    disabled={showRationale}
                    className={`w-full rounded-lg border p-3 text-left transition-colors ${
                      selectedAnswer === option
                        ? showRationale
                          ? option === vignette.correct
                            ? 'border-green-500 bg-green-500/10'
                            : 'border-red-500 bg-red-500/10'
                          : 'border-primary bg-primary/10'
                        : showRationale && option === vignette.correct
                        ? 'border-green-500 bg-green-500/10'
                        : 'hover:bg-accent'
                    } ${showRationale ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    {option}
                    {showRationale && option === vignette.correct && (
                      <Badge className="ml-2" variant="default">
                        Correct
                      </Badge>
                    )}
                  </button>
                ))}
              </div>

              {!showRationale && (
                <Button
                  onClick={handleSubmit}
                  disabled={!selectedAnswer}
                  className="mt-4 w-full"
                >
                  Submit Answer
                </Button>
              )}
            </div>

            {showRationale && (
              <div className="rounded-lg border border-primary bg-primary/5 p-4">
                <h3 className="mb-2 font-semibold text-primary">Rationale</h3>
                <p className="text-sm">{vignette.rationale}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
