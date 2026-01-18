import type { PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Navigation } from './navigation';
import { ProgressProvider } from './progress';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <ProgressProvider>
      <Navigation />
      {children}

      <Footer />
    </ProgressProvider>
  );
};
