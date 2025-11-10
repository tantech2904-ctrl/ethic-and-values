import { useState } from 'react';
import TypewriterText from './TypewriterText';
import ChoiceButton from './ChoiceButton';
import type { Scene } from '@/lib/storyData';
import { Card } from '@/components/ui/card';

interface SceneDisplayProps {
  scene: Scene;
  onChoice: (choice: 'A' | 'B') => void;
}

export default function SceneDisplay({ scene, onChoice }: SceneDisplayProps) {
  const [typingComplete, setTypingComplete] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  return (
    <div 
      className={`min-h-screen flex flex-col justify-between px-6 md:px-8 py-20 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
      data-testid="scene-container"
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-3xl">
          <Card className="p-8 md:p-12 shadow-xl">
            <div className="space-y-8">
              <div>
                <div className="text-sm uppercase tracking-wide text-muted-foreground mb-2 font-sans" data-testid="text-scene-number">
                  Scene {scene.id}
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 font-serif" data-testid="text-scene-title">
                  {scene.title}
                </h2>
              </div>
              
              <TypewriterText 
                text={scene.content}
                onComplete={() => setTypingComplete(true)}
              />
            </div>
          </Card>
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto mt-12">
        <div 
          className={`grid gap-4 md:grid-cols-2 md:gap-6 transition-opacity duration-300 ${
            typingComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {scene.choices.map((choice) => (
            <ChoiceButton
              key={choice.value}
              text={choice.text}
              value={choice.value}
              onClick={() => onChoice(choice.value)}
              disabled={!typingComplete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
