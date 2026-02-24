import { BookOpen, HelpCircle, ArrowRight, GraduationCap, Users, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface HomePageProps {
  onNavigate: (view: 'home' | 'lectures' | 'lecture-detail' | 'quiz2', lectureId?: number) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/90 to-primary p-6 md:p-10 text-primary-foreground">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="text-xs font-medium">Spring 2026</Badge>
            <Badge variant="secondary" className="text-xs font-medium">SOC 101</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Introduction to Sociology
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mb-6">
            Discover how society shapes our lives. Learn to see the familiar in a new light 
            through the sociological imagination.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => onNavigate('lectures')}
              className="gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Browse Lectures
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => onNavigate('quiz2')}
              className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <HelpCircle className="h-4 w-4" />
              Take Quiz 2
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </section>

      {/* Course Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          Course Overview
        </h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sociology is a vibrant, intellectually rich social science that challenges us to see 
              the familiar in a new light. It explores social relations, networks, families, groups, 
              and the numerous rules that govern modern societies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This course introduces the <strong>sociological imagination</strong>: the ability to 
              connect personal experiences (like stress, identity, or opportunity) to broader social 
              patterns (like inequality, norms, institutions, and social change).
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <Lightbulb className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Core Concepts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Master key sociological concepts including the sociological imagination, 
                culture, socialization, and social structure.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Major Theorists</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Explore the ideas of Comte, Durkheim, Marx, Weber, and understand 
                functionalism, conflict theory, and symbolic interactionism.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <Target className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Research Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Learn how sociologists collect evidence through surveys, interviews, 
                observation, and ethical research practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quiz 2 Section */}
      <section>
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <CardTitle className="text-xl flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  Quiz 2 Practice
                </CardTitle>
                <CardDescription className="mt-1">
                  Test your knowledge on Lectures 7-10
                </CardDescription>
              </div>
              <Badge variant="default" className="text-xs">25 Questions</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2 md:grid-cols-2">
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5 shrink-0">L7</Badge>
                  <span className="text-sm">Culture & Society - Values, norms, symbols</span>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5 shrink-0">L8</Badge>
                  <span className="text-sm">Subcultures, cultural change, popular culture</span>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5 shrink-0">L9</Badge>
                  <span className="text-sm">Socialization & Identity - Nature vs. nurture</span>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5 shrink-0">L10</Badge>
                  <span className="text-sm">Agents of socialization - Family, school, peers, media</span>
                </div>
              </div>
              <Separator />
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Symbols</Badge>
                <Badge variant="secondary">Values</Badge>
                <Badge variant="secondary">Norms</Badge>
                <Badge variant="secondary">Subcultures</Badge>
                <Badge variant="secondary">Socialization</Badge>
                <Badge variant="secondary">Looking-Glass Self</Badge>
                <Badge variant="secondary">Agents of Socialization</Badge>
              </div>
              <Button onClick={() => onNavigate('quiz2')} className="w-full md:w-auto gap-2">
                <HelpCircle className="h-4 w-4" />
                Start Quiz 2 Practice
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Instructor Info */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Course Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><strong>Course:</strong> SOC 101: Introduction to Sociology</p>
            <p><strong>Institution:</strong> North South University</p>
            <p><strong>Department:</strong> Department of Political Science and Sociology</p>
            <p><strong>Semester:</strong> Spring 2026</p>
            <p><strong>Instructor:</strong> Chowdhury Manarat Mahfuza (CMM)</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
