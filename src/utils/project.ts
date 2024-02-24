import { AllProjects } from "~/components/projects/types";

export const getTotalProjects = (allProjects: AllProjects[]) => {
  let total = 0;

  for (let i = 0; i < allProjects.length; i++) {
    total += allProjects[i].projects.length;
  }

  return total;
};
