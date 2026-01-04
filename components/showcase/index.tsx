import Image from 'next/image';
import { cn } from '@/lib/utils';
import { projects } from './constants';

export const Showcase = ({ isApple }: { isApple: boolean }) => {
  const projectsData = projects(isApple);
  const duplicatedProjects = [...projectsData, ...projectsData];

  return (
    <section
      aria-labelledby='projects-heading'
      className='marquee-container overflow-hidden'
    >
      <h2 className='sr-only' id='projects-heading'>
        Projects I've built
      </h2>

      <div className='animate-marquee flex w-max gap-6'>
        {duplicatedProjects.map((item, index) => {
          const isAboveTheFold = index < 4;

          const card = (
            <figure
              key={item.url}
              className='group flex w-52 flex-shrink-0 cursor-pointer flex-col items-center gap-2 md:w-72'
            >
              <div className='relative h-96 w-full overflow-hidden rounded-3xl bg-gray-100 md:h-[480px]'>
                <Image
                  fill
                  alt={`Screenshot of ${item.title}`}
                  className='object-cover transition-transform duration-300 group-hover:scale-105'
                  fetchPriority={index === 0 ? 'high' : undefined}
                  priority={isAboveTheFold}
                  quality={75}
                  sizes='(min-width: 768px) 288px, 208px'
                  src={item.image}
                />
              </div>
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
            </figure>
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
      </div>
    </section>
  );
};
