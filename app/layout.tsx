import './styles/globals.css';
import type { Metadata, Viewport } from 'next';

import { ReactNode } from 'react';

import { Layout } from '@/components/layout';
import { Toaster } from '@/components/ui/sonner';
import { BASE_URL } from '@/lib/constants';
import { pagesMeta } from '@/lib/meta';
import { metropolis } from '@/app/styles/fonts';

const { title, description } = pagesMeta.main;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={metropolis.className}>
        <Layout>{children}</Layout>
        <Toaster />
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
    images: ['/me.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@liildev',
    title,
    description,
    images: ['/me.png'],
  },
  robots: 'index, follow',
  icons: {
    icon: '/favicon.icon',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: `${BASE_URL}/manifest.json`,
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_ID,
  },
  facebook: {
    appId: process.env.NEXT_PUBLIC_FACEBOOK_ID as string,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
