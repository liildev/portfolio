import Link from "next/link";
import Block from "../Block";
import { IWork } from "typings";

interface Props {
  work: IWork;
}

export default function WorkItem({ work }: Props) {
  const { title, sub_title } = work;

  return (
    <div className="work-block">
      <Link
        href={`/work/${title.toLowerCase()}`}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <Block>
          <h2>{title}</h2>

          <p className="small-size">{sub_title}</p>
        </Block>
      </Link>
    </div>
  );
}
