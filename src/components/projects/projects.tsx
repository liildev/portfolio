import { Fragment } from "react";
import { AllProjects } from "./types";
import { Item } from "./item";

export const Projects = ({ year, projects }: AllProjects, idx: number) => (
  <Fragment key={idx}>
    <h3>{year}</h3>

    <ul>{projects.map(Item)}</ul>
  </Fragment>
);
