import * as icons from '@/lib/assets';
import { cn } from '@/lib/utils';
import { TIconProps } from '@/types';

export const Icon = ({ icon, className }: TIconProps) => {
  const IconComponent = icons[icon as keyof typeof icons];

  if (!IconComponent) {
    throw Error(`${icon} not found`);
  }

  return <IconComponent className={cn(className)} />;
};

Icon.displayName = 'Icon';
