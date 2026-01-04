import { type ClassValue, clsx } from 'clsx';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { twMerge } from 'tailwind-merge';

dayjs.extend(duration);
dayjs.extend(relativeTime);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const APPLE_UA_REGEX = /Mac|iPhone|iPad|iPod/i;

export function isAppleDevice(userAgent: string | null | undefined): boolean {
  return APPLE_UA_REGEX.test(userAgent || '');
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
