'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

import { Icon } from '../icon';

import { TECH_LOGOS } from './constants';
import { shuffle } from './utils';

export const TechStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [logos, setLogos] = useState<string[]>(TECH_LOGOS);

  useEffect(() => {
    setLogos(shuffle(TECH_LOGOS));
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TECH_LOGOS.length);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const getLogoPosition = (index: number) => {
    return (index - activeIndex + logos.length) % logos.length;
  };

  return (
    <ul className='relative mx-auto size-20 sm:size-[88px]'>
      {logos.map((logo, index) => {
        const position = getLogoPosition(index);

        const isVisible = position < 3;

        if (!isVisible) return null;

        const zIndex = -position;
        const scale = position === 0 ? 1 : position === 1 ? 0.82 : 0.64;
        const translateY = position === 0 ? 0 : position === 1 ? -8 : -16;

        return (
          <motion.li
            key={logo}
            animate={{
              scale,
              y: translateY,
            }}
            className='absolute inset-0 overflow-hidden rounded-3xl'
            style={{
              zIndex,
              transformOrigin: 'center top',
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className='relative size-full'>
              {position === 0 ? (
                <Icon className='size-full' icon={logo} />
              ) : (
                <div
                  className={cn(
                    'size-full',
                    position === 1 ? 'bg-gray-300' : 'bg-gray-100',
                  )}
                />
              )}
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
};
