import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ChevronLeft } from 'lucide-react';

interface ArchitectureZone {
  id: string;
  name: string;
  description: string;
  cellTypes: string[];
  function: string;
  pathology: string[];
}

const architectureZones: ArchitectureZone[] = [
  {
    id: 'follicle',
    name: 'Follicle (Germinal Center)',
    description: 'B-cell proliferation zone where B cells undergo somatic hypermutation and class switching',
    cellTypes: ['Centroblasts (large, proliferating)', 'Centrocytes (small, cleaved)', 'Tingible body macrophages', 'Follicular dendritic cells'],
    function: 'B-cell maturation, affinity maturation, and selection',
    pathology: ['Follicular lymphoma (BCL2+ follicles)', 'Follicular hyperplasia (reactive)', 'Burkitt lymphoma (starry-sky pattern)']
  },
  {
    id: 'mantle',
    name: 'Mantle Zone',
    description: 'Rim of small naive B cells surrounding the germinal center',
    cellTypes: ['Small naive B cells', 'IgM+, IgD+'],
    function: 'Reservoir of naive B cells',
    pathology: ['Mantle cell lymphoma (expands mantle zone)', 'Preserved in reactive hyperplasia']
  },
  {
    id: 'marginal',
    name: 'Marginal Zone',
    description: 'Zone between follicle and red pulp (spleen) or subcapsular/perifollicular area (lymph node)',
    cellTypes: ['Post-germinal center memory B cells', 'Monocytoid B cells'],
    function: 'T-independent B-cell responses',
    pathology: ['Marginal zone lymphoma (MALT, splenic, nodal types)']
  },
  {
    id: 'paracortex',
    name: 'Paracortex (Interfollicular)',
    description: 'T-cell rich zone between follicles',
    cellTypes: ['T cells (CD4+ and CD8+)', 'High endothelial venules (HEV)', 'Dendritic cells', 'Histiocytes'],
    function: 'T-cell activation and trafficking',
    pathology: ['Paracortical hyperplasia (viral infections)', 'T-cell lymphomas', 'Dermatopathic lymphadenopathy']
  },
  {
    id: 'sinuses',
    name: 'Sinuses (Subcapsular, Medullary)',
    description: 'Lymphatic channels lined by endothelium',
    cellTypes: ['Sinus histiocytes/macrophages', 'Lymphocytes in transit'],
    function: 'Lymph filtration and immune surveillance',
    pathology: ['Sinus histiocytosis (Rosai-Dorfman)', 'Metastatic carcinoma (common site)', 'Langerhans cell histiocytosis']
  },
  {
    id: 'medullary',
    name: 'Medullary Cords',
    description: 'Cords of lymphoid tissue in the medulla',
    cellTypes: ['Plasma cells', 'B cells', 'Macrophages'],
    function: 'Antibody production',
    pathology: ['Plasma cell proliferations', 'Plasmacytoma']
  }
];

export function LymphNodeExplorer() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const zone = selectedZone ? architectureZones.find(z => z.id === selectedZone) : null;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/interactives">
        <Button variant="ghost" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Interactive Tools
        </Button>
      </Link>

      <div className="mb-8">
        <Badge className="mb-4">Lymphoma Tool</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Lymph Node Architecture Explorer</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Explore normal lymph node zones and their pathologic correlates
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Select Anatomic Zone</CardTitle>
            <CardDescription>Click to explore each compartment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {architectureZones.map((z) => (
              <button
                key={z.id}
                onClick={() => setSelectedZone(z.id)}
                className={`w-full rounded-lg border p-3 text-left transition-colors ${
                  selectedZone === z.id
                    ? 'border-primary bg-primary/10'
                    : 'hover:bg-accent'
                }`}
              >
                <div className="font-semibold">{z.name}</div>
                <div className="text-sm text-muted-foreground">{z.description}</div>
              </button>
            ))}
          </CardContent>
        </Card>

        {zone && (
          <Card>
            <CardHeader>
              <CardTitle>{zone.name}</CardTitle>
              <CardDescription>{zone.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold text-primary">Cell Types</h3>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {zone.cellTypes.map((cell, idx) => (
                    <li key={idx}>{cell}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-primary">Function</h3>
                <p className="text-sm text-muted-foreground">{zone.function}</p>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-primary">Associated Pathology</h3>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {zone.pathology.map((path, idx) => (
                    <li key={idx}>{path}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}

        {!zone && (
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Select a zone to explore</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Click on any anatomic zone in the left panel to learn about its normal
                architecture, cell populations, function, and associated pathologic conditions.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Reactive vs Neoplastic Architecture</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <div className="mb-1 font-medium text-green-600">Reactive (Benign)</div>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                <li>Preserved overall architecture</li>
                <li>Intact germinal centers with mantle zones</li>
                <li>Polyclonal B-cell population</li>
                <li>Mixed cell populations</li>
                <li>Preserved sinuses</li>
              </ul>
            </div>

            <div>
              <div className="mb-1 font-medium text-orange-600">Neoplastic (Lymphoma)</div>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                <li>Effaced architecture</li>
                <li>Loss of normal zonation</li>
                <li>Monoclonal population (κ or λ restriction)</li>
                <li>Monomorphic cell population</li>
                <li>Sinuses obliterated by tumor</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pattern Recognition</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <div className="mb-1 font-medium">Follicular Pattern</div>
              <p className="text-muted-foreground">
                Think: Reactive follicular hyperplasia vs Follicular lymphoma (BCL2+ follicles)
              </p>
            </div>

            <div>
              <div className="mb-1 font-medium">Diffuse Pattern</div>
              <p className="text-muted-foreground">
                Think: DLBCL, Burkitt, some MCL, PTCL
              </p>
            </div>

            <div>
              <div className="mb-1 font-medium">Paracortical Expansion</div>
              <p className="text-muted-foreground">
                Think: Viral infections (EBV, CMV), T-cell lymphoma, dermatopathic lymphadenopathy
              </p>
            </div>

            <div>
              <div className="mb-1 font-medium">Sinus Expansion</div>
              <p className="text-muted-foreground">
                Think: Sinus histiocytosis, metastatic carcinoma, Rosai-Dorfman
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Clinical Pearls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <div>
            • Architecture assessment is critical - preserved architecture favors reactive, effaced architecture suggests lymphoma
          </div>
          <div>
            • Germinal centers in reactive nodes show tingible body macrophages ("starry sky"), mixed centroblasts/centrocytes, and distinct mantle zones
          </div>
          <div>
            • BCL2 is normally negative in germinal centers - BCL2+ follicles are abnormal and suggest follicular lymphoma
          </div>
          <div>
            • T-cell zones (paracortex) normally expand with viral infections - look for immunoblasts and mixed cell populations
          </div>
          <div>
            • Sinuses are a common site for metastatic carcinoma - always examine carefully
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
