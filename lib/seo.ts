import type { Metadata } from 'next';

import { BASE_URL } from './constants';

type Props = {
  title?: string;
  description: string;
  path: string;
  image: string;
};

export const seo = ({
  title = '',
  description,
  path,
  image,
}: Props): Metadata => {
  const url = `${BASE_URL}${path}`;
  const imageUrl = `${BASE_URL}/${image}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: {
        url: imageUrl,
        width: 1200,
        height: 630,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
};
