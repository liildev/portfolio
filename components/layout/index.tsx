import type { PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Navigation } from './navigation';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navigation />
      {children}

      <Footer />
    </>
  );
};
