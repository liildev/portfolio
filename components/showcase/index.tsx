'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

import { projects } from './constants';

export const Showcase = ({ isApple }: { isApple: boolean }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  const projectsData = projects(isApple);
  const duplicatedProjects = [...projectsData, ...projectsData];

  useEffect(() => {
    if (!isInView) return;

    controls.start({
      x: ['0%', `-${(100 / duplicatedProjects.length) * projectsData.length}%`],
      transition: {
        duration: 100,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    });
  }, [isInView, controls, projectsData.length, duplicatedProjects.length]);

  return (
    <section
      aria-labelledby='projects-heading'
      className='overflow-hidden pt-10 pb-5'
    >
      <h2 className='sr-only' id='projects-heading'>
        Projects I've built
      </h2>

      <motion.div ref={ref} animate={controls} className='flex w-max gap-6'>
        {duplicatedProjects.map((item, index) => {
          const isAboveTheFold = index < 4;

          const card = (
            <article className='group w-52 flex-shrink-0 cursor-pointer'>
              <figure className='flex flex-col items-center gap-2'>
                <figcaption
                  className={cn(
                    'text-center font-semibold transition-all',
                    item.active
                      ? 'underline md:no-underline md:group-hover:underline'
                      : 'text-neutral-400',
                  )}
                >
                  {item.title}
                </figcaption>

                <div className='relative h-96 w-full overflow-hidden rounded-3xl md:h-[480px]'>
                  <Image
                    fill
                    alt={`Screenshot of ${item.title}`}
                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                    priority={isAboveTheFold}
                    sizes='(min-width: 768px) 208px, 100vw'
                    src={item.image}
                  />
                </div>
              </figure>
            </article>
          );

          return item.active ? (
            <a
              key={`${item.title}-${index}`}
              aria-label={`Visit ${item.title}`}
              href={item.url}
              rel='noopener noreferrer'
              target='_blank'
              title={`Visit ${item.title}`}
            >
              {card}
            </a>
          ) : (
            <div key={`${item.title}-${index}`}>{card}</div>
          );
        })}
      </motion.div>
    </section>
  );
};
