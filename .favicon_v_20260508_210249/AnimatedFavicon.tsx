'use client';

import { useEffect } from 'react';

const FAVICON_SIZE = 32;
const FRAME_COUNT = 48;
const SPEED = 100; // ms per frame

function renderFrame(t: number, size: number): string {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  const s = size;
  // Deep cosmic background
  const bgGrad = ctx.createRadialGradient(s/2, s/2, 0, s/2, s/2, s*0.7);
  bgGrad.addColorStop(0, '#1a0f2e');
  bgGrad.addColorStop(1, '#020408');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, s, s);

  // Golden ring
  ctx.strokeStyle = 'rgba(212,175,55,0.5)';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.arc(s/2, s/2, s*0.46, 0, Math.PI*2);
  ctx.stroke();

  // Pulsing glow
  const glowPulse = 0.6 + 0.4 * Math.sin(t * Math.PI * 3);
  const glowGrad = ctx.createRadialGradient(s/2, s/2, s*0.02, s/2, s/2, s*0.3);
  glowGrad.addColorStop(0, `rgba(212,175,55,${glowPulse*0.7})`);
  glowGrad.addColorStop(1, 'rgba(212,175,55,0)');
  ctx.fillStyle = glowGrad;
  ctx.beginPath();
  ctx.arc(s/2, s/2, s*0.3, 0, Math.PI*2);
  ctx.fill();

  // Save, translate, rotate for the "V"
  ctx.save();
  ctx.translate(s/2, s/2);
  const rotation = t * Math.PI * 2;
  ctx.rotate(rotation);

  // Text gradient – luxury gold
  const textGrad = ctx.createLinearGradient(-8, -6, 8, 6);
  textGrad.addColorStop(0, '#d4af37');
  textGrad.addColorStop(0.4, '#fef0c8');
  textGrad.addColorStop(0.7, '#d4af37');
  textGrad.addColorStop(1, '#aa7c1e');

  ctx.font = 'bold 14px "Times New Roman", "Georgia", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  // Drop shadow
  ctx.shadowColor = '#000';
  ctx.shadowBlur = 3;
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;
  ctx.fillStyle = textGrad;
  ctx.fillText('V', 0, -2);  // slightly above center for visual balance
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // Light ghost for glow
  ctx.fillStyle = 'rgba(255,245,200,0.3)';
  ctx.fillText('V', -0.3, -2.3);
  ctx.fillStyle = textGrad;
  ctx.fillText('V', 0, -2);

  // Shine sweep (horizontal clip)
  const shineOffset = (t * 40) - 10;
  ctx.save();
  ctx.beginPath();
  ctx.rect(shineOffset - 6, -14, 14, 28);
  ctx.clip();
  const shineGrad = ctx.createLinearGradient(shineOffset-6, 0, shineOffset+14, 0);
  shineGrad.addColorStop(0, 'rgba(255,255,255,0)');
  shineGrad.addColorStop(0.4, 'rgba(255,255,255,0.85)');
  shineGrad.addColorStop(0.6, 'rgba(255,255,255,0.85)');
  shineGrad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = shineGrad;
  ctx.fillText('V', 0, -2);
  ctx.restore();

  // little diamond sparkle
  const sparkAlpha = 0.5 + 0.5 * Math.abs(Math.sin(t * Math.PI * 5));
  ctx.fillStyle = `rgba(255,255,255,${sparkAlpha})`;
  ctx.beginPath();
  ctx.moveTo(0, -10);
  ctx.lineTo(1.5, -12);
  ctx.lineTo(0, -14);
  ctx.lineTo(-1.5, -12);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = `rgba(255,240,200,${sparkAlpha*1.3})`;
  ctx.beginPath();
  ctx.arc(0, -12, 0.6, 0, Math.PI*2);
  ctx.fill();

  ctx.restore();

  // Particles
  for (let p = 0; p < 2; p++) {
    const angle = (t * Math.PI*2) + (p * 2.4);
    const rad = s*0.28 + p*1.2;
    const px = s/2 + Math.cos(angle)*rad;
    const py = s/2 + Math.sin(angle)*rad;
    const alpha = 0.3 + 0.3 * Math.abs(Math.sin(angle*3));
    ctx.fillStyle = `rgba(255,215,0,${alpha})`;
    ctx.beginPath();
    ctx.arc(px, py, 0.5, 0, Math.PI*2);
    ctx.fill();
  }

  return canvas.toDataURL('image/png');
}

function generateFrames(): string[] {
  const frames: string[] = [];
  for (let i = 0; i < FRAME_COUNT; i++) {
    frames.push(renderFrame(i / FRAME_COUNT, FAVICON_SIZE));
  }
  return frames;
}

export default function AnimatedFavicon() {
  useEffect(() => {
    const frames = generateFrames();
    let frameIdx = 0;
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || (() => {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      document.head.appendChild(newLink);
      return newLink;
    })();

    // Remove any previous static favicon
    const existing = document.querySelector("link[rel='icon']");
    if (existing) existing.remove();

    const update = () => {
      link.href = frames[frameIdx];
      frameIdx = (frameIdx + 1) % frames.length;
    };
    update();
    const interval = setInterval(update, SPEED);

    return () => clearInterval(interval);
  }, []);

  return null;
}
