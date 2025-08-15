import { cn } from "@/lib/utils";

interface CluesDisplayProps {
  clues: string[];
  className?: string;
}

export const CluesDisplay = ({ clues, className }: CluesDisplayProps) => {
  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="text-xl font-semibold text-primary mb-4">🔍 Clues:</h3>
      <div className="space-y-3">
        {clues.map((clue, index) => (
          <div 
            key={index}
            className="bg-muted/50 rounded-xl p-4 border-l-4 border-primary animate-slide-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </span>
              <p className="text-foreground font-medium leading-relaxed">
                {clue}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};