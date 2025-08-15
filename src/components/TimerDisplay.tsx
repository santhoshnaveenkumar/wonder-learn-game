import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface TimerDisplayProps {
  duration: number; // in seconds
  onTimeUp: () => void;
  isActive: boolean;
  className?: string;
}

export const TimerDisplay = ({ duration, onTimeUp, isActive, className }: TimerDisplayProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isActive) {
      setTimeLeft(duration);
      setProgress(100);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;
        const newProgress = (newTime / duration) * 100;
        setProgress(Math.max(0, newProgress));
        
        if (newTime <= 0) {
          onTimeUp();
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duration, onTimeUp, isActive]);

  const isUrgent = timeLeft <= 3;

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-center space-x-4">
        <div className={cn(
          "text-3xl font-bold px-6 py-3 rounded-2xl transition-all duration-300",
          isUrgent 
            ? "bg-gradient-to-r from-destructive to-warning text-destructive-foreground animate-pulse-glow" 
            : "bg-gradient-primary text-primary-foreground"
        )}>
          {timeLeft}s
        </div>
      </div>
      
      <Progress 
        value={progress} 
        className={cn(
          "h-3 transition-all duration-300",
          isUrgent && "animate-pulse"
        )}
      />
      
      {isUrgent && timeLeft > 0 && (
        <p className="text-center text-warning font-semibold animate-bounce">
          ⏰ Time's almost up!
        </p>
      )}
    </div>
  );
};