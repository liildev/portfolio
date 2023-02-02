import axios from "axios";
import { IWork, IProject } from "typings";

const fetchWorks = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/works`
  );

  const works: IWork[] = data.works;

  return works;
};

const fetchProject = async (slug: string) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/project?slug=${slug}`
  );

  const project: IProject[] = data.project;

  return project[0];
};

export { fetchWorks, fetchProject };
