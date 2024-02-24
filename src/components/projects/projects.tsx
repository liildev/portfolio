import { Item } from "./item";
import { AllProjects } from "./types";

export const Projects = ({ year, projects }: AllProjects, idx: number) => (
  <div key={idx}>
    <h3>{year}</h3>

    <ul>{projects.map(Item)}</ul>
  </div>
);
