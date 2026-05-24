import { useEffect, useState } from 'react';
import { soundManager, type SoundId } from '@/lib/audio/soundManager';

export function useSound() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.6);

  useEffect(() => {
    const unsub = soundManager.subscribe(() => {
      setIsMuted(soundManager.isMutedState());
      setIsPlaying(soundManager.isAmbientPlaying());
      setVolume(soundManager.getVolume());
    });
    return unsub;
  }, []);

  const play = (soundId: SoundId) => soundManager.play(soundId);
  const playSpatial = (soundId: SoundId, x: number, y: number, z?: number) =>
    soundManager.playSpatial(soundId, x, y, z);
  const toggleMute = () => soundManager.toggleMute();
  const toggleAmbient = () => soundManager.toggleAmbient();
  const startAmbient = () => soundManager.startAmbient();

  return { play, playSpatial, toggleMute, toggleAmbient, startAmbient, isMuted, isPlaying, volume };
}
