import { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, HelpCircle, RotateCcw, Trophy, BookOpen, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { quiz2Questions } from '@/data/lectures';

interface Quiz2PageProps {
  onNavigate: (view: 'home' | 'lectures' | 'lecture-detail' | 'quiz2', lectureId?: number) => void;
}

export default function Quiz2Page({ onNavigate }: Quiz2PageProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [correctAnswers, setCorrectAnswers] = useState<Set<number>>(new Set());
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = quiz2Questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quiz2Questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowExplanation(true);
    
    if (!answeredQuestions.has(currentQuestionIndex)) {
      setAnsweredQuestions(prev => new Set(prev).add(currentQuestionIndex));
      
      if (selectedAnswer === currentQuestion.correctAnswer) {
        setScore(prev => prev + 1);
        setCorrectAnswers(prev => new Set(prev).add(currentQuestionIndex));
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz2Questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions(new Set());
    setCorrectAnswers(new Set());
    setQuizCompleted(false);
  };

  const jumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / quiz2Questions.length) * 100);
    
    return (
      <div className="space-y-6">
        <Button 
          variant="ghost" 
          className="gap-2 -ml-2"
          onClick={() => onNavigate('home')}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>

        <Card className="text-center p-8">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Trophy className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Quiz Completed!</h1>
          <p className="text-muted-foreground mb-6">
            You've completed all {quiz2Questions.length} questions
          </p>
          
          <div className="max-w-xs mx-auto mb-6">
            <div className="text-4xl font-bold text-primary mb-2">
              {score}/{quiz2Questions.length}
            </div>
            <Progress value={percentage} className="h-3" />
            <p className="text-sm text-muted-foreground mt-2">{percentage}% Correct</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button onClick={handleRestartQuiz} variant="outline" className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Restart Quiz
            </Button>
            <Button onClick={() => onNavigate('lectures')} className="gap-2">
              <BookOpen className="h-4 w-4" />
              Review Lectures
            </Button>
          </div>
        </Card>

        {/* Question Review */}
        <Card>
          <CardHeader>
            <CardTitle>Question Review</CardTitle>
            <CardDescription>Click on any question to review</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
              {quiz2Questions.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQuizCompleted(false);
                    jumpToQuestion(idx);
                  }}
                  className={`
                    w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-colors
                    ${correctAnswers.has(idx) 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : answeredQuestions.has(idx)
                        ? 'bg-red-100 text-red-700 hover:bg-red-200'
                        : 'bg-muted hover:bg-muted/80'
                    }
                  `}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Button 
          variant="ghost" 
          className="gap-2 -ml-2"
          onClick={() => onNavigate('home')}
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <div className="flex items-center gap-2">
          <Badge variant="outline">Question {currentQuestionIndex + 1}/{quiz2Questions.length}</Badge>
          <Badge variant="secondary">Score: {score}</Badge>
        </div>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-primary" />
          Quiz 2 Practice
        </h1>
        <p className="text-muted-foreground">
          Test your knowledge on Culture & Society and Socialization & Identity
        </p>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
              {currentQuestionIndex + 1}
            </span>
            <CardTitle className="text-lg font-medium leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Options */}
          <div className="space-y-2">
            {currentQuestion.options.map((option, idx) => {
              let buttonClass = 'w-full justify-start text-left p-4 h-auto border-2 transition-all ';
              
              if (showExplanation) {
                if (idx === currentQuestion.correctAnswer) {
                  buttonClass += 'border-green-500 bg-green-50 hover:bg-green-50';
                } else if (idx === selectedAnswer && idx !== currentQuestion.correctAnswer) {
                  buttonClass += 'border-red-500 bg-red-50 hover:bg-red-50';
                } else {
                  buttonClass += 'border-muted opacity-50';
                }
              } else {
                if (selectedAnswer === idx) {
                  buttonClass += 'border-primary bg-primary/5';
                } else {
                  buttonClass += 'border-muted hover:border-primary/50';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswerSelect(idx)}
                  disabled={showExplanation}
                  className={buttonClass}
                >
                  <div className="flex items-center gap-3 w-full">
                    <span className={`
                      flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium
                      ${selectedAnswer === idx && !showExplanation ? 'border-primary bg-primary text-primary-foreground' : ''}
                      ${showExplanation && idx === currentQuestion.correctAnswer ? 'border-green-500 bg-green-500 text-white' : ''}
                      ${showExplanation && idx === selectedAnswer && idx !== currentQuestion.correctAnswer ? 'border-red-500 bg-red-500 text-white' : ''}
                      ${selectedAnswer !== idx && (!showExplanation || (showExplanation && idx !== currentQuestion.correctAnswer && idx !== selectedAnswer)) ? 'border-muted' : ''}
                    `}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showExplanation && idx === currentQuestion.correctAnswer && (
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    )}
                    {showExplanation && idx === selectedAnswer && idx !== currentQuestion.correctAnswer && (
                      <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Submit / Next Button */}
          {!showExplanation ? (
            <Button 
              onClick={handleSubmitAnswer} 
              disabled={selectedAnswer === null}
              className="w-full"
            >
              Submit Answer
            </Button>
          ) : (
            <Button 
              onClick={handleNextQuestion}
              className="w-full"
            >
              {currentQuestionIndex < quiz2Questions.length - 1 ? 'Next Question' : 'See Results'}
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Explanation */}
      {showExplanation && (
        <Alert className={selectedAnswer === currentQuestion.correctAnswer ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'}>
          <AlertCircle className={`h-4 w-4 ${selectedAnswer === currentQuestion.correctAnswer ? 'text-green-600' : 'text-blue-600'}`} />
          <AlertDescription className="mt-2">
            <p className={`font-medium mb-2 ${selectedAnswer === currentQuestion.correctAnswer ? 'text-green-800' : 'text-blue-800'}`}>
              {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Explanation:'}
            </p>
            <p className="text-muted-foreground">
              {currentQuestion.explanation}
            </p>
          </AlertDescription>
        </Alert>
      )}

      {/* Question Navigator */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Jump to Question</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1">
            {quiz2Questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => jumpToQuestion(idx)}
                className={`
                  w-8 h-8 rounded-md flex items-center justify-center text-xs font-medium transition-colors
                  ${idx === currentQuestionIndex 
                    ? 'bg-primary text-primary-foreground' 
                    : correctAnswers.has(idx)
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : answeredQuestions.has(idx)
                        ? 'bg-red-100 text-red-700 hover:bg-red-200'
                        : 'bg-muted hover:bg-muted/80'
                  }
                `}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Topics Covered */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Topics Covered in This Quiz:</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Values</Badge>
          <Badge variant="outline">Norms</Badge>
          <Badge variant="outline">Symbols</Badge>
          <Badge variant="outline">Subcultures</Badge>
          <Badge variant="outline">Cultural Change</Badge>
          <Badge variant="outline">Popular Culture</Badge>
          <Badge variant="outline">Social Media</Badge>
          <Badge variant="outline">Nature vs. Nurture</Badge>
          <Badge variant="outline">Looking-Glass Self</Badge>
          <Badge variant="outline">Agents of Socialization</Badge>
          <Badge variant="outline">Cooley</Badge>
          <Badge variant="outline">Mead</Badge>
          <Badge variant="outline">Goffman</Badge>
        </div>
      </div>
    </div>
  );
}
