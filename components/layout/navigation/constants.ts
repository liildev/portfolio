import { ROUTES } from '@/lib/constants';

export const NAV_LINKS = [
  { href: ROUTES.about, label: 'About' },
  { href: ROUTES.projects, label: 'Projects' },
  { href: ROUTES.reminder, label: 'Reminder' },
] as const;
