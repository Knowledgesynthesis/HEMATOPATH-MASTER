import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ChevronLeft } from 'lucide-react';

interface DiagnosticData {
  morphology: string[];
  flow: string[];
  cytogenetics: string[];
  molecular: string[];
}

export function IntegratedDiagnosis() {
  const [data, setData] = useState<DiagnosticData>({
    morphology: [],
    flow: [],
    cytogenetics: [],
    molecular: []
  });
  const [showDiagnosis, setShowDiagnosis] = useState(false);

  const morphologyOptions = [
    'Blasts with Auer rods',
    'Hypergranular promyelocytes',
    'Dysplastic neutrophils',
    'Dysplastic megakaryocytes',
    'Mature lymphocytes + smudge cells',
    'Monomorphic medium cells with starry sky',
    'Reed-Sternberg cells',
    'Teardrop cells',
    'Ring sideroblasts',
    'Plasma cells >10%'
  ];

  const flowOptions = [
    'CD34+, MPO+, CD13+',
    'CD5+, CD23+, dim CD20',
    'TdT+, CD19+, CD10+',
    'CD10+, BCL2+, BCL6+',
    'CD19+, CD5+, cyclin D1+',
    'CD38 bright, CD138+, κ or λ restricted',
    'CD30+, CD15+, weak PAX5',
    'TdT+, cytoplasmic CD3+',
    'CD13+, CD14+, CD64+',
    'Normal flow pattern'
  ];

  const cytogeneticsOptions = [
    't(15;17)',
    't(8;21)',
    'inv(16)',
    't(9;22) BCR::ABL1',
    't(14;18) BCL2',
    't(11;14) Cyclin D1',
    't(8;14) MYC',
    'del(5q)',
    'Complex karyotype',
    'Normal karyotype',
    'JAK2 V617F',
    'CALR mutation'
  ];

  const molecularOptions = [
    'PML::RARA fusion',
    'RUNX1::RUNX1T1 fusion',
    'CBFB::MYH11 fusion',
    'BCR::ABL1 p210',
    'BCR::ABL1 p190',
    'FLT3-ITD',
    'NPM1 mutation',
    'SF3B1 mutation',
    'TP53 mutation',
    'No mutations detected'
  ];

  const toggleSelection = (category: keyof DiagnosticData, item: string) => {
    setData(prev => {
      const current = prev[category];
      const updated = current.includes(item)
        ? current.filter(i => i !== item)
        : [...current, item];
      return { ...prev, [category]: updated };
    });
    setShowDiagnosis(false);
  };

  const generateDiagnosis = () => {
    const findings = { ...data };
    let diagnosis = '';
    let confidence = 'Low';
    let comment = '';

    // APL
    if (findings.morphology.includes('Hypergranular promyelocytes') &&
        findings.cytogenetics.includes('t(15;17)') &&
        findings.molecular.includes('PML::RARA fusion')) {
      diagnosis = 'Acute Promyelocytic Leukemia (APL)';
      confidence = 'High';
      comment = 'Medical emergency. Start tretinoin immediately. High DIC risk.';
    }
    // AML with t(8;21)
    else if (findings.morphology.includes('Blasts with Auer rods') &&
             findings.flow.includes('CD34+, MPO+, CD13+') &&
             findings.cytogenetics.includes('t(8;21)')) {
      diagnosis = 'AML with t(8;21); RUNX1::RUNX1T1';
      confidence = 'High';
      comment = 'Core-binding factor AML with favorable prognosis.';
    }
    // CLL
    else if (findings.morphology.includes('Mature lymphocytes + smudge cells') &&
             findings.flow.includes('CD5+, CD23+, dim CD20')) {
      diagnosis = 'Chronic Lymphocytic Leukemia (CLL)';
      confidence = 'High';
      comment = 'Classic immunophenotype and morphology for CLL.';
    }
    // B-ALL
    else if (findings.flow.includes('TdT+, CD19+, CD10+')) {
      if (findings.cytogenetics.includes('t(9;22) BCR::ABL1')) {
        diagnosis = 'B-Acute Lymphoblastic Leukemia with BCR::ABL1 (Philadelphia chromosome-positive)';
        confidence = 'High';
        comment = 'Poor prognosis. Requires TKI therapy.';
      } else {
        diagnosis = 'B-Acute Lymphoblastic Leukemia';
        confidence = 'Moderate';
        comment = 'Further classify by cytogenetics and risk stratify.';
      }
    }
    // Follicular Lymphoma
    else if (findings.flow.includes('CD10+, BCL2+, BCL6+') &&
             findings.cytogenetics.includes('t(14;18) BCL2')) {
      diagnosis = 'Follicular Lymphoma';
      confidence = 'High';
      comment = 'BCL2 translocation with germinal center phenotype.';
    }
    // Mantle Cell Lymphoma
    else if (findings.flow.includes('CD19+, CD5+, cyclin D1+') &&
             findings.cytogenetics.includes('t(11;14) Cyclin D1')) {
      diagnosis = 'Mantle Cell Lymphoma';
      confidence = 'High';
      comment = 'Aggressive B-cell lymphoma with t(11;14).';
    }
    // Burkitt Lymphoma
    else if (findings.morphology.includes('Monomorphic medium cells with starry sky') &&
             findings.cytogenetics.includes('t(8;14) MYC')) {
      diagnosis = 'Burkitt Lymphoma';
      confidence = 'High';
      comment = 'Highly aggressive. MYC rearrangement is diagnostic.';
    }
    // Multiple Myeloma
    else if (findings.morphology.includes('Plasma cells >10%') &&
             findings.flow.includes('CD38 bright, CD138+, κ or λ restricted')) {
      diagnosis = 'Plasma Cell Neoplasm (Multiple Myeloma vs MGUS)';
      confidence = 'Moderate';
      comment = 'Check for CRAB features to distinguish myeloma from MGUS.';
    }
    // MDS with del(5q)
    else if (findings.morphology.includes('Dysplastic megakaryocytes') &&
             findings.cytogenetics.includes('del(5q)')) {
      diagnosis = 'MDS with isolated del(5q)';
      confidence = 'High';
      comment = 'Often responds to lenalidomide.';
    }
    // PMF
    else if (findings.morphology.includes('Teardrop cells') &&
             (findings.cytogenetics.includes('JAK2 V617F') || findings.cytogenetics.includes('CALR mutation'))) {
      diagnosis = 'Primary Myelofibrosis';
      confidence = 'Moderate';
      comment = 'Correlate with marrow fibrosis on core biopsy.';
    }
    // Default
    else {
      diagnosis = 'Incomplete Data or Non-specific Findings';
      confidence = 'Low';
      comment = 'Additional testing or clinical correlation needed for definitive diagnosis.';
    }

    return { diagnosis, confidence, comment };
  };

  const result = showDiagnosis ? generateDiagnosis() : null;

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
        <h1 className="text-4xl font-bold tracking-tight">Integrated Diagnosis Builder</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Combine morphology, flow, cytogenetics, and molecular data to reach a diagnosis
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Morphology</CardTitle>
              <CardDescription>Select morphologic findings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {morphologyOptions.map((item) => (
                  <Badge
                    key={item}
                    variant={data.morphology.includes(item) ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => toggleSelection('morphology', item)}
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Flow Cytometry</CardTitle>
              <CardDescription>Select immunophenotype patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {flowOptions.map((item) => (
                  <Badge
                    key={item}
                    variant={data.flow.includes(item) ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => toggleSelection('flow', item)}
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cytogenetics</CardTitle>
              <CardDescription>Select cytogenetic findings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {cytogeneticsOptions.map((item) => (
                  <Badge
                    key={item}
                    variant={data.cytogenetics.includes(item) ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => toggleSelection('cytogenetics', item)}
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Molecular Studies</CardTitle>
              <CardDescription>Select molecular findings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {molecularOptions.map((item) => (
                  <Badge
                    key={item}
                    variant={data.molecular.includes(item) ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => toggleSelection('molecular', item)}
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Selected Findings</CardTitle>
              <CardDescription>Your diagnostic data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {data.morphology.length > 0 && (
                <div>
                  <div className="mb-1 text-sm font-medium">Morphology:</div>
                  <div className="text-sm text-muted-foreground">
                    {data.morphology.join(', ')}
                  </div>
                </div>
              )}
              {data.flow.length > 0 && (
                <div>
                  <div className="mb-1 text-sm font-medium">Flow Cytometry:</div>
                  <div className="text-sm text-muted-foreground">
                    {data.flow.join(', ')}
                  </div>
                </div>
              )}
              {data.cytogenetics.length > 0 && (
                <div>
                  <div className="mb-1 text-sm font-medium">Cytogenetics:</div>
                  <div className="text-sm text-muted-foreground">
                    {data.cytogenetics.join(', ')}
                  </div>
                </div>
              )}
              {data.molecular.length > 0 && (
                <div>
                  <div className="mb-1 text-sm font-medium">Molecular:</div>
                  <div className="text-sm text-muted-foreground">
                    {data.molecular.join(', ')}
                  </div>
                </div>
              )}
              {!data.morphology.length && !data.flow.length && !data.cytogenetics.length && !data.molecular.length && (
                <div className="text-sm text-muted-foreground">
                  No findings selected yet. Click badges on the left to select.
                </div>
              )}
            </CardContent>
          </Card>

          <Button
            onClick={() => setShowDiagnosis(true)}
            disabled={!data.morphology.length && !data.flow.length && !data.cytogenetics.length && !data.molecular.length}
            className="w-full"
          >
            Generate Diagnosis
          </Button>

          {result && (
            <Card>
              <CardHeader>
                <CardTitle>Integrated Diagnosis</CardTitle>
                <CardDescription>
                  <Badge className="mt-1" variant={
                    result.confidence === 'High' ? 'default' :
                    result.confidence === 'Moderate' ? 'secondary' : 'outline'
                  }>
                    Confidence: {result.confidence}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border bg-primary/10 p-4">
                  <div className="mb-1 text-sm font-medium text-muted-foreground">
                    Suggested Diagnosis:
                  </div>
                  <div className="text-xl font-bold text-primary">
                    {result.diagnosis}
                  </div>
                </div>

                <div className="rounded-lg border bg-muted p-4">
                  <div className="mb-1 text-sm font-medium">Comment:</div>
                  <div className="text-sm text-muted-foreground">
                    {result.comment}
                  </div>
                </div>

                <div className="rounded-lg border p-4 text-sm text-muted-foreground">
                  <div className="mb-1 font-medium">Educational Note:</div>
                  This is a simplified diagnostic algorithm for educational purposes.
                  Actual diagnosis requires comprehensive clinical correlation, additional
                  testing, and expert review. Always follow WHO/ICC classification guidelines
                  and institutional protocols.
                </div>
              </CardContent>
            </Card>
          )}

          <Button
            onClick={() => {
              setData({ morphology: [], flow: [], cytogenetics: [], molecular: [] });
              setShowDiagnosis(false);
            }}
            variant="outline"
            className="w-full"
          >
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
}
