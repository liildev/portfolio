import { type MotionValue, useTransform } from 'framer-motion';

export function useTextMotionStyle(
  scrollYProgress: MotionValue<number>,
  start: number,
  end: number,
) {
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], ['100%', '0%']);

  return { opacity, y };
}
