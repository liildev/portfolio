'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-background'>
      <motion.div
        className='absolute size-48 rounded-full bg-gradient-to-l from-foreground/15 to-foreground/25 blur-xl'
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Logo SVG */}
      <svg
        viewBox='88 54.2 225 292.1'
        fill='none'
        role='img'
        aria-labelledby='logo-title'
        xmlns='http://www.w3.org/2000/svg'
        className='relative size-32'
      >
        <title id='logo-title'>Loading...</title>
        {/* Left part of "L" */}
        <motion.path
          d='M163.022 266.375L96.9187 303.179C92.9194 305.406 88 302.514 88 297.937V95.3114C88 93.1351 89.1784 91.1295 91.0794 90.0702L154.07 54.9699C158.069 52.7416 162.99 55.6323 162.991 60.2102L163.022 266.375Z'
          className='fill-foreground'
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            fillOpacity: [0, 0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.35, 0.65, 1],
          }}
          stroke='currentColor'
          strokeWidth={2}
        />
        {/* Right part of "L" */}
        <motion.path
          d='M309.767 162.308C311.753 163.34 313 165.393 313 167.632V271.292C313 273.565 311.716 275.642 309.684 276.658L171.706 345.658C167.716 347.653 163.022 344.752 163.022 340.291V266.375L234.928 226.355C236.831 225.296 238.011 223.289 238.01 221.111L237.981 134.884C237.98 130.381 242.753 127.482 246.748 129.558L309.767 162.308Z'
          className='fill-foreground'
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            fillOpacity: [0, 0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.35, 0.65, 1],
            delay: 0.3,
          }}
          stroke='currentColor'
          strokeWidth={2}
        />
      </svg>
    </div>
  );
}
