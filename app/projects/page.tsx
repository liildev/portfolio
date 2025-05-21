import { Metadata } from 'next';

import { Showcase } from '@/components/showcase';
import { Stats } from '@/components/stats';
import { seo } from '@/lib/seo';
import { pagesMeta } from '@/lib/meta';

import { deviceInfo } from '../actions';

export default async function Projects() {
  const { isApple, isMobile } = await deviceInfo();

  return (
    <main className='pt-28 sm:pt-32'>
      <h1>Work. Hobby.</h1>

      <p className='desc'>{pagesMeta.projects.description}</p>
      <Showcase isApple={isApple} />
      <Stats isMobile={isMobile} />
    </main>
  );
}

export const metadata: Metadata = seo(pagesMeta.projects);
