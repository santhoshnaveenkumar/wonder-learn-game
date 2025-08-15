import { Card, CardContent } from "@/components/ui/card";
import { CluesDisplay } from "./CluesDisplay";
import { cn } from "@/lib/utils";

interface QuizCardProps {
  image?: string;
  question: string;
  answer?: string;
  clues?: string[];
  showAnswer: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const QuizCard = ({ 
  image, 
  question, 
  answer, 
  clues,
  showAnswer, 
  className,
  children 
}: QuizCardProps) => {
  return (
    <Card className={cn(
      "overflow-hidden bg-gradient-to-br from-card to-muted/30 border-2 border-border/50",
      "shadow-lg hover:shadow-xl transition-all duration-300",
      "animate-bounce-in",
      className
    )}>
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          {/* Question */}
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {question}
          </h2>
          
          {/* Image (only show for logo and flag questions) */}
          {image && (
            <div className="relative mx-auto w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={image} 
                alt="Quiz question" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          
          {/* Clues for person identification */}
          {clues && (
            <CluesDisplay clues={clues} className="max-w-lg mx-auto" />
          )}
          
          {/* Answer reveal */}
          {showAnswer && answer && (
            <div className="animate-slide-up">
              <div className="bg-gradient-success text-success-foreground rounded-2xl p-6 font-bold text-xl shadow-celebration">
                <p className="mb-2">🎉 Answer:</p>
                <p className="text-2xl animate-celebration">{answer}</p>
              </div>
            </div>
          )}
          
          {children}
        </div>
      </CardContent>
    </Card>
  );
};