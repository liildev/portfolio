'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: '/pricing', label: 'Pricing' },
    { href: '/login', label: 'Log in' },
  ];

  const mobileNavLinks = [
    { href: '/changelog', label: 'Changelog' },
    { href: '/pricing', label: 'Pricing' },
    { href: 'https://careers.mobbin.com', label: 'Careers', external: true },
    { href: 'mailto:support@mobbin.com', label: 'Support', external: true },
    { href: '/login', label: 'Log in' },
  ];

  return (
    <div className='sticky top-0 z-10'>
      {/* Desktop Navigation */}
      <nav className='absolute top-4 left-1/2 z-10 hidden h-14 w-[584px] -translate-x-1/2 items-center gap-x-4 rounded-full bg-[hsla(0,0%,93%,0.72)] px-4 py-2 backdrop-blur-xl md:flex'>
        <div className='flex grow items-center'>
          <Link
            aria-label='Home'
            className='focus-visible:ring-4 focus-visible:ring-[hsl(var(--blue-60)/50%)]'
            href='/'
          >
            <MobbinLogoAndWordmark />
          </Link>
        </div>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            className='text-body-bold text-text-primary w-fit transition-opacity ease-out hover:opacity-80 focus-visible:ring-4 focus-visible:ring-[hsl(var(--blue-60)/50%)]'
            href={link.href}
          >
            {link.label}
          </Link>
        ))}

        <Link
          className='text-body-bold bg-background-inverse text-text-inverse hover:bg-background-inverse-hover active:bg-background-inverse-hover relative inline-flex h-11 cursor-pointer items-center justify-center rounded-full px-4 transition-colors ease-out focus-visible:ring-4 focus-visible:ring-[hsl(var(--blue-60)/50%)]'
          href='/signup'
        >
          <span className='flex items-center justify-center gap-x-2'>
            <span className='truncate'>Join for free</span>
          </span>
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <nav className='absolute top-2 left-6 z-10 w-[calc(100vw-48px)] rounded-[28px] bg-[hsla(0,0%,93%,0.72)] backdrop-blur-xl md:hidden'>
        <div className='flex items-center justify-between py-2 ps-5 pe-3'>
          <Link
            aria-label='Home'
            className='focus-visible:ring-4 focus-visible:ring-[hsl(var(--blue-60)/50%)]'
            href='/'
          >
            <MobbinLogo />
          </Link>

          <button
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='h-9 rounded-sm px-[10px] focus-visible:ring-4 focus-visible:ring-[hsl(var(--blue-60)/50%)]'
            onClick={toggleMenu}
          >
            <AnimatedMenuIcon isOpen={isMenuOpen} />
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              animate={{ height: 'auto', opacity: 1 }}
              className='flex w-full flex-col gap-y-1.5 px-5 pt-3 pb-5'
              exit={{ height: 0, opacity: 0 }}
              initial={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.ul className='flex flex-col gap-y-3'>
                {mobileNavLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -10 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.external ? (
                      <a
                        className='text-feature-bold text-text-primary w-fit transition-opacity ease-out hover:opacity-80 focus-visible:ring-4 focus-visible:ring-[hsl(var(--blue-60)/50%)]'
                        href={link.href}
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        className='text-feature-bold text-text-primary w-fit transition-opacity ease-out hover:opacity-80 focus-visible:ring-4 focus-visible:ring-[hsl(var(--blue-60)/50%)]'
                        href={link.href}
                        onClick={toggleMenu}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -10 }}
                transition={{ delay: mobileNavLinks.length * 0.05 }}
              >
                <Link
                  className='text-body-bold bg-background-inverse text-text-inverse hover:bg-background-inverse-hover active:bg-background-inverse-hover relative inline-flex h-11 cursor-pointer items-center justify-center rounded-full px-4 transition-colors ease-out focus-visible:ring-4 focus-visible:ring-[hsl(var(--blue-60)/50%)]'
                  href='/signup'
                  onClick={toggleMenu}
                >
                  <span className='flex items-center justify-center gap-x-8'>
                    <span className='truncate'>Join for free</span>
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

// Logo Components
function MobbinLogoAndWordmark() {
  return (
    <svg fill='currentColor' height='18' viewBox='0 0 449 64' width='117'>
      <path d='M362.692 63.9463C376.111 63.9463 383.357 52.6692 383.357 40.0497C383.357 27.4301 376.379 16.3141 362.585 16.3141C356.309 16.3141 350.74 18.9669 348.361 22.8742V0.741064H336.285V62.9797H348.361V56.3536C350.793 60.7624 355.922 63.9463 362.692 63.9463ZM359.633 52.7229C352.226 52.7229 347.824 46.8159 347.824 39.5664C347.824 32.3168 352.601 26.4635 359.74 26.4635C367.63 26.4635 371.548 32.8538 371.548 39.5664C371.548 46.2789 366.986 52.7229 359.633 52.7229ZM407.027 62.9797H419.265V39.9423C419.265 33.0686 421.68 27.5912 428.497 27.5912C435.313 27.5912 436.762 33.1223 436.762 39.5664V62.9797H449V35.8073C449 24.1544 443.15 16.3141 432.737 16.3141C426.723 16.3141 420.88 18.8665 418.943 25.7359V18.9455H407.027V62.9797ZM387.453 13.4573H401.589V0H387.453V13.4573ZM388.375 62.9797H400.667V18.9455H388.375V62.9797ZM310.789 63.9463C324.208 63.9463 331.454 52.6692 331.454 40.0497C331.454 27.4301 324.476 16.3141 310.682 16.3141C304.406 16.3141 298.838 18.9669 296.458 22.8742V0.741064H284.382V62.9797H296.458V56.3536C298.89 60.7624 304.019 63.9463 310.789 63.9463ZM307.73 52.7229C300.323 52.7229 295.922 46.8159 295.922 39.5664C295.922 32.3168 300.699 26.4635 307.837 26.4635C315.727 26.4635 319.646 32.8538 319.646 39.5664C319.646 46.2789 315.083 52.7229 307.73 52.7229ZM255.503 52.5264C247.805 52.5264 243.577 46.8309 243.577 39.8349C243.577 32.3501 248.293 27.1433 255.503 27.1433C263.418 27.1433 267.755 33.1637 267.755 39.8349C267.755 46.5061 263.256 52.5264 255.503 52.5264ZM255.505 64C270.051 64 279.336 53.958 279.336 40.1571C279.336 26.3561 269.729 16.0993 255.505 16.0993C241.281 16.0993 231.996 26.3024 231.996 40.1571C231.996 54.0117 241.604 64 255.505 64ZM160.878 63.4093H172.901V20.6L188.198 60.9391H199.684L214.982 20.6V63.4093H227.005V0.741064H211.386L193.942 48.1047L176.551 0.741064H160.878V63.4093ZM47.2358 63.4093H82.7155L97.1951 47.9495V63.4093H136.306V26.3921H114.333V0.755563H81.0854L66.1366 16.3421V0.755563H27.7613L0 30.077V63.3937L31.9377 63.4082L47.2358 47.0753V63.4093Z' />
    </svg>
  );
}

function MobbinLogo() {
  return (
    <svg fill='currentColor' height='64' viewBox='0 0 139 64' width='139'>
      <title>Mobbin</title>
      <path d='M84.3504 64H48.1695V47.315L32.569 63.9989L0 63.9841V29.9515L28.31 0H67.4439V15.9214L82.6881 0H116.593V26.1874H139V64H99.1163V48.208L84.3504 64Z' />
    </svg>
  );
}

// Animated Menu Icon Component
function AnimatedMenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      height='20'
      viewBox='0 0 20 20'
      width='20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.path
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        d='M4 6H16'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        transition={{ duration: 0.2 }}
      />
      <motion.path
        animate={
          isOpen
            ? { rotate: 45, y: 2, originX: '50%', originY: '50%' }
            : { rotate: 0, y: 0, originX: '50%', originY: '50%' }
        }
        d='M4 10H16'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        transition={{ duration: 0.2 }}
      />
      <motion.path
        animate={
          isOpen
            ? { rotate: -45, y: -2, originX: '50%', originY: '50%' }
            : { rotate: 0, y: 0, originX: '50%', originY: '50%' }
        }
        d='M4 14H16'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        transition={{ duration: 0.2 }}
      />
    </svg>
  );
}
