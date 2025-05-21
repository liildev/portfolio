import Link from 'next/link';

import { ROUTES } from '@/lib/constants';

import { Button } from '../ui/button';

import { Shortcut } from './shortcut';

export const Alert = ({ code }: { code?: number }) => {
  let title = 'five hundred';
  let description = "Something isn't right.";

  if (code === 404) {
    title = 'four oh four';
    description = "This page doesn't exist.";
  }

  return (
    <main className='pad container flex grow flex-col items-center justify-center gap-5'>
      <h1>{title}</h1>
      <p className='desc'>{description}</p>

      <Button asChild size='lg' variant='outline'>
        <Link href={ROUTES.home}>
          <Shortcut />
        </Link>
      </Button>
    </main>
  );
};
