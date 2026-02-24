import { useState } from 'react';
import { BookOpen, Home, HelpCircle, Menu, ChevronRight, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import HomePage from '@/pages/HomePage';
import LecturesPage from '@/pages/LecturesPage';
import LectureDetailPage from '@/pages/LectureDetailPage';
import Quiz2Page from '@/pages/Quiz2Page';
import { lectures } from '@/data/lectures';

type View = 'home' | 'lectures' | 'lecture-detail' | 'quiz2';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedLectureId, setSelectedLectureId] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (view: View, lectureId?: number) => {
    setCurrentView(view);
    if (lectureId) {
      setSelectedLectureId(lectureId);
    }
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const selectedLecture = selectedLectureId ? lectures.find(l => l.id === selectedLectureId) : null;

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'lectures':
        return <LecturesPage onNavigate={navigateTo} />;
      case 'lecture-detail':
        return selectedLecture ? <LectureDetailPage lecture={selectedLecture} onNavigate={navigateTo} /> : null;
      case 'quiz2':
        return <Quiz2Page onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  const NavLinks = () => (
    <>
      <Button
        variant={currentView === 'home' ? 'default' : 'ghost'}
        className="w-full justify-start gap-2"
        onClick={() => navigateTo('home')}
      >
        <Home className="h-4 w-4" />
        Home
      </Button>
      <Button
        variant={currentView === 'lectures' || currentView === 'lecture-detail' ? 'default' : 'ghost'}
        className="w-full justify-start gap-2"
        onClick={() => navigateTo('lectures')}
      >
        <BookOpen className="h-4 w-4" />
        Lectures
        <Badge variant="secondary" className="ml-auto text-xs">10</Badge>
      </Button>
      <Button
        variant={currentView === 'quiz2' ? 'default' : 'ghost'}
        className="w-full justify-start gap-2"
        onClick={() => navigateTo('quiz2')}
      >
        <HelpCircle className="h-4 w-4" />
        Quiz 2
        <Badge variant="secondary" className="ml-auto text-xs">25 Qs</Badge>
      </Button>
    </>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
        <div className="flex h-14 items-center px-4">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0">
              <div className="flex h-14 items-center border-b px-4">
                <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                <span className="font-semibold">SOC 101</span>
              </div>
              <ScrollArea className="h-[calc(100vh-3.5rem)]">
                <div className="p-4 space-y-2">
                  <NavLinks />
                  <Separator className="my-4" />
                  <div className="text-xs text-muted-foreground px-2">
                    <p className="font-medium mb-2">Quick Access</p>
                    {lectures.slice(6, 10).map(lecture => (
                      <button
                        key={lecture.id}
                        onClick={() => navigateTo('lecture-detail', lecture.id)}
                        className="flex items-center gap-2 py-1.5 text-left hover:text-primary transition-colors w-full"
                      >
                        <ChevronRight className="h-3 w-3" />
                        <span className="truncate">L{lecture.id}: {lecture.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="font-semibold">SOC 101</span>
          </div>
        </div>
      </header>

      {/* Desktop Layout */}
      <div className="flex-1 flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex w-64 flex-col border-r bg-muted/10">
          <div className="flex h-14 items-center border-b px-4">
            <GraduationCap className="h-5 w-5 mr-2 text-primary" />
            <span className="font-semibold">SOC 101</span>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-2">
              <NavLinks />
              <Separator className="my-4" />
              <div className="text-xs text-muted-foreground">
                <p className="font-medium mb-2 px-2">Quiz 2 Topics (Lectures 7-10)</p>
                {lectures.slice(6, 10).map(lecture => (
                  <button
                    key={lecture.id}
                    onClick={() => navigateTo('lecture-detail', lecture.id)}
                    className="flex items-center gap-2 py-1.5 px-2 text-left hover:text-primary hover:bg-muted rounded-md transition-colors w-full"
                  >
                    <ChevronRight className="h-3 w-3" />
                    <span className="truncate">L{lecture.id}: {lecture.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </ScrollArea>
          <div className="border-t p-4 text-xs text-muted-foreground">
            <p>North South University</p>
            <p>Department of Political Science and Sociology</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto max-w-4xl p-4 lg:p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
