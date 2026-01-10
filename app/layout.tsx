import './styles/globals.css';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { metropolis } from '@/app/styles/fonts';
import { Layout } from '@/components/layout';
import { Toaster } from '@/components/ui/sonner';
import { BASE_URL } from '@/lib/constants';
import { pagesMeta } from '@/lib/meta';

const { title, description } = pagesMeta.main;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: title,
        description,
        publisher: { '@id': `${BASE_URL}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${BASE_URL}/#person`,
        name: title,
        url: BASE_URL,
        sameAs: [
          'https://twitter.com/liildev',
          'https://github.com/liildev',
          'https://linkedin.com/in/liildev',
        ],
      },
      {
        '@type': 'SiteNavigationElement',
        '@id': `${BASE_URL}/#navigation`,
        name: 'Main Navigation',
        hasPart: [
          { '@type': 'WebPage', name: 'About', url: `${BASE_URL}/about` },
          { '@type': 'WebPage', name: 'Projects', url: `${BASE_URL}/projects` },
        ],
      },
    ],
  };

  return (
    <html lang='en'>
      <body className={metropolis.className}>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <false>
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type='application/ld+json'
        />
        <Layout>{children}</Layout>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  appLinks: {
    web: {
      url: BASE_URL,
      should_fallback: true,
    },
  },
  category: 'portfolio',
  title: {
    template: `%s | ${title}`,
    default: title,
  },
  description,
  keywords: [
    title,
    'liildev',
    'web development',
    'developer',
    'software',
    'frontend',
    'programming',
  ],
  authors: [{ name: title, url: BASE_URL }],
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title,
    description,
    url: '/',
    siteName: title,
    images: ['/me.webp'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@liildev',
    title,
    description,
    images: ['/me.webp'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  appleWebApp: {
    title,
  },
  manifest: `${BASE_URL}/manifest.json`,
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_ID,
  },
  facebook: {
    appId: process.env.NEXT_PUBLIC_FACEBOOK_ID as string,
  },
  other: {
    google: 'notranslate',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};
