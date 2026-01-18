'use client';

import { useRouter } from '@bprogress/next/app';
import { ArrowRightIcon } from '@phosphor-icons/react';
import { useEffect, useRef } from 'react';

import { ROUTES } from '@/lib/constants';
import { useMediaQuery } from '@/lib/hooks/use-media-query';

export const Shortcut = () => {
  const router = useRouter();
  const lastKey = useRef<string | null>(null);
  const isTablet = useMediaQuery('(max-width: 768)');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      if (lastKey.current === 'g' && key === 'h') {
        router.push(ROUTES.home);
        lastKey.current = null;
      } else {
        lastKey.current = key;
        setTimeout(() => {
          lastKey.current = null;
        }, 1000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  return (
    <>
      {isTablet ? (
        <>Tap to go home →</>
      ) : (
        <>
          Press <kbd>G</kbd> <kbd>H</kbd> to go home
        </>
      )}
      <span className='rounded-full bg-neutral-200 p-1'>
        <ArrowRightIcon size={10} weight='bold' />
      </span>
    </>
  );
};
