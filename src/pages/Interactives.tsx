import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ChevronLeft } from 'lucide-react';

const interactiveTools = [
  {
    id: 'marrow-cellularity',
    name: 'Marrow Cellularity Estimator',
    description: 'Practice estimating bone marrow cellularity based on age-adjusted norms',
    category: 'Morphology'
  },
  {
    id: 'dysplasia-detector',
    name: 'Dysplasia Pattern Recognition',
    description: 'Learn to identify dysplastic features in erythroid, myeloid, and megakaryocytic lineages',
    category: 'Morphology'
  },
  {
    id: 'flow-classifier',
    name: 'Flow Cytometry Pattern Classifier',
    description: 'Practice identifying B-cell, T-cell, and myeloid immunophenotypes',
    category: 'Flow Cytometry'
  },
  {
    id: 'leukemia-logic',
    name: 'Leukemia Logic Pathway',
    description: 'Work through diagnostic algorithms for acute and chronic leukemias',
    category: 'Integration'
  },
  {
    id: 'lymph-node-explorer',
    name: 'Lymph Node Architecture Explorer',
    description: 'Understand normal architecture and patterns of effacement',
    category: 'Lymphomas'
  },
  {
    id: 'cytogenetics-match',
    name: 'Cytogenetic Signature Matcher',
    description: 'Match translocations and cytogenetic findings to disease entities',
    category: 'Cytogenetics'
  },
  {
    id: 'plasma-clonality',
    name: 'Plasma Cell Clonality Checker',
    description: 'Practice interpreting κ/λ light chain ratios and patterns',
    category: 'Plasma Cell'
  },
  {
    id: 'integrated-diagnosis',
    name: 'Integrated Diagnosis Builder',
    description: 'Combine morphology, flow, cytogenetics, and molecular data into final diagnoses',
    category: 'Integration'
  }
];

export function Interactives() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/">
        <Button variant="ghost" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Interactive Tools</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Hands-on learning tools for pattern recognition and diagnostic reasoning
        </p>
        <div className="mt-4 rounded-md bg-muted p-4 text-sm">
          <p className="font-medium">Educational Exercises</p>
          <p className="text-muted-foreground">
            These interactive tools use synthetic data for educational purposes only.
            Not for clinical use.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {interactiveTools.map((tool) => (
          <Card key={tool.id} className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-2">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {tool.category}
                </span>
              </div>
              <CardTitle className="text-xl">{tool.name}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" disabled>
                Launch Tool (Demo)
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 rounded-lg border bg-card p-6">
        <h2 className="mb-2 text-xl font-semibold">About Interactive Tools</h2>
        <p className="text-sm text-muted-foreground">
          Interactive tools provide hands-on practice with:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Pattern recognition for morphology, flow cytometry, and cytogenetics</li>
          <li>Cellularity estimation and dysplasia identification</li>
          <li>Immunophenotype interpretation and clonality assessment</li>
          <li>Integration of multiple data sources for diagnosis</li>
          <li>Diagnostic algorithms and decision trees</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          All tools work offline and use only synthetic educational data.
        </p>
      </div>
    </div>
  );
}
