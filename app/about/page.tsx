import type { Metadata } from 'next';

import { Career } from '@/components/career';
import { LogoCloud } from '@/components/logo-cloud';
import { pagesMeta } from '@/lib/meta';
import { seo } from '@/lib/seo';

const About = () => {
  return (
    <main className='pt-28 sm:pt-32'>
      <h1>Create. Share. Repeat.</h1>

      <p className='desc'>{pagesMeta.projects.description}</p>

      <h2 className='sr-only'>Experience</h2>
      <Career />

      <LogoCloud />
    </main>
  );
};

export default About;

export const metadata: Metadata = seo(pagesMeta.about);
