import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

import { CommandBar } from '@/components/command-bar';
import { TechStack } from '@/components/tech-stack/test';
import { Button } from '@/components/ui/button';

import { deviceInfo } from './actions';

export default async function Home() {
  const { isApple, isMobile } = await deviceInfo();

  return (
    <main className='container flex grow flex-col items-center justify-center gap-5 py-20 pb-10 xl:justify-end'>
      <TechStack />

      <h1 className='pt-5'>Interfaces that wow — not just work</h1>

      <p className='desc'>
        Frontend engineer focused on performance, precision, and pixel
        perfection.
      </p>

      <CommandBar>
        <Button
          className='rounded-full px-3 font-semibold shadow-none'
          size='lg'
          variant='outline'
        >
          {isMobile ? (
            <>Tap to start</>
          ) : (
            <>
              Press <kbd>{isApple ? '⌘' : 'ctrl'}</kbd>
              <kbd>K</kbd> to start{' '}
            </>
          )}
          <div className='rounded-full bg-neutral-200 p-1'>
            <ArrowRightIcon size={10} weight='bold' />
          </div>
        </Button>
      </CommandBar>
    </main>
  );
}
