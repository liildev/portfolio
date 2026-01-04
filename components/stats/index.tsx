'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

import { Logos } from './logos';
import { Text } from './text';
import { useTextMotionStyle } from './utils';

export const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const firstStat = useTextMotionStyle(scrollYProgress, 0, 0.33);
  const secondStat = useTextMotionStyle(scrollYProgress, 0.25, 0.58);
  const thirdStat = useTextMotionStyle(scrollYProgress, 0.5, 0.83);

  return (
    <div ref={sectionRef} className='relative h-[300vh]'>
      <section className='sticky top-0 grid h-screen place-items-center overflow-hidden'>
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
