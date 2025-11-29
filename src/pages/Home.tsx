import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { modules } from '@/data/modules';

export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Hematopath Master
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Morphology → Immunophenotype → Genetics → Diagnosis
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Comprehensive hematopathology education for pathology residents and fellows
        </p>
      </div>

      <div className="mb-8 rounded-lg border bg-card p-6">
        <h2 className="mb-2 text-xl font-semibold">Welcome</h2>
        <p className="text-muted-foreground">
          Master hematopathology from bone marrow morphology to integrated diagnosis.
          This platform covers the full spectrum: morphology, flow cytometry, molecular genetics,
          WHO/ICC classifications, and diagnostic reasoning.
        </p>
        <div className="mt-4 rounded-md bg-destructive/10 p-4 text-sm">
          <p className="font-semibold text-destructive">Educational Use Only</p>
          <p className="text-destructive/90">
            Not for clinical diagnosis or patient care. All cases are synthetic.
          </p>
        </div>
      </div>

      <h2 className="mb-6 text-2xl font-bold">Learning Modules</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.filter(m => !['cases', 'interactives'].includes(m.id)).map((module) => (
          <Link key={module.id} to={module.route}>
            <Card className="h-full transition-all hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className={`mb-2 text-4xl bg-gradient-to-r ${module.color} bg-clip-text text-transparent`}>
                  {module.icon}
                </div>
                <CardTitle className="text-xl">{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  {module.sections.length} sections
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <Link to="/cases">
          <Card className="h-full transition-all hover:shadow-lg hover:scale-105">
            <CardHeader>
              <div className="mb-2 text-4xl bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                📋
              </div>
              <CardTitle>Case Studies</CardTitle>
              <CardDescription>
                Practice with integrated case vignettes combining morphology, flow, and molecular data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Test your diagnostic skills
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/interactives">
          <Card className="h-full transition-all hover:shadow-lg hover:scale-105">
            <CardHeader>
              <div className="mb-2 text-4xl bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                🛠️
              </div>
              <CardTitle>Interactive Tools</CardTitle>
              <CardDescription>
                Hands-on pattern recognition tools for flow cytometry, morphology, and cytogenetics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Interactive learning exercises
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/assessment">
          <Card className="h-full transition-all hover:shadow-lg hover:scale-105">
            <CardHeader>
              <div className="mb-2 text-4xl">✅</div>
              <CardTitle>Assessment</CardTitle>
              <CardDescription>
                Test your knowledge with comprehensive questions across all topics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Session-only scoring
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/settings">
          <Card className="h-full transition-all hover:shadow-lg hover:scale-105">
            <CardHeader>
              <div className="mb-2 text-4xl">⚙️</div>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Customize your experience and view app information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Theme, about, disclaimers
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
