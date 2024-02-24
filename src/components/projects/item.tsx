import { useDetect } from "~/lib";
import Link from "next/link";
import { Project } from "./types";

export const Item = (project: Project, idx: number) => {
  const { mounted } = useDetect();

  return (
    <li key={idx}>
      {!mounted ? (
        <></>
      ) : project.active ? (
        <Link href={project.url} target="_blank">
          {project.title}
        </Link>
      ) : (
        project.title
      )}
    </li>
  );
};
