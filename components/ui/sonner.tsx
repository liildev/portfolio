'use client';

import type { ToasterProps } from 'sonner';

import { Toaster as Sonner } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className='toaster group'
      theme='dark'
      toastOptions={{
        classNames: {
          toast: '!bg-neutral-700',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
