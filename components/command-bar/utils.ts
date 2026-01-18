import { useRouter } from '@bprogress/next/app';
import {
  ClockCountdownIcon,
  CodeIcon,
  CopyIcon,
  HouseIcon,
  LightbulbIcon,
  UserCircleIcon,
} from '@phosphor-icons/react/dist/ssr';
import { toast } from 'sonner';

import { ROUTES } from '@/lib/constants';

export const useCommandBar = () => {
  const router = useRouter();

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Copied :D', {
      description: 'You can now share it with anyone.',
    });
  };

  const actions = [
    {
      heading: 'General',
      items: [
        {
          id: 'copy',
          name: 'Copy Link',
          shortcut: ['l'],
          keywords: 'copy-link',
          section: 'General',
          perform: copyLink,
          icon: CopyIcon,
        },
        {
          id: 'source',
          name: 'View Source',
          shortcut: ['s'],
          keywords: 'view-source',
          section: 'General',
          perform: () =>
            window.open(
              'https://github.com/liildev/portfolio/tree/main',
              '_blank',
            ),
          icon: CodeIcon,
        },
      ],
    },
    {
      heading: 'Go To',
      items: [
        {
          id: 'home',
          name: 'Home',
          shortcut: ['g', 'h'],
          keywords: 'go-home',
          section: 'Go To',
          perform: () => router.push(ROUTES.home),
          icon: HouseIcon,
        },
        {
          id: 'about',
          name: 'About',
          shortcut: ['g', 'a'],
          keywords: 'go-about',
          section: 'Go To',
          perform: () => router.push(ROUTES.about),
          icon: UserCircleIcon,
        },
        {
          id: 'projects',
          name: 'Projects',
          shortcut: ['g', 'p'],
          keywords: 'go-projects',
          section: 'Go To',
          perform: () => router.push(ROUTES.projects),
          icon: LightbulbIcon,
        },
        {
          id: 'reminder',
          name: 'Reminder',
          shortcut: ['g', 'r'],
          keywords: 'go-reminder',
          section: 'Go To',
          perform: () => router.push(ROUTES.reminder),
          icon: ClockCountdownIcon,
        },
      ],
    },
  ];

  return { actions };
};
