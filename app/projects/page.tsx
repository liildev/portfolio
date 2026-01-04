import type { Metadata } from 'next';
import { Showcase } from '@/components/showcase';
import { Stats } from '@/components/stats';
import { pagesMeta } from '@/lib/meta';
import { seo } from '@/lib/seo';
import { deviceInfo } from '../actions';

export default async function Projects() {
  const { isApple } = await deviceInfo();

  return (
    <main className='pt-28 sm:pt-32'>
      <h1>Work. Hobby.</h1>

      <p className='desc mb-10'>{pagesMeta.projects.description}</p>
      <Showcase isApple={isApple} />
      <Stats />
    </main>
  );
}

export const metadata: Metadata = seo(pagesMeta.projects);
