export type Project = {
  title: string;
  url: string;
  active: boolean;
};

export type AllProjects = {
  year: string;
  projects: Project[];
};
