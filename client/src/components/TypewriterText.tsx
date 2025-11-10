import { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export default function TypewriterText({ text, speed = 35, onComplete }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const initialRenderRef = useRef(true);

  useEffect(() => {
    // Clear any existing animation
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Reset the state
    setDisplayedText('');
    setIsComplete(false);

    // Start a new typing animation
    let currentIndex = 0;
    
    const animate = () => {
      intervalRef.current = setInterval(() => {
        currentIndex++;
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setIsComplete(true);
          onComplete?.();
        }
      }, speed);
    };

    // Small delay before starting animation
    const timeout = setTimeout(animate, 100);

    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [text, speed, onComplete]);

  const skipTyping = () => {
    if (!isComplete) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setDisplayedText(text);
      setIsComplete(true);
      onComplete?.();
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <p className="text-lg md:text-xl leading-relaxed text-foreground font-serif whitespace-pre-wrap" data-testid="text-story">
          {displayedText || ' '}
          {!isComplete && <span className="animate-pulse">|</span>}
        </p>
        <button
          onClick={skipTyping}
          className={`absolute -top-8 right-0 text-sm transition-opacity px-2 py-1 ${
            !isComplete 
              ? "text-muted-foreground hover:text-foreground cursor-pointer opacity-60 hover:opacity-100" 
              : "text-muted-foreground/0 cursor-default opacity-0"
          }`}
          data-testid="button-skip"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
