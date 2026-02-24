import { ArrowLeft, Clock, Lightbulb, BookOpen, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { Lecture } from '@/data/lectures';

interface LectureDetailPageProps {
  lecture: Lecture;
  onNavigate: (view: 'home' | 'lectures' | 'lecture-detail' | 'quiz2', lectureId?: number) => void;
}

export default function LectureDetailPage({ lecture, onNavigate }: LectureDetailPageProps) {
  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button 
        variant="ghost" 
        className="gap-2 -ml-2"
        onClick={() => onNavigate('lectures')}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Lectures
      </Button>

      {/* Header */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="default">Lecture {lecture.id}</Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {lecture.duration}
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{lecture.title}</h1>
        <p className="text-lg text-muted-foreground">{lecture.subtitle}</p>
      </div>

      {/* Topics */}
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-2 pb-2">
          {lecture.topics.map((topic, idx) => (
            <Badge key={idx} variant="secondary" className="whitespace-nowrap">
              {topic}
            </Badge>
          ))}
        </div>
      </ScrollArea>

      {/* Introduction */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Introduction</h3>
              <p className="text-muted-foreground">{lecture.content.introduction}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sections */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Key Content
        </h2>
        {lecture.content.sections.map((section, idx) => (
          <Card key={idx}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2">
                {section.content.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              {section.examples && section.examples.length > 0 && (
                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium mb-2">Examples:</p>
                  <ul className="space-y-1">
                    {section.examples.map((example, exIdx) => (
                      <li key={exIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary">→</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      {/* Key Concepts */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          Key Concepts
        </h2>
        <div className="flex flex-wrap gap-2">
          {lecture.keyConcepts.map((concept, idx) => (
            <Badge key={idx} variant="outline" className="text-sm py-1 px-3">
              {concept}
            </Badge>
          ))}
        </div>
      </section>

      {/* Summary */}
      <Card className="bg-muted/50">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">Summary</h3>
          <p className="text-muted-foreground">{lecture.summary}</p>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex flex-wrap gap-3 pt-4">
        <Button 
          variant="outline" 
          onClick={() => onNavigate('lectures')}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          All Lectures
        </Button>
        {lecture.id >= 7 && lecture.id <= 10 && (
          <Button 
            onClick={() => onNavigate('quiz2')}
            className="gap-2"
          >
            Practice Quiz 2
          </Button>
        )}
      </div>
    </div>
  );
}
