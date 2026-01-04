'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import { getDuration } from '@/lib/utils';
import { experiences } from './constants';

export const Career = () => (
  <section className='container flex flex-wrap justify-center gap-4'>
    {experiences.map((item) => (
      <article
        key={item.company}
        className='flex w-full flex-col gap-y-4 rounded-md border p-4 md:w-[calc(50%-0.5rem)] xl:w-[calc(33.333%-0.75rem)]'
      >
        <header className='flex items-center gap-x-3'>
          <div className='relative size-10 overflow-hidden rounded-full bg-gray-100'>
            <Image
              fill
              priority
              alt={item.company}
              className='size-full object-cover'
              src={`/logos/${item.logoUrl}.webp`}
            />
          </div>
          <div>
            <h3 className='font-semibold'>{item.jobTitle}</h3>
            <p className='text-muted-foreground flex items-center gap-1 text-sm'>
              {item.companyUrl ? (
                <a
                  className='hover:underline'
                  href={item.companyUrl}
                  rel='noopener noreferrer'
                  target='_blank'
                  title={`Visit ${item.company}`}
                >
                  {item.company}
                </a>
              ) : (
                item.company
              )}
              <span aria-hidden='true'>·</span>
              {item.location}
            </p>
          </div>
        </header>

        <p className='font-medium'>{item.description}</p>

        <footer className='mt-auto flex items-center justify-end gap-1'>
          <time dateTime={item.startDate}>
            {dayjs(item.startDate).format('MMM YYYY')}
          </time>
          <span>–</span>
          <time dateTime={item.endDate}>
            {item.endDate ? dayjs(item.endDate).format('MMM YYYY') : 'Present'}
          </time>
          <span aria-hidden='true'>·</span>
          <span>{getDuration(item.startDate, item.endDate)}</span>
        </footer>
      </article>
    ))}
  </section>
);
