import { motion } from 'framer-motion';

interface AnimatedMenuIconProps {
  isOpen: boolean;
}

export function AnimatedMenuIcon({ isOpen }: AnimatedMenuIconProps) {
  return (
    <svg
      aria-labelledby='menu-icon-title'
      height='24px'
      viewBox='0 0 20 20'
      width='24px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title id='menu-icon-title'>Menu</title>
      <motion.path
        animate={isOpen ? 'open' : 'closed'}
        d='M4 6H16'
        initial={false}
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        style={{
          transformOrigin: '50% 50%',
          transformBox: 'fill-box',
        }}
        transition={{ duration: 0.3 }}
        variants={{
          closed: {
            transform: 'none',
          },
          open: {
            transform: 'translateY(4px) rotate(45deg)',
          },
        }}
      />
      <motion.path
        animate={isOpen ? 'open' : 'closed'}
        d='M4 14H16'
        initial={false}
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        style={{
          transformOrigin: '50% 50%',
          transformBox: 'fill-box',
        }}
        transition={{ duration: 0.3 }}
        variants={{
          closed: {
            transform: 'none',
          },
          open: {
            transform: 'translateY(-4px) rotate(-45deg)',
          },
        }}
      />
    </svg>
  );
}
