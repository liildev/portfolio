export interface FloatingLogoProps {
  top: string;
  left: string;
  path: string;
  xRange: number;
  yRange: number;
  duration: number;
}

interface Logo {
  path: string;
  title: string;
}

export interface LogoRowProps {
  logos: Logo[];
  direction: 'left' | 'right';
}

export type TIconProps = {
  icon: string;
  className?: string;
};
