import type { FloatingLogoProps } from '@/types';

import { motion } from 'framer-motion';

import { useMediaQuery } from '@/lib/hooks/use-media-query';
import { cn } from '@/lib/utils';

import { Icon } from '../icon';

import { logos } from './constants';

export const Logos = () => {
  return (
    <div className='pointer-events-none absolute inset-0 overflow-hidden'>
      {logos.map((logo, index) => (
        <FloatingLogo key={index} {...logo} />
      ))}
    </div>
  );
};

export const FloatingLogo = ({
  top,
  left,
  path,
  xRange = 5,
  yRange = 5,
  duration = 15,
}: FloatingLogoProps) => {
  const isMobile = useMediaQuery('(max-width: 640px)');

  const hiddenOnMobile = ['tanstack', 'sass', 'tailwind'];

  return (
    <motion.div
      animate={{
        x: [0, xRange, 0, -xRange, 0],
        y: [0, -yRange, 0, yRange, 0],
      }}
      className={cn(
        'absolute z-20',
        isMobile && hiddenOnMobile.includes(path) && 'hidden',
      )}
      style={{ top, left, marginTop: -60 / 2, marginLeft: -60 / 2 }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    >
      <Icon
        className='size-13 rounded-md sm:size-14 sm:rounded-2xl md:size-20 md:rounded-3xl'
        icon={path}
      />
    </motion.div>
  );
};
