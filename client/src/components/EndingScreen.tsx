import { useState, useEffect } from "react";
import { RotateCcw, Shield, AlertTriangle, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Ending } from "@/lib/storyData";

interface EndingScreenProps {
  ending: Ending;
  choices: ("A" | "B" | "C" | "D")[]; // Updated to handle 4 choices
  onRestart: () => void;
}

export default function EndingScreen({
  ending,
  choices,
  onRestart,
}: EndingScreenProps) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const getEndingIcon = () => {
    switch (ending.type) {
      case "integrity":
        return <Shield className="w-16 h-16 md:w-20 md:h-20 text-primary" />;
      case "direct":
        return (
          <AlertTriangle className="w-16 h-16 md:w-20 md:h-20 text-destructive" />
        );
      case "indirect":
        return (
          <Scale className="w-16 h-16 md:w-20 md:h-20 text-muted-foreground" />
        );
    }
  };

  const getEndingColor = () => {
    switch (ending.type) {
      case "integrity":
        return "border-primary/20 bg-primary/5";
      case "direct":
        return "border-destructive/20 bg-destructive/5";
      case "indirect":
        return "border-muted/20";
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 md:px-8 py-20 transition-all duration-700 ${
        fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      data-testid="ending-container"
    >
      <div className="w-full max-w-3xl space-y-8">
        <Card className={`p-8 md:p-12 shadow-2xl border-2 ${getEndingColor()}`}>
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="mb-4" data-testid="icon-ending">
              {getEndingIcon()}
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-serif"
              data-testid="text-ending-title"
            >
              {ending.title}
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed text-foreground font-serif max-w-2xl"
              data-testid="text-ending-description"
            >
              {ending.description}
            </p>

            <blockquote
              className="text-xl md:text-2xl italic text-muted-foreground border-l-4 border-primary pl-6 py-4 my-8"
              data-testid="text-ending-quote"
            >
              "{ending.quote}"
            </blockquote>
          </div>
        </Card>

        <Card className="p-6 md:p-8">
          <h3
            className="text-sm uppercase tracking-wide text-muted-foreground mb-4 font-sans text-center"
            data-testid="text-journey-label"
          >
            Your Journey
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {choices.map((choice, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm"
                data-testid={`badge-choice-${index + 1}`}
              >
                Scene {index + 1}: Choice {choice}
              </Badge>
            ))}
          </div>
        </Card>

        <div className="flex justify-center">
          <Button
            onClick={onRestart}
            size="lg"
            className="px-8 py-6 text-lg gap-2 shadow-lg"
            data-testid="button-restart"
          >
            <RotateCcw className="w-5 h-5" />
            Start Your Journey Again
          </Button>
        </div>
      </div>
    </div>
  );
}
