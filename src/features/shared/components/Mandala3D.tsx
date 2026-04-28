'use client';
import { useEffect, useState } from 'react';

export default function Mandala3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <style>{`
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes float-mandala {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; filter: drop-shadow(0 0 15px rgba(232,185,96,0.5)); }
          50% { opacity: 1; filter: drop-shadow(0 0 30px rgba(255,153,51,0.9)); }
        }
        .mandala-container {
          position: relative;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 0 25px rgba(232,185,96,0.3));
        }
        .mandala-svg {
          width: 100%;
          height: 100%;
          animation: rotate-slow 35s linear infinite;
        }
        .mandala-inner {
          animation: rotate-reverse 25s linear infinite;
          transform-origin: center;
        }
        .mandala-core {
          animation: float-mandala 5s ease-in-out infinite;
          transform-origin: center;
        }
        .mandala-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .depth-line {
          stroke: url(#goldGradient);
          stroke-width: 2;
          filter: drop-shadow(0 0 4px rgba(232,185,96,0.6));
        }
        .depth-line-thick {
          stroke: url(#goldGradient);
          stroke-width: 3;
          filter: drop-shadow(0 0 6px rgba(232,185,96,0.7));
        }
      `}</style>

      <div className="mandala-container">
        <svg viewBox="0 0 400 400" className="mandala-svg" xmlns="http://www.w3.org/2000/svg">
          {/* Outer square – thick, deep */}
          <rect x="30" y="30" width="340" height="340" fill="none" className="depth-line-thick" />
          <rect x="70" y="70" width="260" height="260" fill="none" className="depth-line" />
          <rect x="110" y="110" width="180" height="180" fill="none" className="depth-line" />

          {/* Concentric circles – multiple layers for depth */}
          <circle cx="200" cy="200" r="155" fill="none" className="depth-line" opacity="0.8" />
          <circle cx="200" cy="200" r="140" fill="none" className="depth-line-thick" opacity="0.9" />
          <circle cx="200" cy="200" r="125" fill="none" className="depth-line" opacity="0.7" />
          <circle cx="200" cy="200" r="110" fill="none" className="depth-line mandala-inner" opacity="0.6" />
          <circle cx="200" cy="200" r="85" fill="none" className="depth-line-thick" opacity="0.8" />
          <circle cx="200" cy="200" r="65" fill="none" className="depth-line" opacity="0.5" />

          {/* Grid lines – thick and visible */}
          <g stroke="url(#goldGradient)" strokeWidth="1.2" opacity="0.5" filter="url(#drop-shadow)">
            {[1,2,3,4,5,6,7].map(i => (
              <g key={i}>
                <line x1={30 + i*42.5} y1="30" x2={30 + i*42.5} y2="370" />
                <line x1="30" y1={30 + i*42.5} x2="370" y2={30 + i*42.5} />
              </g>
            ))}
          </g>

          {/* Diagonal lines */}
          <line x1="30" y1="30" x2="370" y2="370" className="depth-line" opacity="0.6" />
          <line x1="370" y1="30" x2="30" y2="370" className="depth-line" opacity="0.6" />

          {/* Lotus petals – 3D effect */}
          <g className="mandala-inner" opacity="0.8">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
              <ellipse
                key={i}
                cx={200 + 100 * Math.cos((angle * Math.PI) / 180)}
                cy={200 + 100 * Math.sin((angle * Math.PI) / 180)}
                rx="10" ry="30"
                fill="none"
                className="depth-line"
                transform={`rotate(${angle}, ${200 + 100 * Math.cos((angle * Math.PI) / 180)}, ${200 + 100 * Math.sin((angle * Math.PI) / 180)})`}
              />
            ))}
          </g>

          {/* Inner decorative ring */}
          <circle cx="200" cy="200" r="45" fill="none" className="depth-line-thick" opacity="0.9" />
          <circle cx="200" cy="200" r="35" fill="none" className="depth-line" opacity="0.6" />

          {/* Central Om with glow */}
          <g className="mandala-core">
            <circle cx="200" cy="200" r="35" fill="url(#coreGlow)" opacity="0.4" className="mandala-glow" />
            <circle cx="200" cy="200" r="25" fill="url(#coreGlow)" opacity="0.6" className="mandala-glow" />
            <text x="200" y="218" textAnchor="middle" fontSize="48" fontWeight="bold" fill="url(#goldGradient)" fontFamily="serif" filter="drop-shadow(0 0 10px #FF9933)">ॐ</text>
          </g>

          {/* Drop shadow filter */}
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8B960" />
              <stop offset="30%" stopColor="#C88A5D" />
              <stop offset="60%" stopColor="#FF9933" />
              <stop offset="100%" stopColor="#E8B960" />
            </linearGradient>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF9933" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FF9933" stopOpacity="0" />
            </radialGradient>
            <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#E8B960" floodOpacity="0.5"/>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
