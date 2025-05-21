'use client';

import { Command } from '@phosphor-icons/react/dist/ssr';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { CommandBar } from '@/components/command-bar';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/lib/hooks/use-media-query';

import { AnimatedMenuIcon } from './menu-icon';
import { NAV_LINKS } from './constants';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 640px)');

  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleClickLogo = () => {
    if (isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className='sticky top-0 z-10 mx-6'>
      <nav className='bg-nav absolute top-2 left-1/2 z-10 mx-auto w-full max-w-[584px] -translate-x-1/2 rounded-[28px] py-2 pr-4 pl-6 backdrop-blur-xl sm:top-6 sm:h-[60px] sm:rounded-full sm:pr-2'>
        <div className='flex size-full items-center justify-between'>
          <Link aria-label='Home' href='/' onClick={handleClickLogo}>
            <Image
              alt='Logo'
              // className='h-8 w-12'
              height={28}
              src='/logos/logo.svg'
              width={29}
            />
          </Link>

          <ul className='hidden items-center gap-6 sm:flex'>
            {NAV_LINKS.slice(0, 2).map(({ href, label }) => (
              <li key={href}>
                <Link aria-label={label} href={href}>
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <CommandBar>
                <Button className='rounded-full sm:size-12' size='sm'>
                  <Command className='size-6' />
                </Button>
              </CommandBar>
            </li>
          </ul>

          <Button
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='rounded-full sm:hidden'
            size='icon'
            variant='ghost'
            onClick={toggleMenu}
          >
            <AnimatedMenuIcon isOpen={isMenuOpen} />
          </Button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              initial={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.ul className='flex flex-col gap-y-3 pt-5 pb-3'>
                {NAV_LINKS.map(({ href, label }, index) => (
                  <motion.li
                    key={href}
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -10 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      className='text-xl font-semibold'
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              {/*
							<CommandBar>
								<Button size='icon' className='rounded-full'>
									<Command className='size-6' />
								</Button>
							</CommandBar> */}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
