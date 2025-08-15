import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ProgressTrackerProps {
  current: number;
  total: number;
  className?: string;
}

export const ProgressTracker = ({ current, total, className }: ProgressTrackerProps) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-muted-foreground">
          Progress
        </span>
        <span className="text-sm font-bold text-primary">
          {current} / {total}
        </span>
      </div>
      
      <Progress 
        value={percentage} 
        className="h-2"
      />
      
      <div className="text-center">
        <span className="text-xs text-muted-foreground">
          {Math.round(percentage)}% Complete
        </span>
      </div>
    </div>
  );
};