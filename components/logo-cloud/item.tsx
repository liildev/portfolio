'use client';

import type { LogoRowProps } from '@/types';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
          <div className='relative size-10 sm:size-14 md:size-18'>
            <Image
              fill
              alt={logo.title}
              className='rounded-sm object-cover sm:rounded-md md:rounded-lg'
              loading='eager'
              placeholder='blur'
              priority={index < 5}
              quality={80}
              sizes='(min-width: 768px) 120px, 80px'
              src={`/logos/${logo.path}.webp`}
            />
          </div>
          <p className='text-xl font-semibold whitespace-nowrap sm:text-2xl md:text-3xl'>
            {logo.title}
          </p>
        </div>
      ))}
    </motion.div>
  );
};
