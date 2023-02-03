import { client } from "./client";
import { projectQuery, workQuery } from "@/constants";

const fetchWorks = async () => {
  const works = client.fetch(workQuery);

  return works;
};

const fetchProject = async (slug: string) => {
  const project = client.fetch(projectQuery, { slug });

  return project;
};

export { fetchWorks, fetchProject };
