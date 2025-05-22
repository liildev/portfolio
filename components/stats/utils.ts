import { MotionValue, useMotionValue, useTransform } from 'framer-motion';

export function useTextMotionStyle(
  scrollYProgress: MotionValue<number>,
  start: number,
  end: number,
  isMobile: boolean,
) {
  const defaultOpacity = useMotionValue(1);
  const defaultY = useMotionValue('0%');

  const localProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
  const animatedOpacity = useTransform(localProgress, [0, 1], [0, 1]);
  const animatedY = useTransform(localProgress, [0, 1], ['40%', '0%']);

  return isMobile
    ? { opacity: defaultOpacity, y: defaultY }
    : { opacity: animatedOpacity, y: animatedY };
}
