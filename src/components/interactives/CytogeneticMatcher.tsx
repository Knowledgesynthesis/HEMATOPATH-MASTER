import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ChevronLeft } from 'lucide-react';

interface CytogeneticSignature {
  id: string;
  translocation: string;
  fusion: string;
  diagnosis: string;
  prognostic: string;
  notes: string;
  category: string;
}

const cytogeneticSignatures: CytogeneticSignature[] = [
  {
    id: '1',
    translocation: 't(15;17)(q24;q21)',
    fusion: 'PML::RARA',
    diagnosis: 'Acute Promyelocytic Leukemia (APL)',
    prognostic: 'Favorable with tretinoin therapy',
    notes: 'Medical emergency due to DIC risk. Treat with ATRA (tretinoin).',
    category: 'AML'
  },
  {
    id: '2',
    translocation: 't(8;21)(q22;q22)',
    fusion: 'RUNX1::RUNX1T1',
    diagnosis: 'AML with t(8;21)',
    prognostic: 'Favorable (core-binding factor AML)',
    notes: 'One of the core-binding factor AMLs with better prognosis.',
    category: 'AML'
  },
  {
    id: '3',
    translocation: 'inv(16)(p13.1q22) or t(16;16)',
    fusion: 'CBFB::MYH11',
    diagnosis: 'AML with inv(16) or t(16;16)',
    prognostic: 'Favorable (core-binding factor AML)',
    notes: 'Core-binding factor AML, often with abnormal eosinophils.',
    category: 'AML'
  },
  {
    id: '4',
    translocation: 't(9;22)(q34;q11.2)',
    fusion: 'BCR::ABL1',
    diagnosis: 'CML or Philadelphia chromosome-positive ALL',
    prognostic: 'Poor in ALL, manageable in CML with TKI',
    notes: 'CML: p210 fusion. Ph+ ALL: p190 fusion. Both require TKI therapy.',
    category: 'CML/ALL'
  },
  {
    id: '5',
    translocation: 't(14;18)(q32;q21)',
    fusion: 'IGH::BCL2',
    diagnosis: 'Follicular Lymphoma',
    prognostic: 'Indolent course',
    notes: 'BCL2 becomes overexpressed. Abnormal in germinal center cells.',
    category: 'Lymphoma'
  },
  {
    id: '6',
    translocation: 't(11;14)(q13;q32)',
    fusion: 'CCND1::IGH',
    diagnosis: 'Mantle Cell Lymphoma',
    prognostic: 'Aggressive',
    notes: 'Leads to cyclin D1 overexpression (IHC positive).',
    category: 'Lymphoma'
  },
  {
    id: '7',
    translocation: 't(8;14)(q24;q32)',
    fusion: 'MYC::IGH',
    diagnosis: 'Burkitt Lymphoma',
    prognostic: 'Aggressive but responsive to therapy',
    notes: 'Also t(2;8) and t(8;22) variants. MYC rearrangement diagnostic.',
    category: 'Lymphoma'
  },
  {
    id: '8',
    translocation: 't(12;21)(p13;q22)',
    fusion: 'ETV6::RUNX1',
    diagnosis: 'B-ALL (pediatric)',
    prognostic: 'Favorable in children',
    notes: 'Most common translocation in pediatric B-ALL.',
    category: 'ALL'
  },
  {
    id: '9',
    translocation: 't(2;5)(p23;q35)',
    fusion: 'NPM::ALK',
    diagnosis: 'Anaplastic Large Cell Lymphoma (ALK+)',
    prognostic: 'Better than ALK-negative',
    notes: 'ALK-positive ALCL has better prognosis than ALK-negative.',
    category: 'Lymphoma'
  },
  {
    id: '10',
    translocation: 't(9;11)(p21.3;q23.3)',
    fusion: 'KMT2A::MLLT3',
    diagnosis: 'AML with KMT2A rearrangement',
    prognostic: 'Intermediate',
    notes: 'KMT2A (formerly MLL) rearrangements can occur in AML and ALL.',
    category: 'AML'
  }
];

