'use server';

import { headers } from 'next/headers';

import { isAppleDevice } from '@/lib/utils';

export const deviceInfo = async () => {
  const headerList = await headers();
  const userAgent = headerList.get('user-agent');

  return { isApple: isAppleDevice(userAgent) };
};
