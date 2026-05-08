'use client';

import { useEffect } from 'react';

const FAV_SIZE = 32;
const FRAMES = 36;   // smooth rotation
const SPEED = 80;    // ms per frame

// Generate a single frame (canvas -> dataURL)
function makeFrame(t: number): string {
  const canvas = document.createElement('canvas');
  canvas.width = FAV_SIZE;
  canvas.height = FAV_SIZE;
  const ctx = canvas.getContext('2d')!;
  const s = FAV_SIZE;

  // Deep space background
  const bg = ctx.createRadialGradient(s/2, s/2, 0, s/2, s/2, s*0.7);
  bg.addColorStop(0, '#1a0f2e');
  bg.addColorStop(1, '#020408');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, s, s);

  // Golden ring
  ctx.strokeStyle = 'rgba(212,175,55,0.5)';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.arc(s/2, s/2, s*0.46, 0, Math.PI*2);
  ctx.stroke();

  // Glow behind the letter
  const glowIntensity = 0.6 + 0.4 * Math.sin(t * Math.PI * 3);
  const glow = ctx.createRadialGradient(s/2, s/2, s*0.02, s/2, s/2, s*0.3);
  glow.addColorStop(0, `rgba(212,175,55,${glowIntensity*0.7})`);
  glow.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(s/2, s/2, s*0.3, 0, Math.PI*2);
  ctx.fill();

  // Rotate and draw the 'V'
  ctx.save();
  ctx.translate(s/2, s/2);
  ctx.rotate(t * Math.PI * 2);

  // Luxury gold gradient for the letter
  const textGrad = ctx.createLinearGradient(-8, -6, 8, 6);
  textGrad.addColorStop(0, '#d4af37');
  textGrad.addColorStop(0.4, '#fef0c8');
  textGrad.addColorStop(0.7, '#d4af37');
  textGrad.addColorStop(1, '#aa7c1e');

  ctx.font = 'bold 14px "Times New Roman", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Heavy shadow for depth
  ctx.shadowColor = '#000';
  ctx.shadowBlur = 3;
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;

  // Draw the V slightly above centre for visual balance
  ctx.fillStyle = textGrad;
  ctx.fillText('V', 0, -2);

  // Light ghost overlay for extra glow
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.fillStyle = 'rgba(255,245,200,0.25)';
  ctx.fillText('V', -0.3, -2.3);
  ctx.fillStyle = textGrad;
  ctx.fillText('V', 0, -2);

  // Shine sweep
  const shineX = (t * 40) - 10;
  ctx.save();
  ctx.beginPath();
  ctx.rect(shineX - 6, -14, 14, 28);
  ctx.clip();
  const shineGrad = ctx.createLinearGradient(shineX-6, 0, shineX+14, 0);
  shineGrad.addColorStop(0, 'rgba(255,255,255,0)');
  shineGrad.addColorStop(0.4, 'rgba(255,255,255,0.85)');
  shineGrad.addColorStop(0.6, 'rgba(255,255,255,0.85)');
  shineGrad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = shineGrad;
  ctx.fillText('V', 0, -2);
  ctx.restore();

  // Diamond sparkle
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

  ctx.restore(); // back to non-rotated

  // tiny floating particles
  for (let i = 0; i < 2; i++) {
    const angle = (t * Math.PI*2) + (i * 2.4);
    const rad = s*0.28 + i*1.2;
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

export default function AnimatedFavicon() {
  useEffect(() => {
    // Pre-render all frames
    const frames: string[] = [];
    for (let i = 0; i < FRAMES; i++) {
      frames.push(makeFrame(i / FRAMES));
    }

    // Grab or create the link element
    let link = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }

    let idx = 0;
    const update = () => {
      link!.href = frames[idx];
      idx = (idx + 1) % frames.length;
    };
    update();
    const interval = setInterval(update, SPEED);
    return () => clearInterval(interval);
  }, []);

  return null;
}
