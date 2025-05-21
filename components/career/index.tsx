'use client';

import { Dot } from '@phosphor-icons/react/dist/ssr';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

import { getDuration } from '@/lib/utils';

import { experiences } from './constants';

export const Career = () => (
  <section className='container grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
    {experiences.map((item, idx) => (
      <figure
        key={idx}
        className='flex h-fit w-full break-inside-avoid flex-col gap-y-4 rounded-md border p-4'
      >
        <figcaption className='item-center flex gap-x-3'>
          <div className='relative size-10'>
            <Image
              fill
              priority
              alt={item.company}
              className='size-full rounded-full object-cover'
              src={`/logos/${item.logoUrl}.webp`}
            />
          </div>
          <div>
            <h3 className='font-semibold'>{item.jobTitle}</h3>
            <span className='text-muted-foreground flex items-center text-sm'>
              <Link
                className='hover:underline'
                href={item.companyUrl}
                target='_blank'
              >
                {item.company}
              </Link>
              <Dot size={24} weight='bold' />
              {item.location}
            </span>
          </div>
        </figcaption>
        <blockquote className='font-medium'>{item.description}</blockquote>

        <span className='flex items-center justify-end'>
          <time>{dayjs(item.startDate).format('MMM YYYY')}</time>

          <p> – </p>

          <time>
            {item.endDate ? dayjs(item.endDate).format('MMM YYYY') : 'Present'}
          </time>
          <Dot size={24} weight='bold' />

          <p>{getDuration(item.startDate, item.endDate)}</p>
        </span>
      </figure>
    ))}
  </section>
);