export function CytogeneticMatcher() {
  const [selectedTranslocation, setSelectedTranslocation] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    if (selectedTranslocation) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setSelectedTranslocation('');
    setShowResult(false);
  };

  const selectedSignature = cytogeneticSignatures.find(s => s.id === selectedTranslocation);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/interactives">
        <Button variant="ghost" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Interactive Tools
        </Button>
      </Link>

      <div className="mb-8">
        <Badge className="mb-4">Cytogenetics Tool</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Cytogenetic Signature Matcher</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Match translocations to their associated diseases and fusion products
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Select a Translocation</CardTitle>
            <CardDescription>Choose a cytogenetic abnormality to learn more</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Cytogenetic Abnormality
              </label>
              <select
                value={selectedTranslocation}
                onChange={(e) => {
                  setSelectedTranslocation(e.target.value);
                  setShowResult(false);
                }}
                className="w-full rounded-lg border bg-background px-4 py-2"
              >
                <option value="">Select translocation...</option>
                {cytogeneticSignatures.map((sig) => (
                  <option key={sig.id} value={sig.id}>
                    {sig.translocation}
                  </option>
                ))}
              </select>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!selectedTranslocation}
              className="w-full"
            >
              Show Details
            </Button>

            {showResult && selectedSignature && (
              <div className="space-y-4">
                <div className="rounded-lg border bg-primary/10 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <Badge>{selectedSignature.category}</Badge>
                  </div>
                  <div className="mb-3 text-2xl font-bold">
                    {selectedSignature.diagnosis}
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold">Translocation: </span>
                      <span className="text-muted-foreground">{selectedSignature.translocation}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Fusion Product: </span>
                      <span className="text-muted-foreground">{selectedSignature.fusion}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Prognosis: </span>
                      <span className="text-muted-foreground">{selectedSignature.prognostic}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-muted p-4">
                  <div className="mb-2 font-semibold">Clinical Notes</div>
                  <p className="text-sm text-muted-foreground">
                    {selectedSignature.notes}
                  </p>
                </div>
              </div>
            )}

            <Button onClick={handleReset} variant="outline" className="w-full">
              Reset
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Reference Table</CardTitle>
              <CardDescription>Common translocations by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-primary">AML (Favorable)</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• t(15;17) → PML::RARA → APL</div>
                    <div>• t(8;21) → RUNX1::RUNX1T1</div>
                    <div>• inv(16) → CBFB::MYH11</div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-primary">CML / Ph+ ALL</h3>
                  <div className="text-sm text-muted-foreground">
                    • t(9;22) → BCR::ABL1
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-primary">Lymphomas</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• t(14;18) → BCL2 → Follicular</div>
                    <div>• t(11;14) → Cyclin D1 → MCL</div>
                    <div>• t(8;14) → MYC → Burkitt</div>
                    <div>• t(2;5) → NPM::ALK → ALCL</div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-primary">ALL</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• t(9;22) → BCR::ABL1 (Ph+ ALL)</div>
                    <div>• t(12;21) → ETV6::RUNX1 (pediatric)</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Educational Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <div className="mb-1 font-medium">FISH vs Karyotype</div>
                <p className="text-muted-foreground">
                  FISH can detect specific translocations with higher sensitivity and doesn't
                  require dividing cells, unlike conventional karyotyping.
                </p>
              </div>

              <div>
                <div className="mb-1 font-medium">Fusion Nomenclature</div>
                <p className="text-muted-foreground">
                  Fusion genes are written as GENE1::GENE2 (e.g., BCR::ABL1). The double colon
                  indicates a fusion product.
                </p>
              </div>

              <div>
                <div className="mb-1 font-medium">Prognostic Significance</div>
                <p className="text-muted-foreground">
                  Many translocations guide both diagnosis and prognosis. Core-binding factor
                  AMLs (t(8;21), inv(16)) have favorable outcomes, while complex karyotypes
                  suggest poor prognosis.
                </p>
              </div>

              <div>
                <div className="mb-1 font-medium">Double/Triple Hit Lymphomas</div>
                <p className="text-muted-foreground">
                  Lymphomas with MYC + BCL2/BCL6 rearrangements are "double-hit" and very
                  aggressive. Triple-hit includes all three (MYC + BCL2 + BCL6).
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
