import localFont from 'next/font/local';

export const metropolis = localFont({
  src: [
    {
      path: './Metropolis-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Metropolis-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Metropolis-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Metropolis-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Metropolis-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
});
