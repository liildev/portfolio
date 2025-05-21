import type { Icon } from '@phosphor-icons/react';

import Link from 'next/link';

type Props = {
  url: string;
  icon: Icon;
  title: string;
};

export const Item = ({ url, title, icon: PhosphorIcon }: Props) => (
  <Link
    className='group flex items-center gap-1 lowercase transition-colors duration-300'
    href={url}
    target='_blank'
  >
    <span className='hidden text-base md:block'>{title}</span>
    <PhosphorIcon className='text-2xl opacity-100 transition-opacity duration-300 group-hover:opacity-100 md:text-lg md:opacity-0' />
  </Link>
);
