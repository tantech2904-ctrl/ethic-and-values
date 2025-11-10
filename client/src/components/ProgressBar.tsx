interface ProgressBarProps {
  currentScene: number;
  totalScenes: number;
}

export default function ProgressBar({ currentScene, totalScenes }: ProgressBarProps) {
  const progress = (currentScene / totalScenes) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-sm shadow-md" data-testid="progress-container">
      <div className="h-2 bg-muted">
        <div
          className="h-full bg-primary transition-all duration-400 ease-out"
          style={{ width: `${progress}%` }}
          data-testid="progress-bar"
        />
      </div>
      <div className="px-6 py-2 flex justify-between items-center">
        <span className="text-xs uppercase tracking-wide text-muted-foreground font-sans" data-testid="text-progress">
          Scene {currentScene} of {totalScenes}
        </span>
        <div className="flex gap-2">
          {Array.from({ length: totalScenes }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i < currentScene ? 'bg-primary' : 'bg-muted'
              }`}
              data-testid={`progress-dot-${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
