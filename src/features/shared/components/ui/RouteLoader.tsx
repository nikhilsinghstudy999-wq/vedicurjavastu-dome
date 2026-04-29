'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const LOADER_ROUTES = ['/services', '/free-tools'];
const DURATION = 2500; // 2.5 seconds

export default function RouteLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (LOADER_ROUTES.includes(pathname)) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), DURATION);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0a0000]/95 backdrop-blur-xl"
        >
          <div className="relative w-[280px] h-[280px] flex items-center justify-center">
            <div id="planetTrail1" className="absolute outline outline-1 outline-[#656565] rounded-full" />
            <div id="planetTrail2" className="absolute outline outline-1 outline-[#656565] rounded-full" />
            <div id="planetTrail3" className="absolute outline outline-1 outline-[#656565] rounded-full" />
            <div className="planets relative w-[100px] h-[100px] flex items-center justify-center">
              <div id="planet" className="absolute w-[10px] h-[10px] bg-white rounded-full" />
              <div id="star" className="absolute w-[50px] h-[50px] bg-[#FFAA00] rounded-full" />
              <div id="starShadow" className="absolute w-[50px] h-[20px] bg-[#FFAA00] rounded-full filter blur-[5px] opacity-30" />
              <div id="blackHoleDisk2" className="absolute w-[70px] h-[70px] rounded-full" />
              <div id="blackHole" className="absolute w-[50px] h-[50px] bg-black rounded-full outline outline-4 outline-[#FFAA00]" />
              <div id="blackHoleDisk1" className="absolute w-[68px] h-[68px] rounded-full" />
            </div>
          </div>
          <div className="absolute bottom-20 text-center">
            <span className="font-serif text-xl sm:text-2xl font-bold bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">
              VedicVastuUrja
            </span>
          </div>
          <style>{`
            .planets{position:relative;height:100px;width:100px;display:flex}
            #planetTrail1,#planetTrail2,#planetTrail3{outline:solid rgb(101,101,101) 1px;border-radius:50%;position:absolute}
            #planetTrail1::after,#planetTrail2::after,#planetTrail3::after{content:"";width:10px;height:10px;position:absolute;border-radius:50%;top:-5px;left:50%;transform:translateX(-50%)}
            #planetTrail1::after{background-color:rgb(213,213,120)}#planetTrail2::after{background-color:rgb(115,174,231)}#planetTrail3::after{background-color:rgb(180,73,49)}
            #planetTrail1{width:120px;height:120px;animation:trails1 4s infinite}#planetTrail2{width:170px;height:170px;animation:trails2 4s infinite}#planetTrail3{width:220px;height:220px;animation:trails3 4s infinite}
            @keyframes trails1{0%{transform:rotate(0deg)}40%{transform:rotate(360deg);width:120px;height:120px}50%{width:0;height:0}90%{width:0;height:0}100%{width:120px;height:120px}}
            @keyframes trails2{0%{transform:rotate(0deg)}40%{transform:rotate(250deg);width:170px;height:170px}50%{width:0;height:0}90%{width:0;height:0}100%{width:170px;height:170px}}
            @keyframes trails3{0%{transform:rotate(0deg)}40%{transform:rotate(170deg);width:220px;height:220px}50%{width:0;height:0}90%{width:0;height:0}100%{width:220px;height:220px}}
            #star{position:absolute;width:50px;height:50px;background-color:rgb(255,170,0);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);animation:bouncingStar 4s infinite}
            #starShadow{position:absolute;width:50px;height:20px;background-color:rgb(255,170,0);border-radius:50%;top:50%;left:50%;transform:translate(-50%,100%);filter:blur(5px);opacity:.3;animation:shadowAnimation 4s infinite}
            @keyframes bouncingStar{0%{transform:translate(-50%,-50%)}10%{transform:translate(-50%,-30%)}20%{transform:translate(-50%,-50%)}30%{transform:translate(-50%,-30%)}40%{transform:translate(-50%,-50%);width:50px;height:50px}50%{width:0;height:0}90%{width:0;height:0}100%{width:50px;height:50px}}
            @keyframes shadowAnimation{0%{opacity:.1}10%{opacity:.4}20%{opacity:.1}30%{opacity:.4}40%{opacity:.1}50%{opacity:0}90%{opacity:0}100%{opacity:.1}}
            #blackHole{position:absolute;width:50px;height:50px;background-color:rgb(0,0,0);outline:orange solid 5px;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);animation:bouncingBlackHole 4s infinite}
            @keyframes bouncingBlackHole{0%{height:0;width:0}40%{width:0;height:0}50%{width:50px;height:50px}90%{width:50px;height:50px}100%{width:0;height:0}}
            #blackHoleDisk1{position:absolute;width:68px;height:68px;clip-path:inset(50% 0 0 0);border:black 10px solid;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%) rotateX(70deg);animation:diskAn 4s infinite}
            #blackHoleDisk2{position:absolute;width:70px;height:70px;clip-path:inset(0 0 50% 0);border:rgb(245,174,8) 10px solid;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%) rotateX(55deg);animation:diskAn 4s infinite}
            @keyframes diskAn{0%{height:0;width:0;border:orange 0px solid}40%{width:0;height:0;border:orange 0px solid}50%{width:88px;height:88px;border:orange 18px solid}90%{width:88px;height:88px;border:orange 18px solid}100%{width:0;height:0;border:orange 0px solid}}
            #planet{position:absolute;width:10px;height:10px;background-color:rgb(255,255,255);border-radius:50%;animation:planetAn 4s infinite}
            @keyframes planetAn{0%{opacity:0;transform:translate(0px,0px);z-index:1}50%{opacity:0;transform:translate(0px,0px);z-index:1}58%{opacity:1}70%{opacity:1;transform:translate(100px,40px);z-index:1}71%{z-index:0}90%{z-index:0;opacity:1;transform:translate(-10px,70px)}100%{transform:translate(-10px,70px);opacity:0}}
            @media (max-width:640px){.planets{transform:scale(.55)}}
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
