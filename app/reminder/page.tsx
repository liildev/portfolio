import type { Metadata } from 'next';

import Image from 'next/image';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb';
import { BASE_URL } from '@/lib/constants';
import { pagesMeta } from '@/lib/meta';
import { seo } from '@/lib/seo';

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Reminder', path: '/reminder' },
]);

// Article schema for inspirational content
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${BASE_URL}/reminder#article`,
  headline: '七転び八起き - Fall Down Seven Times, Stand Up Eight',
  description:
    'Japanese proverb about resilience and perseverance. A reminder to keep going.',
  author: {
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    name: 'Liil Dev',
  },
  publisher: {
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    name: 'Liil Dev',
  },
  inLanguage: 'en',
  keywords: [
    'resilience',
    'motivation',
    'Japanese proverb',
    'perseverance',
    'inspiration',
  ],
  image: [
    `${BASE_URL}/proverb/fall-down.webp`,
    `${BASE_URL}/proverb/stand-up.webp`,
  ],
  url: `${BASE_URL}/reminder`,
};

export default function Reminder() {
  return (
    <main className='container pt-28 sm:pt-32'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <h1>
        <strong>七転び八起き</strong>
      </h1>
      <p className='desc'>
        (Nana korobi, ya oki) - Fall down seven times stand up eight
        <br />
        <em>- Japanese proverb</em>
      </p>

      <section className='grid grid-cols-1 gap-10 py-5 sm:grid-cols-2 sm:py-10'>
        <figure className='flex flex-col gap-y-2.5'>
          <div className='aspect-[0.8] w-full overflow-hidden rounded-2xl sm:aspect-[0.72] lg:aspect-[1.22]'>
            <div className='relative size-full'>
              <Image
                fill
                priority
                alt='Fall Down'
                className='rounded-2xl object-cover'
                sizes='(max-width: 640px) 100vw, 50vw'
                src='/proverb/fall-down.webp'
              />
            </div>
          </div>
          <figcaption className='text-start'>
            <h3 className='text-lg font-semibold'>
              Resilience Begins with the Fall
            </h3>
            <p className='text-muted-foreground'>
              Every journey includes setbacks. It's what you do next that
              counts.
            </p>
          </figcaption>
        </figure>

        <figure className='flex flex-col gap-y-2.5'>
          <div className='aspect-[0.8] w-full overflow-hidden rounded-2xl sm:aspect-[0.72] lg:aspect-[1.22]'>
            <div className='relative size-full'>
              <Image
                fill
                alt='Stand Up'
                className='rounded-2xl object-cover'
                sizes='(max-width: 640px) 100vw, 50vw'
                src='/proverb/stand-up.webp'
              />
            </div>
          </div>
          <figcaption className='text-start'>
            <h3 className='text-lg font-semibold'>The Power to Rise Again</h3>
            <p className='text-muted-foreground'>
              Rise again with more clarity and courage than before.
            </p>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}

export const metadata: Metadata = seo(pagesMeta.reminder);
