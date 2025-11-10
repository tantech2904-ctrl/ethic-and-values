class SoundManager {
  private audioContext: AudioContext | null = null;
  private initialized = false;

  private initAudioContext() {
    if (!this.initialized && typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.initialized = true;
    }
  }

  private playTone(frequency: number, duration: number, volume: number = 0.3) {
    this.initAudioContext();
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  playDecisionSound() {
    this.playTone(800, 0.1, 0.2);
  }

  playSceneTransition() {
    this.playTone(600, 0.15, 0.15);
    setTimeout(() => this.playTone(700, 0.1, 0.1), 50);
  }

  playEndingSound(endingType: 'direct' | 'indirect' | 'integrity') {
    if (endingType === 'integrity') {
      this.playTone(523, 0.2, 0.25);
      setTimeout(() => this.playTone(659, 0.2, 0.25), 150);
      setTimeout(() => this.playTone(784, 0.3, 0.25), 300);
    } else if (endingType === 'direct') {
      this.playTone(400, 0.15, 0.2);
      setTimeout(() => this.playTone(350, 0.25, 0.2), 100);
    } else {
      this.playTone(500, 0.2, 0.2);
      setTimeout(() => this.playTone(480, 0.2, 0.2), 150);
    }
  }
}

export const soundManager = new SoundManager();
