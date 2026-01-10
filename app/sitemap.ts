import type { MetadataRoute } from 'next';

import { BASE_URL, ROUTES } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Define specific priorities for each route
  const routePriorities: Record<string, number> = {
    [ROUTES.home]: 1.0,
    [ROUTES.about]: 0.8,
    [ROUTES.projects]: 0.9,
    [ROUTES.reminder]: 0.6,
  };

  const routeFrequencies: Record<
    string,
    'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  > = {
    [ROUTES.home]: 'weekly',
    [ROUTES.about]: 'monthly',
    [ROUTES.projects]: 'weekly',
    [ROUTES.reminder]: 'monthly',
  };

  return Object.values(ROUTES).map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: routeFrequencies[path] || 'monthly',
    priority: routePriorities[path] || 0.7,
  }));
}
