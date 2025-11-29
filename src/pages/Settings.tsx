import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useThemeStore } from '@/store/themeStore';
import { ChevronLeft, Moon, Sun } from 'lucide-react';

export function Settings() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/">
        <Button variant="ghost" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Settings</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Customize your experience
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Customize the app theme</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Theme</p>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark mode
                </p>
              </div>
              <Button onClick={toggleTheme} variant="outline" size="lg">
                {theme === 'dark' ? (
                  <>
                    <Sun className="mr-2 h-5 w-5" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="mr-2 h-5 w-5" />
                    Dark Mode
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>About Hematopath Master</CardTitle>
            <CardDescription>Application information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold">Mission</h3>
              <p className="text-sm text-muted-foreground">
                Hematopath Master is a comprehensive educational platform designed for pathology
                residents, hematopathology fellows, and clinicians learning diagnostic hematopathology.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Features</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Comprehensive modules covering bone marrow, flow cytometry, molecular genetics, and more</li>
                <li>Integrated case studies with morphology, immunophenotype, and molecular data</li>
                <li>Interactive learning tools for pattern recognition</li>
                <li>Assessment questions across all topics</li>
                <li>Mobile-first, offline-capable design</li>
                <li>Dark mode optimized for low-light environments</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Content Coverage</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Bone marrow morphology and cellularity</li>
                <li>Acute leukemias (AML, ALL)</li>
                <li>Myeloproliferative neoplasms and myelodysplastic syndromes</li>
                <li>Lymphomas (Hodgkin and non-Hodgkin)</li>
                <li>Plasma cell neoplasms</li>
                <li>Flow cytometry principles and interpretation</li>
                <li>Cytogenetics and molecular diagnostics</li>
                <li>Integrated diagnostic reasoning</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Version</h3>
              <p className="text-sm text-muted-foreground">1.0.0</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Disclaimers</CardTitle>
            <CardDescription>Important information - Please read carefully</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-md bg-destructive/10 p-4">
              <h3 className="mb-2 font-semibold text-destructive">Educational Use Only</h3>
              <p className="text-sm text-destructive/90">
                This application is designed exclusively for educational purposes. It is NOT intended
                for clinical diagnosis, patient care, or treatment decisions.
              </p>
            </div>

            <div className="rounded-md bg-destructive/10 p-4">
              <h3 className="mb-2 font-semibold text-destructive">Not for Patient Care</h3>
              <p className="text-sm text-destructive/90">
                All cases, data, and examples presented in this application are synthetic or
                de-identified for educational purposes. Do not use this application for actual
                patient diagnosis or management.
              </p>
            </div>

            <div className="rounded-md bg-destructive/10 p-4">
              <h3 className="mb-2 font-semibold text-destructive">No Medical Advice</h3>
              <p className="text-sm text-destructive/90">
                This application does not provide medical advice. Always consult qualified healthcare
                professionals and use validated clinical resources for patient care decisions.
              </p>
            </div>

            <div className="rounded-md bg-destructive/10 p-4">
              <h3 className="mb-2 font-semibold text-destructive">No Warranties</h3>
              <p className="text-sm text-destructive/90">
                The content is provided "as is" without warranties of any kind. While we strive for
                accuracy, the authors and contributors are not liable for errors or omissions.
              </p>
            </div>

            <div className="rounded-md bg-muted p-4">
              <h3 className="mb-2 font-semibold">References</h3>
              <p className="text-sm text-muted-foreground">
                Content is based on WHO/ICC classifications, established hematopathology principles,
                and educational best practices. Users should consult primary literature and official
                guidelines for authoritative information.
              </p>
            </div>

            <div className="rounded-md bg-muted p-4">
              <h3 className="mb-2 font-semibold">Data Privacy</h3>
              <p className="text-sm text-muted-foreground">
                This application does not collect, store, or transmit any user data or personal
                information. All assessments are session-only with no persistent tracking. Theme
                preference is stored locally on your device only.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
