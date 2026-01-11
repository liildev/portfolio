import type { MetadataRoute } from 'next';

import { BASE_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/_next/static/media/', // Block font files
        '/_next/static/chunks/', // Block JS chunks
        '/_next/data/', // Block data files
        '/api/', // Block API routes
        '/*.otf$', // Block font files
        '/*.woff$', // Block font files
        '/*.woff2$', // Block font files
        '/*.ttf$', // Block font files
      ],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
