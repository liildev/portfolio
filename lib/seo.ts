import type { Metadata } from 'next';

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
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      images: {
        url: image,
        width: 1120,
        height: 1120,
      },
    },
  };
};
