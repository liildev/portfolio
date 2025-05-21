/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

import { Logos } from './logos';
import { Text } from './text';

export const Stats = ({ isMobile }: { isMobile: boolean }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const createTextMotionStyle = (start: number, end: number) => {
    if (isMobile) {
      const opacity = useMotionValue(1);
      const y = useMotionValue('0%');

      return { opacity, y };
    }

    const localProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
    const opacity = useTransform(localProgress, [0, 1], [0, 1]);
    const y = useTransform(localProgress, [0, 1], ['40%', '0%']);

    return { opacity, y };
  };

  const firstStat = createTextMotionStyle(0.2, 0.3);
  const secondStat = createTextMotionStyle(0.4, 0.5);
  const thirdStat = createTextMotionStyle(0.6, 0.7);

  return (
    <div ref={sectionRef} className='sm:h-[400vh]'>
      <section className='sticky top-0 grid h-[60vh] place-items-center overflow-hidden sm:h-screen'>
        <Logos />

        <div className='relative z-10 text-center'>
          <motion.p
            animate={{ opacity: 1 }}
            className='pb-3 text-xl font-semibold sm:pb-6 md:text-2xl'
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            Built with curiosity and code
          </motion.p>

          <div className='grid gap-y-2 sm:gap-y-4 md:gap-y-5 lg:gap-y-6'>
            <Text motionStyle={firstStat} value='14 builds' />
            <Text motionStyle={secondStat} value='30+ tools' />
            <Text motionStyle={thirdStat} value='9 launches' />
          </div>
        </div>
      </section>
    </div>
  );
};
