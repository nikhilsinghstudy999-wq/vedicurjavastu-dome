'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionLoaderProps {
  isLoading: boolean;
  minimumDisplayTime?: number;
  onComplete?: () => void;
}

export default function PageTransitionLoader({
  isLoading,
  minimumDisplayTime = 2700,
  onComplete,
}: PageTransitionLoaderProps) {
  const [visible, setVisible] = useState(false);
  const [minTimerDone, setMinTimerDone] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      setMinTimerDone(false);
      // Start the minimum display timer
      const timer = setTimeout(() => {
        setMinTimerDone(true);
        if (onComplete) onComplete();
      }, minimumDisplayTime);
      return () => clearTimeout(timer);
    } else if (minTimerDone) {
      setVisible(false);
    }
  }, [isLoading, minTimerDone, minimumDisplayTime, onComplete]);

  // When loading stops and timer is done, hide after a brief fade
  useEffect(() => {
    if (!isLoading && minTimerDone) {
      const hideTimer = setTimeout(() => setVisible(false), 200);
      return () => clearTimeout(hideTimer);
    }
  }, [isLoading, minTimerDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0015] overflow-hidden"
        >
          {/* Background stars */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 2 + 1 + 'px',
                  height: Math.random() * 2 + 1 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Solar system animation container */}
          <style>{`
            .planets {
              position: relative;
              height: 100px;
              width: 100px;
              display: flex;
            }
            #planetTrail1,
            #planetTrail2,
            #planetTrail3 {
              outline: solid rgb(101, 101, 101) 1px;
              border-radius: 50%;
              position: absolute;
            }
            #planetTrail1::after,
            #planetTrail2::after,
            #planetTrail3::after {
              content: "";
              width: 10px;
              height: 10px;
              position: absolute;
              border-radius: 50%;
              top: -5px;
              left: 50%;
              transform: translateX(-50%);
            }
            #planetTrail1::after { background-color: rgb(213, 213, 120); }
            #planetTrail2::after { background-color: rgb(115, 174, 231); }
            #planetTrail3::after { background-color: rgb(180, 73, 49); }
            #planetTrail1 { width:120px; height:120px; animation:trails1 4s infinite; }
            #planetTrail2 { width:170px; height:170px; animation:trails2 4s infinite; }
            #planetTrail3 { width:220px; height:220px; animation:trails3 4s infinite; }
            @keyframes trails1 {
              0%{transform:rotate(0deg)}40%{transform:rotate(360deg);width:120px;height:120px}50%{width:0;height:0}90%{width:0;height:0}100%{width:120px;height:120px}
            }
            @keyframes trails2 {
              0%{transform:rotate(0deg)}40%{transform:rotate(250deg);width:170px;height:170px}50%{width:0;height:0}90%{width:0;height:0}100%{width:170px;height:170px}
            }
            @keyframes trails3 {
              0%{transform:rotate(0deg)}40%{transform:rotate(170deg);width:220px;height:220px}50%{width:0;height:0}90%{width:0;height:0}100%{width:220px;height:220px}
            }
            #star {
              position:absolute;width:50px;height:50px;background-color:rgb(255,170,0);border-radius:50%;
              top:50%;left:50%;transform:translate(-50%,-50%);animation:bouncingStar 4s infinite;
            }
            #starShadow {
              position:absolute;width:50px;height:20px;background-color:rgb(255,170,0);border-radius:50%;
              top:50%;left:50%;transform:translate(-50%,100%);filter:blur(5px);opacity:0.3;animation:shadowAnimation 4s infinite;
            }
            @keyframes bouncingStar {
              0%{transform:translate(-50%,-50%)}10%{transform:translate(-50%,-30%)}20%{transform:translate(-50%,-50%)}30%{transform:translate(-50%,-30%)}40%{transform:translate(-50%,-50%);width:50px;height:50px}50%{width:0;height:0}90%{width:0;height:0}100%{width:50px;height:50px}
            }
            @keyframes shadowAnimation {
              0%{opacity:0.1}10%{opacity:0.4}20%{opacity:0.1}30%{opacity:0.4}40%{opacity:0.1}50%{opacity:0}90%{opacity:0}100%{opacity:0.1}
            }
            #blackHole {
              position:absolute;width:50px;height:50px;background-color:rgb(0,0,0);outline:orange solid 5px;border-radius:50%;
              top:50%;left:50%;transform:translate(-50%,-50%);animation:bouncingBlackHole 4s infinite;
            }
            @keyframes bouncingBlackHole {
              0%{height:0;width:0}40%{width:0;height:0}50%{width:50px;height:50px}90%{width:50px;height:50px}100%{width:0;height:0}
            }
            #blackHoleDisk1 {
              position:absolute;width:68px;height:68px;clip-path:inset(50% 0 0 0);border:black 10px solid;border-radius:50%;
              top:50%;left:50%;transform:translate(-50%,-50%) rotateX(70deg);animation:diskAn 4s infinite;
            }
            #blackHoleDisk2 {
              position:absolute;width:70px;height:70px;clip-path:inset(0 0 50% 0);border:rgb(245,174,8) 10px solid;border-radius:50%;
              top:50%;left:50%;transform:translate(-50%,-50%) rotateX(55deg);animation:diskAn 4s infinite;
            }
            @keyframes diskAn {
              0%{height:0;width:0;border:orange 0px solid}40%{width:0;height:0;border:orange 0px solid}50%{width:88px;height:88px;border:orange 18px solid}90%{width:88px;height:88px;border:orange 18px solid}100%{width:0;height:0;border:orange 0px solid}
            }
            #planet {
              position:absolute;width:10px;height:10px;background-color:rgb(255,255,255);border-radius:50%;animation:planetAn 4s infinite;
            }
            @keyframes planetAn {
              0%{opacity:0;transform:translate(0,0);z-index:1}50%{opacity:0;transform:translate(0,0);z-index:1}58%{opacity:1}70%{opacity:1;transform:translate(100px,40px);z-index:1}71%{z-index:0}90%{z-index:0;opacity:1;transform:translate(-10px,70px)}100%{transform:translate(-10px,70px);opacity:0}
            }
            @keyframes twinkle { 0%,100%{opacity:0.3} 50%{opacity:1} }
          `}</style>

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Solar system */}
            <div className="scale-[1.8] sm:scale-[2.2] md:scale-[2.5]">
              <div className="planets">
                <div id="planetTrail1"></div>
                <div id="planetTrail2"></div>
                <div id="planetTrail3"></div>
                <div id="planet"></div>
                <div id="star"></div>
                <div id="starShadow"></div>
                <div id="blackHoleDisk2"></div>
                <div id="blackHole"></div>
                <div id="blackHoleDisk1"></div>
              </div>
            </div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-prakash-gold font-serif text-lg sm:text-xl tracking-wider"
            >
              Aligning Your Cosmos…
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
