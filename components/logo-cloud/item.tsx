'use client';

import type { LogoRowProps } from '@/types';

import { motion } from 'framer-motion';

import { Icon } from '../icon';

export const Item = ({ logos, direction }: LogoRowProps) => {
  const doubled = [...logos, ...logos];
  const offset = logos.length * 180;

  return (
    <motion.div
      animate={{ x: direction === 'left' ? [0, -offset] : [-offset, 0] }}
      className='flex items-center gap-6 sm:gap-8 md:gap-12'
      transition={{
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 50,
          ease: 'linear',
        },
      }}
    >
      {doubled.map((logo, index) => (
        <div
          key={`${logo.title}-${index}`}
          className='flex flex-shrink-0 items-center gap-3'
        >
          <Icon
            className='size-10 rounded-sm sm:size-14 sm:rounded-md md:size-18 md:rounded-lg'
            icon={logo.path}
          />

          <p className='text-xl font-semibold whitespace-nowrap sm:text-2xl md:text-3xl'>
            {logo.title}
          </p>
        </div>
      ))}
    </motion.div>
  );
};
