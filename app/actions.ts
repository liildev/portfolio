'use server';

import { headers } from 'next/headers';

import { getDeviceInfo } from '@/lib/utils';

export const deviceInfo = async () => {
  const headerList = await headers();
  const userAgent = headerList.get('user-agent');

  return getDeviceInfo(userAgent);
};
