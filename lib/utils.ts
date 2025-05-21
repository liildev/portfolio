import { clsx, type ClassValue } from 'clsx';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { twMerge } from 'tailwind-merge';
import { UAParser } from 'ua-parser-js';

dayjs.extend(duration);
dayjs.extend(relativeTime);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDeviceInfo(userAgent: string | null | undefined) {
  const parser = new UAParser(userAgent || '');
  const os = parser.getOS().name || 'Unknown';
  const appleOS = ['macos', 'ios', 'ipados'];
  const isApple = appleOS.includes(os.toLocaleLowerCase());
  const deviceType = parser.getDevice().type || 'desktop';

  return {
    isApple,
    isMobile: deviceType === 'mobile' || deviceType === 'tablet',
  };
}

export const getDuration = (startDate: string, endDate?: string): string => {
  const start = dayjs(startDate);
  const end = endDate ? dayjs(endDate) : dayjs();

  const durationObj = dayjs.duration(end.diff(start));

  let durationStr = '';

  const years = durationObj.years();

  if (years > 0) {
    durationStr += `${years} ${years === 1 ? 'yr' : 'yrs'} `;
  }

  const months = durationObj.months();

  if (months > 0) {
    durationStr += `${months} ${months === 1 ? 'mo' : 'mos'}`;
  }

  return durationStr.trim();
};
