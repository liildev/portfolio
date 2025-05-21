import type { MetadataRoute } from 'next';

import { BASE_URL, ROUTES } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return Object.values(ROUTES).map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
}
