import { Clock, ChevronRight, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { lectures } from '@/data/lectures';

interface LecturesPageProps {
  onNavigate: (view: 'home' | 'lectures' | 'lecture-detail' | 'quiz2', lectureId?: number) => void;
}

export default function LecturesPage({ onNavigate }: LecturesPageProps) {
  const quiz2Lectures = lectures.filter(l => l.id >= 7 && l.id <= 10);
  const otherLectures = lectures.filter(l => l.id < 7);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Course Lectures</h1>
        <p className="text-muted-foreground">
          Browse all 10 lectures from SOC 101. Click on any lecture to view detailed content.
        </p>
      </div>

      {/* Quiz 2 Lectures - Highlighted */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Badge className="bg-primary text-primary-foreground">Quiz 2 Topics</Badge>
          <span className="text-sm text-muted-foreground">Lectures 7-10</span>
        </div>
        <div className="grid gap-4">
          {quiz2Lectures.map((lecture) => (
            <Card 
              key={lecture.id} 
              className="cursor-pointer hover:border-primary transition-colors group"
              onClick={() => onNavigate('lecture-detail', lecture.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">Lecture {lecture.id}</Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {lecture.duration}
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {lecture.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {lecture.subtitle}
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ScrollArea className="w-full whitespace-nowrap">
                  <div className="flex gap-2 pb-2">
                    {lecture.topics.map((topic, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs whitespace-nowrap">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Lectures */}
      <section>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-muted-foreground" />
          Previous Lectures
        </h2>
        <div className="grid gap-3">
          {otherLectures.map((lecture) => (
            <Card 
              key={lecture.id} 
              className="cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => onNavigate('lecture-detail', lecture.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="shrink-0">L{lecture.id}</Badge>
                    <div>
                      <h3 className="font-medium">{lecture.title}</h3>
                      <p className="text-sm text-muted-foreground">{lecture.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Study Tip */}
      <Card className="bg-muted/50 border-dashed">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Study Tip:</strong> Focus on the key concepts listed in each lecture. 
            Use the Quiz 2 section to test your understanding of Lectures 7-10 topics.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
