'use client';

import { ProgressProvider as Progress } from '@bprogress/next/app';

export const ProgressProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Progress
      height='4px'
      color='var(--primary)'
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </Progress>
  );
};
