'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CosmicLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0a0008]/95 backdrop-blur-xl"
        >
          <style>{`
            /* ── COSMIC LOADER – 3D rotating rings + galaxy swirl ── */
            .cosmic-stage {
              position: relative;
              width: 220px;
              height: 220px;
              perspective: 800px;
            }
            /* Outer spinning ring – bloody red */
            .cosmic-ring-outer {
              position: absolute;
              top: 0; left: 0;
              width: 100%; height: 100%;
              border-radius: 50%;
              border: 4px solid transparent;
              border-top-color: #C10000;
              border-right-color: #C10000;
              animation: spin-outer 2.5s linear infinite;
              filter: drop-shadow(0 0 18px #C10000);
            }
            @keyframes spin-outer {
              0% { transform: rotateZ(0deg) rotateX(20deg); }
              100% { transform: rotateZ(360deg) rotateX(20deg); }
            }
            /* Middle ring – orange */
            .cosmic-ring-mid {
              position: absolute;
              top: 12%; left: 12%;
              width: 76%; height: 76%;
              border-radius: 50%;
              border: 3px solid transparent;
              border-bottom-color: #FF8C00;
              border-left-color: #FF8C00;
              animation: spin-mid 3s linear infinite reverse;
              filter: drop-shadow(0 0 15px #FF8C00);
            }
            @keyframes spin-mid {
              0% { transform: rotateZ(0deg) rotateY(30deg); }
              100% { transform: rotateZ(-360deg) rotateY(30deg); }
            }
            /* Inner ring – purple */
            .cosmic-ring-inner {
              position: absolute;
              top: 24%; left: 24%;
              width: 52%; height: 52%;
              border-radius: 50%;
              border: 2px solid transparent;
              border-top-color: #7C3AED;
              border-right-color: #7C3AED;
              animation: spin-inner 2s linear infinite;
              filter: drop-shadow(0 0 12px #7C3AED);
            }
            @keyframes spin-inner {
              0% { transform: rotateZ(0deg) rotateX(-15deg); }
              100% { transform: rotateZ(360deg) rotateX(-15deg); }
            }
            /* Core pulsing orb */
            .cosmic-core {
              position: absolute;
              top: 35%; left: 35%;
              width: 30%; height: 30%;
              border-radius: 50%;
              background: radial-gradient(circle, #fff 0%, #FF8C00 40%, #C10000 80%);
              animation: core-pulse 1.5s ease-in-out infinite;
              filter: drop-shadow(0 0 30px #FF8C00);
            }
            @keyframes core-pulse {
              0%, 100% { transform: scale(1); opacity: 0.9; }
              50% { transform: scale(1.3); opacity: 1; }
            }
            /* Orbiting particles */
            .cosmic-particle {
              position: absolute;
              width: 8px; height: 8px;
              border-radius: 50%;
              animation: orbit 4s linear infinite;
            }
            .cosmic-particle:nth-child(1) {
              background: #C10000;
              top: -4px; left: 50%;
              animation-delay: 0s;
              box-shadow: 0 0 10px #C10000;
            }
            .cosmic-particle:nth-child(2) {
              background: #FF8C00;
              top: 50%; right: -4px;
              animation-delay: -1.3s;
              box-shadow: 0 0 10px #FF8C00;
            }
            .cosmic-particle:nth-child(3) {
              background: #7C3AED;
              bottom: -4px; left: 50%;
              animation-delay: -2.6s;
              box-shadow: 0 0 10px #7C3AED;
            }
            @keyframes orbit {
              0% { transform: rotate(0deg) translateX(110px); }
              100% { transform: rotate(360deg) translateX(110px); }
            }
            /* Loading text */
            .cosmic-text {
              position: absolute;
              bottom: -60px;
              left: 50%;
              transform: translateX(-50%);
              color: #FF8C00;
              font-family: serif;
              font-size: 16px;
              letter-spacing: 0.3em;
              animation: text-glow 2s ease-in-out infinite;
              white-space: nowrap;
            }
            @keyframes text-glow {
              0%, 100% { text-shadow: 0 0 8px #FF8C00, 0 0 16px #C10000; opacity: 0.7; }
              50% { text-shadow: 0 0 20px #FF8C00, 0 0 40px #7C3AED; opacity: 1; }
            }
          `}</style>

          <div className="cosmic-stage">
            <div className="cosmic-ring-outer" />
            <div className="cosmic-ring-mid" />
            <div className="cosmic-ring-inner" />
            <div className="cosmic-core" />
            <div className="cosmic-particle" />
            <div className="cosmic-particle" />
            <div className="cosmic-particle" />
            <div className="cosmic-text">VEDICURJA</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
