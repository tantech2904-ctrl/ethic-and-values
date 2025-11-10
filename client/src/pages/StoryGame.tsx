import { useState, useEffect } from 'react';
import ProgressBar from '@/components/ProgressBar';
import SceneDisplay from '@/components/SceneDisplay';
import EndingScreen from '@/components/EndingScreen';
import { scenes, determineEnding } from '@/lib/storyData';
import { soundManager } from '@/lib/soundEffects';

export default function StoryGame() {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [choices, setChoices] = useState<('A' | 'B')[]>([]);
  const [gameState, setGameState] = useState<'playing' | 'ended'>('playing');
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Clear any existing game state first
    localStorage.removeItem('integrity-choices');
    localStorage.removeItem('integrity-scene');
    
    const savedChoices = localStorage.getItem('integrity-choices');
    const savedScene = localStorage.getItem('integrity-scene');
    
    if (savedChoices && savedScene) {
      try {
        const parsedChoices = JSON.parse(savedChoices);
        const parsedScene = parseInt(savedScene);
        
        // Only restore if valid
        if (Array.isArray(parsedChoices) && !isNaN(parsedScene) && parsedScene >= 0) {
          setChoices(parsedChoices);
          setCurrentSceneIndex(parsedScene);
        }
      } catch (e) {
        // If there's any error, start fresh
        localStorage.removeItem('integrity-choices');
        localStorage.removeItem('integrity-scene');
      }
    }
  }, []);

  const handleChoice = (choice: 'A' | 'B') => {
    soundManager.playDecisionSound();
    
    const newChoices = [...choices, choice];
    setChoices(newChoices);
    
    localStorage.setItem('integrity-choices', JSON.stringify(newChoices));
    
    setFadeOut(true);
    
    setTimeout(() => {
      soundManager.playSceneTransition();
      
      if (currentSceneIndex < scenes.length - 1) {
        setCurrentSceneIndex(currentSceneIndex + 1);
        localStorage.setItem('integrity-scene', String(currentSceneIndex + 1));
      } else {
        const ending = determineEnding(newChoices);
        soundManager.playEndingSound(ending.type);
        setGameState('ended');
        localStorage.removeItem('integrity-choices');
        localStorage.removeItem('integrity-scene');
      }
      
      setFadeOut(false);
    }, 400);
  };

  const handleRestart = () => {
    soundManager.playSceneTransition();
    setChoices([]);
    setCurrentSceneIndex(0);
    setGameState('playing');
    localStorage.removeItem('integrity-choices');
    localStorage.removeItem('integrity-scene');
  };

  if (gameState === 'ended') {
    const ending = determineEnding(choices);
    return (
      <>
        <ProgressBar currentScene={scenes.length} totalScenes={scenes.length} />
        <EndingScreen ending={ending} choices={choices} onRestart={handleRestart} />
      </>
    );
  }

  return (
    <div className={`transition-opacity duration-300 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <ProgressBar currentScene={currentSceneIndex + 1} totalScenes={scenes.length} />
      <SceneDisplay 
        scene={scenes[currentSceneIndex]}
        onChoice={handleChoice}
      />
    </div>
  );
}
