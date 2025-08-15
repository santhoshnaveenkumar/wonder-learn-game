import { cn } from "@/lib/utils";

interface EncouragementMessageProps {
  messages: string[];
  className?: string;
}

export const EncouragementMessage = ({ messages, className }: EncouragementMessageProps) => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  return (
    <div className={cn(
      "bg-gradient-fun text-fun-foreground rounded-2xl p-4 text-center",
      "animate-bounce-in shadow-lg",
      className
    )}>
      <p className="text-lg font-semibold">✨ {randomMessage} ✨</p>
    </div>
  );
};