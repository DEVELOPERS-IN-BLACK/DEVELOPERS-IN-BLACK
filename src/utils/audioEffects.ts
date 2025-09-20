// Audio effects for the Developers in Black website

export class AudioManager {
  private static hasUserInteracted = false;

  static enableAudio() {
    this.hasUserInteracted = true;
    (window as any).hasUserInteracted = true;
  }

  static canPlayAudio(): boolean {
    return this.hasUserInteracted;
  }

  // Startup "set" sound
  static playStartupSound() {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator1 = audioContext.createOscillator();
      const oscillator2 = audioContext.createOscillator();
      const oscillator3 = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator1.connect(gainNode);
      oscillator2.connect(gainNode);
      oscillator3.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Triple harmony for "set" sound
      oscillator1.frequency.setValueAtTime(220, audioContext.currentTime);
      oscillator2.frequency.setValueAtTime(440, audioContext.currentTime);
      oscillator3.frequency.setValueAtTime(880, audioContext.currentTime);
      
      oscillator1.type = 'sawtooth';
      oscillator2.type = 'sawtooth';
      oscillator3.type = 'sawtooth';
      
      gainNode.gain.setValueAtTime(0.03, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
      
      oscillator1.start(audioContext.currentTime);
      oscillator2.start(audioContext.currentTime);
      oscillator3.start(audioContext.currentTime);
      oscillator1.stop(audioContext.currentTime + 0.3);
      oscillator2.stop(audioContext.currentTime + 0.3);
      oscillator3.stop(audioContext.currentTime + 0.3);
    } catch (e) {
      // Silent fail
    }
  }

  // Electric glitch sound
  static playElectricGlitch() {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      const filterNode = audioContext.createBiquadFilter();
      
      oscillator.connect(filterNode);
      filterNode.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(120, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(1800, audioContext.currentTime + 0.15);
      
      filterNode.type = 'highpass';
      filterNode.frequency.setValueAtTime(100, audioContext.currentTime);
      
      gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.15);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.15);
    } catch (e) {
      // Silent fail
    }
  }

  // Boom explosion sound
  static playBoomSound() {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

      // Oscillator chính tạo boom trầm
      const oscBoom = audioContext.createOscillator();
      const gainBoom = audioContext.createGain();
      oscBoom.connect(gainBoom);
      gainBoom.connect(audioContext.destination);

      oscBoom.type = 'sine';
      oscBoom.frequency.setValueAtTime(150, audioContext.currentTime);
      oscBoom.frequency.exponentialRampToValueAtTime(30, audioContext.currentTime + 0.6);

      gainBoom.gain.setValueAtTime(0.15, audioContext.currentTime);
      gainBoom.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.6);

      // Thêm tiếng crack/nổ nhanh
      const oscCrack = audioContext.createOscillator();
      const gainCrack = audioContext.createGain();
      oscCrack.connect(gainCrack);
      gainCrack.connect(audioContext.destination);

      oscCrack.type = 'triangle';
      oscCrack.frequency.setValueAtTime(1200, audioContext.currentTime);
      oscCrack.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.1);

      gainCrack.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainCrack.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);

      oscBoom.start(audioContext.currentTime);
      oscCrack.start(audioContext.currentTime);

      oscBoom.stop(audioContext.currentTime + 0.6);
      oscCrack.stop(audioContext.currentTime + 0.1);
    } catch (e) {
      // Silent fail
    }
  }

  // Clock tick sound
  static playTickSound() {
    try {
      if (!this.canPlayAudio()) return;

      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(1400, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.04);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.04);
    } catch (e) {
      // Silent fail
    }
  }

  // Start random ambient sounds
  static startAmbientSounds() {
    const playRandomAmbientSound = () => {
      const randomDelay = Math.random() * 165000 + 15000; // 15s - 3 minutes
      setTimeout(() => {
        if (!this.canPlayAudio()) {
          playRandomAmbientSound();
          return;
        }
        
        // Weighted random choice
        const randomChoice = Math.random();
        if (randomChoice > 0.90) {
          this.playBoomSound(); // 10% chance
        } else if (randomChoice > 0.45) {
          this.playStartupSound(); // 45% chance  
        } else {
          this.playElectricGlitch(); // 45% chance
        }
        playRandomAmbientSound();
      }, randomDelay);
    };

    playRandomAmbientSound();
  }
}