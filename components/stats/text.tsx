import type { MotionValue } from 'framer-motion';

import { motion } from 'framer-motion';

interface Props {
  value: string;
  motionStyle: {
    opacity: MotionValue<number>;
    y: MotionValue<string>;
  };
}

export const Text = ({ value, motionStyle }: Props) => {
  return (
    <motion.span
      className='text-center text-2xl font-bold text-nowrap sm:text-3xl md:text-5xl lg:text-7xl'
      style={motionStyle}
    >
      {value}
    </motion.span>
  );
};
