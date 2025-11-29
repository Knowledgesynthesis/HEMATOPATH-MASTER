import { useParams, Link } from 'react-router-dom';
import { modules } from '@/data/modules';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { Badge } from '@/components/ui/Badge';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ModulePage() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const module = modules.find((m) => m.id === moduleId);

  if (!module) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Module not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary hover:underline">
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/">
        <Button variant="ghost" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>

      <div className="mb-8">
        <div className={`mb-4 text-6xl bg-gradient-to-r ${module.color} bg-clip-text text-transparent`}>
          {module.icon}
        </div>
        <h1 className="text-4xl font-bold tracking-tight">{module.title}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{module.description}</p>
      </div>

      {module.sections.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center">
            <p className="text-muted-foreground">
              This module is accessible through other routes. Please navigate using the home page.
            </p>
          </CardContent>
        </Card>
      ) : (
        <Tabs defaultValue={module.sections[0]?.id || 'overview'}>
          <TabsList className="mb-4 flex flex-wrap">
            {module.sections.map((section) => (
              <TabsTrigger key={section.id} value={section.id}>
                {section.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {module.sections.map((section) => (
            <TabsContent key={section.id} value={section.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.content}</CardDescription>
                </CardHeader>
                <CardContent>
                  {section.subsections && section.subsections.length > 0 ? (
                    <div className="space-y-6">
                      {section.subsections.map((subsection) => (
                        <div key={subsection.id} className="rounded-lg border p-4">
                          <h3 className="mb-2 text-xl font-semibold">{subsection.title}</h3>
                          <p className="mb-4 text-muted-foreground">{subsection.content}</p>

                          {subsection.keyPoints && subsection.keyPoints.length > 0 && (
                            <div className="mb-4">
                              <Badge className="mb-2">Key Points</Badge>
                              <ul className="list-inside list-disc space-y-1 text-sm">
                                {subsection.keyPoints.map((point, idx) => (
                                  <li key={idx}>{point}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {subsection.clinicalPearls && subsection.clinicalPearls.length > 0 && (
                            <div>
                              <Badge variant="secondary" className="mb-2">
                                Clinical Pearls
                              </Badge>
                              <ul className="list-inside list-disc space-y-1 text-sm">
                                {subsection.clinicalPearls.map((pearl, idx) => (
                                  <li key={idx} className="text-primary">
                                    {pearl}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No subsections available.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
}
