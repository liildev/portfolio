import { BASE_URL } from './constants';

export type ProjectSchemaData = {
  name: string;
  description: string;
  url: string;
  image?: string;
  dateCreated?: string;
  keywords?: string[];
};

export function generateProjectSchema(project: ProjectSchemaData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    url: project.url,
    creator: {
      '@type': 'Person',
      '@id': `${BASE_URL}/#person`,
      name: 'Liil Dev',
      url: BASE_URL,
    },
    ...(project.image && {
      image: {
        '@type': 'ImageObject',
        url: `${BASE_URL}${project.image}`,
      },
    }),
    ...(project.dateCreated && {
      dateCreated: project.dateCreated,
    }),
    ...(project.keywords && {
      keywords: project.keywords.join(', '),
    }),
  };
}

export function generateProjectListSchema(projects: ProjectSchemaData[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: generateProjectSchema(project),
    })),
  };
}
