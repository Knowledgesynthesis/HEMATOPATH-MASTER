import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { assessmentQuestions } from '@/data/assessments';
import { ChevronLeft } from 'lucide-react';

export function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const question = assessmentQuestions[currentQuestion];

  const handleSelectAnswer = (answer: string) => {
    if (!showResults) {
      setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: answer });
    }
  };

  const handleNext = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    assessmentQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const percentage = Math.round((score / assessmentQuestions.length) * 100);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/">
        <Button variant="ghost" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Assessment</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Test your knowledge across all hematopathology topics
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Session-only scoring - no data is saved
        </p>
      </div>

      {showResults ? (
        <Card>
          <CardHeader>
            <CardTitle>Assessment Results</CardTitle>
            <CardDescription>Your session score</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6 text-center">
              <div className="mb-2 text-6xl font-bold text-primary">{percentage}%</div>
              <div className="text-xl text-muted-foreground">
                {score} out of {assessmentQuestions.length} correct
              </div>
            </div>

            <div className="space-y-4">
              {assessmentQuestions.map((q, idx) => {
                const isCorrect = selectedAnswers[idx] === q.correct;
                return (
                  <div key={q.id} className="rounded-lg border p-4">
                    <div className="mb-2 flex items-start justify-between">
                      <Badge variant={isCorrect ? 'default' : 'destructive'}>
                        Question {idx + 1}
                      </Badge>
                      <Badge variant="outline">{q.category}</Badge>
                    </div>
                    <p className="mb-2 font-medium">{q.question}</p>
                    <div className="space-y-1 text-sm">
                      <div
                        className={
                          selectedAnswers[idx]
                            ? isCorrect
                              ? 'text-green-600'
                              : 'text-red-600'
                            : 'text-muted-foreground'
                        }
                      >
                        Your answer: {selectedAnswers[idx] || 'Not answered'}
                      </div>
                      {!isCorrect && (
                        <div className="text-green-600">Correct answer: {q.correct}</div>
                      )}
                    </div>
                    <div className="mt-2 rounded-md bg-muted p-3 text-sm">
                      <span className="font-medium">Rationale:</span> {q.rationale}
                    </div>
                  </div>
                );
              })}
            </div>

            <Button onClick={handleReset} className="mt-6 w-full">
              Retake Assessment
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="mb-4 flex items-center justify-between">
            <Badge variant="outline">
              Question {currentQuestion + 1} of {assessmentQuestions.length}
            </Badge>
            <Badge>{question.category}</Badge>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Question {currentQuestion + 1}</CardTitle>
              <CardDescription>{question.question}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectAnswer(option)}
                    className={`w-full rounded-lg border p-3 text-left transition-colors ${
                      selectedAnswers[currentQuestion] === option
                        ? 'border-primary bg-primary/10'
                        : 'hover:bg-accent'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex gap-2">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="flex-1"
                >
                  Previous
                </Button>
                {currentQuestion === assessmentQuestions.length - 1 ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={Object.keys(selectedAnswers).length === 0}
                    className="flex-1"
                  >
                    Submit Assessment
                  </Button>
                ) : (
                  <Button onClick={handleNext} className="flex-1">
                    Next
                  </Button>
                )}
              </div>

              <div className="mt-4 text-center text-sm text-muted-foreground">
                Answered: {Object.keys(selectedAnswers).length} / {assessmentQuestions.length}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
