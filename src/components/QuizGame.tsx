import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { QuizCard } from "./QuizCard";
import { TimerDisplay } from "./TimerDisplay";
import { ProgressTracker } from "./ProgressTracker";
import { EncouragementMessage } from "./EncouragementMessage";
import { sampleQuestions, encouragementMessages } from "@/data/questions";
import { cn } from "@/lib/utils";

export const QuizGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timerActive, setTimerActive] = useState(true);
  const [showEncouragement, setShowEncouragement] = useState(false);

  const currentQuestion = sampleQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === sampleQuestions.length - 1;

  const handleTimeUp = useCallback(() => {
    setShowAnswer(true);
    setTimerActive(false);
    setShowEncouragement(true);
  }, []);

  const handleNextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowAnswer(false);
      setTimerActive(true);
      setShowEncouragement(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setShowAnswer(false);
    setTimerActive(true);
    setShowEncouragement(false);
  };

  return (
    <div className="min-h-screen bg-gradient-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            🌟 Kids Learning Quiz 🌟
          </h1>
          <p className="text-lg text-muted-foreground">
            Learn about leaders, flags, logos, and famous people!
          </p>
        </div>

        {/* Progress */}
        <ProgressTracker 
          current={currentQuestionIndex + 1} 
          total={sampleQuestions.length}
          className="max-w-md mx-auto"
        />

        {/* Timer */}
        {!showAnswer && (
          <TimerDisplay
            duration={10}
            onTimeUp={handleTimeUp}
            isActive={timerActive}
            className="max-w-md mx-auto"
          />
        )}

        {/* Question Card */}
        <QuizCard
          image={currentQuestion.image}
          question={currentQuestion.question}
          answer={currentQuestion.answer}
          showAnswer={showAnswer}
          className="max-w-2xl mx-auto"
        >
          {/* Category Badge */}
          <div className="mt-4">
            <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
              {currentQuestion.category}
            </span>
          </div>
        </QuizCard>

        {/* Encouragement Message */}
        {showEncouragement && (
          <EncouragementMessage 
            messages={encouragementMessages}
            className="max-w-md mx-auto"
          />
        )}

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          {showAnswer && !isLastQuestion && (
            <Button
              onClick={handleNextQuestion}
              size="lg"
              className={cn(
                "px-8 py-4 text-lg font-semibold rounded-2xl",
                "bg-gradient-primary hover:bg-gradient-to-r hover:from-primary-glow hover:to-primary",
                "transform hover:scale-105 transition-all duration-300 shadow-fun"
              )}
            >
              Next Question 🚀
            </Button>
          )}
          
          {showAnswer && isLastQuestion && (
            <Button
              onClick={handleRestart}
              size="lg"
              className={cn(
                "px-8 py-4 text-lg font-semibold rounded-2xl",
                "bg-gradient-success hover:bg-gradient-to-r hover:from-success hover:to-accent",
                "transform hover:scale-105 transition-all duration-300 shadow-celebration"
              )}
            >
              Play Again! 🎉
            </Button>
          )}
        </div>

        {/* Completion Message */}
        {showAnswer && isLastQuestion && (
          <div className="text-center space-y-4 animate-bounce-in">
            <h2 className="text-3xl font-bold text-success">
              🎊 Congratulations! 🎊
            </h2>
            <p className="text-lg text-muted-foreground">
              You've completed all {sampleQuestions.length} questions! 
              Great job learning about leaders, flags, logos, and famous people!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};