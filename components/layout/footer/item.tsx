import type { Icon } from '@phosphor-icons/react';

type Props = {
  url: string;
  icon: Icon;
  title: string;
};

export const Item = ({ url, title, icon: PhosphorIcon }: Props) => (
  <a
    aria-label={title}
    className='group flex items-center gap-1 lowercase transition-colors duration-300'
    href={url}
    rel='noopener noreferrer'
    target='_blank'
  >
    <span className='hidden text-base md:block'>{title}</span>
    <PhosphorIcon className='text-2xl opacity-100 transition-opacity duration-300 group-hover:opacity-100 md:text-lg md:opacity-0' />
  </a>
);
