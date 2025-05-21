import type { MetadataRoute } from 'next';

import { pagesMeta } from '@/lib/meta';

const { main } = pagesMeta;

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: main.title,
    short_name: main.title,
    description: main.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
