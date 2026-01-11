import type { Metadata } from 'next';

import { Career } from '@/components/career';
import { LogoCloud } from '@/components/logo-cloud';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb';
import { pagesMeta } from '@/lib/meta';
import { seo } from '@/lib/seo';

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
]);

const About = () => {
  return (
    <main className='pt-28 sm:pt-32'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
