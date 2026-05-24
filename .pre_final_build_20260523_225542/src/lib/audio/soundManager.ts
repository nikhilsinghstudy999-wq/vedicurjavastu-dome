import { Howl, Howler } from 'howler';

// UI sound IDs
export const SOUND_IDS = [
  'clickPrimary',
  'clickSecondary',
  'hoverSlide',
  'hoverCard',
  'cardExpand',
] as const;
export type SoundId = typeof SOUND_IDS[number];

// UI click sound (shared)
const uiClickSound = new Howl({
  src: ['/audio/ui-click.webm'],
  preload: true,
  volume: 0.4,
});

// Ambient background track
const ambientSound = new Howl({
  src: ['/audio/vastu-ui-sounds.webm'],
  loop: true,
  preload: true,
  volume: 0.3,
});

// Map all UI sound IDs to the same click sound
const sounds: Record<SoundId, Howl> = {
  clickPrimary: uiClickSound,
  clickSecondary: uiClickSound,
  hoverSlide: uiClickSound,
  hoverCard: uiClickSound,
  cardExpand: uiClickSound,
};

let muted = false;
let ambientPlaying = false;
const listeners: Array<() => void> = [];

export const soundManager = {
  play: (id: SoundId) => {
    if (muted) return;
    sounds[id]?.play();
  },
  
  playSpatial: (id: SoundId, x: number, y: number, z: number = 0) => {
    if (muted) return;
    const sound = sounds[id];
    if (sound) {
      sound.stereo(x * 2 - 1);
      sound.play();
    }
  },
  
  // Global click handler – call this from anywhere
  playUIClick: () => {
    if (muted) return;
    uiClickSound.play();
  },
  
  toggleMute: () => {
    muted = !muted;
    Howler.mute(muted);
    listeners.forEach(cb => cb());
  },
  
  startAmbient: () => {
    if (muted) return;
    ambientSound.play();
    ambientPlaying = true;
    listeners.forEach(cb => cb());
  },
  
  stopAmbient: () => {
    ambientSound.pause();
    ambientPlaying = false;
    listeners.forEach(cb => cb());
  },
  
  toggleAmbient: () => {
    if (ambientPlaying) {
      soundManager.stopAmbient();
    } else {
      soundManager.startAmbient();
    }
  },
  
  isMutedState: () => muted,
  isAmbientPlaying: () => ambientPlaying,
  getVolume: () => Howler.volume(),
  
  subscribe: (cb: () => void) => {
    listeners.push(cb);
    return () => {
      const idx = listeners.indexOf(cb);
      if (idx > -1) listeners.splice(idx, 1);
    };
  },
};
