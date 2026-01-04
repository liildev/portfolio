import { ROUTES } from './constants';

export const pagesMeta = {
  main: {
    title: 'Liil Dev',
    description:
      'Frontend engineer focused on performance, precision, and pixel perfection.',
    image: 'me.webp',
  },
  projects: {
    title: 'Projects',
    description: `I'm obsessed with side projects and building in public. Here you can explore a collection of websites I've built over time – some still actively growing, others that served their purpose before sunsetting. Each one represents a unique learning journey.`,
    image: 'projects/main.webp',
    path: ROUTES.projects,
  },
  about: {
    title: 'About',
    description:
      'The path that brought me here - roles, challenges, and growth.',
    image: 'about.webp',
    path: ROUTES.about,
  },
  reminder: {
    title: 'Reminder',
    description: 'Fall down seven times stand up eight.',
    image: 'proverb/main.webp',
    path: ROUTES.reminder,
  },
};
