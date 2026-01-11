import type { Metadata } from 'next';
import { Showcase } from '@/components/showcase';
import { Stats } from '@/components/stats';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb';
import { pagesMeta } from '@/lib/meta';
import { generateProjectListSchema } from '@/lib/project-schema';
import { seo } from '@/lib/seo';
import { deviceInfo } from '../actions';

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
]);

// Real projects data for schema
const projectsSchema = generateProjectListSchema([
  {
    name: "Let'sTrip Travel Platform",
    description:
      'Comprehensive travel booking platform with mobile and web applications for hotels, flights, and tour packages.',
    url: 'https://letstrip.travel',
    image: '/projects/letstrip-travel.webp',
    dateCreated: '2024-03-01',
    keywords: ['Travel', 'Booking', 'Tourism', 'React', 'Next.js'],
  },
  {
    name: 'Najot Talim LMS',
    description:
      'Learning Management System for educational courses with student progress tracking and interactive lessons.',
    url: 'https://najottalim.uz',
    image: '/projects/najot-talim.webp',
    dateCreated: '2023-06-01',
    keywords: ['Education', 'LMS', 'E-learning', 'React'],
  },
  {
    name: 'Apple Store Clone',
    description:
      'Pixel-perfect clone of Apple Store showcasing frontend development skills and attention to detail.',
    url: 'https://apple-clone-app.vercel.app',
    image: '/projects/apple-store.webp',
    dateCreated: '2023-01-15',
    keywords: ['E-commerce', 'UI/UX', 'React', 'Design'],
  },
  {
    name: 'Lyriks Music Platform',
    description:
      'Music streaming platform with lyrics display and song discovery features.',
    url: 'https://lyriks-music.firebaseapp.com',
    image: '/projects/lyriks.webp',
    dateCreated: '2022-09-20',
    keywords: ['Music', 'Streaming', 'Entertainment', 'Firebase'],
  },
]);

export default async function Projects() {
  const { isApple } = await deviceInfo();

  return (
    <main className='pt-28 sm:pt-32'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <h1>Work. Hobby.</h1>

      <p className='desc mb-10'>{pagesMeta.projects.description}</p>
      <Showcase isApple={isApple} />
      <Stats />
    </main>
  );
}

export const metadata: Metadata = seo(pagesMeta.projects);
