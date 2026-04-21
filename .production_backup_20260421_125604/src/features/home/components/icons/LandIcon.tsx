'use client';
import { motion } from 'framer-motion';

export function LandIcon() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.1 }}
      className="drop-shadow-2xl"
    >
      {/* Rotating outer ring */}
      <motion.circle
        cx="50" cy="50" r="44"
        fill="none"
        stroke="url(#landGrad)"
        strokeWidth="1.5"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      {/* Earth/globe */}
      <motion.circle
        cx="50" cy="50" r="30"
        fill="none"
        stroke="url(#landGrad)"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      {/* Latitude lines */}
      <motion.ellipse cx="50" cy="50" rx="30" ry="10" fill="none" stroke="#E8B960" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
      <motion.ellipse cx="50" cy="50" rx="10" ry="30" fill="none" stroke="#FF9933" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8 }} />
      {/* Compass rose */}
      <motion.g initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 1.2, type: "spring" }}>
        <line x1="50" y1="25" x2="50" y2="75" stroke="#C10000" strokeWidth="2" />
        <line x1="25" y1="50" x2="75" y2="50" stroke="#C10000" strokeWidth="2" />
        <polygon points="50,20 54,46 46,46" fill="#FF9933" />
        <polygon points="50,80 46,54 54,54" fill="#E8B960" />
        <polygon points="20,50 46,46 46,54" fill="#C10000" />
        <polygon points="80,50 54,46 54,54" fill="#E8B960" />
      </motion.g>
      {/* Sacred center */}
      <motion.circle cx="50" cy="50" r="5" fill="#FF9933" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }} />
      <motion.text x="50" y="54" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>ॐ</motion.text>
      <defs>
        <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8B960" />
          <stop offset="50%" stopColor="#C10000" />
          <stop offset="100%" stopColor="#FF9933" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
