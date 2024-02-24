import Link from "next/link";
import { Project } from "./types";

export const Item = (project: Project, idx: number) => (
  <li key={idx}>
    <Link href={project.url} target="_blank">
      {project.title}
    </Link>
  </li>
);
