'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AtomicLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Force minimum 3.5 seconds display
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0a0000]/95 backdrop-blur-xl"
        >
          <div className="loader">
            <div className="nucleus" />
            <div className="ring" />
            <div className="ring" />
            <div className="ring" />
            <div className="ring" />
            <div className="ring" />
            <div className="ring" />
          </div>

          <style>{`
            .loader {
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              animation: pulse 2s infinite ease-in-out;
            }

            .ring {
              position: absolute;
              width: 190px;
              height: 190px;
              border: px solid transparent;
              border-radius: 50%;
              --color: #FF4500;
              border-bottom: 8px solid var(--color);
              animation: rotate1 1s ease-in-out infinite;
              box-shadow: 0 0 4px #8e8e8e;
            }

            @keyframes rotate1 {
              from {
                transform: rotateX(50deg) rotateZ(110deg);
              }
              to {
                transform: rotateX(50deg) rotateZ(470deg);
              }
            }

            .ring:nth-child(2) {
              --color: #C10000;
              animation-name: rotate2;
            }

            @keyframes rotate2 {
              from {
                transform: rotateX(20deg) rotateY(50deg) rotateZ(20deg);
              }
              to {
                transform: rotateX(20deg) rotateY(50deg) rotateZ(380deg);
              }
            }

            .ring:nth-child(3) {
              --color: #FF8C00;
              animation-name: rotate3;
            }

            @keyframes rotate3 {
              from {
                transform: rotateX(40deg) rotateY(130deg) rotateZ(450deg);
              }
              to {
                transform: rotateX(40deg) rotateY(130deg) rotateZ(90deg);
              }
            }

            .ring:nth-child(4) {
              --color: #C10000;
              animation-name: rotate4;
              width: 380px;
              height: 380px;
              border: 2px solid transparent;
              border-bottom: 16px solid var(--color);
            }

            @keyframes rotate4 {
              from {
                transform: rotateX(50deg) rotateZ(470deg);
              }
              to {
                transform: rotateX(50deg) rotateZ(110deg);
              }
            }

            .ring:nth-child(5) {
              --color: #FF4500;
              animation-name: rotate5;
              width: 380px;
              height: 380px;
              border: 2px solid transparent;
              border-bottom: 16px solid var(--color);
            }

            @keyframes rotate5 {
              from {
                transform: rotateX(20deg) rotateY(50deg) rotateZ(380deg);
              }
              to {
                transform: rotateX(20deg) rotateY(50deg) rotateZ(20deg);
              }
            }

            .ring:nth-child(6) {
              --color: #FFD700;
              animation-name: rotate6;
              width: 380px;
              height: 380px;
              border: 2px solid transparent;
              border-bottom: 16px solid var(--color);
            }

            @keyframes rotate6 {
              from {
                transform: rotateX(40deg) rotateY(130deg) rotateZ(90deg);
              }
              to {
                transform: rotateX(40deg) rotateY(130deg) rotateZ(450deg);
              }
            }

            @keyframes pulse {
              0%, 100% {
                transform: translate(-50%, -50%) scale(1);
                box-shadow:
                  0 0 20px #C10000,
                  0 0 40px #FF4500;
              }
              50% {
                transform: translate(-50%, -50%) scale(1.2);
                box-shadow:
                  0 0 30px #C10000,
                  0 0 60px #FF4500;
              }
            }

            .nucleus {
              width: 20px;
              height: 20px;
              background: radial-gradient(circle, #C10000, #FF4500);
              border-radius: 50%;
              box-shadow:
                0px 0 20px #C10000,
                0 0 40px #FF4500;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              animation: pulse 1s ease-in-out infinite;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
