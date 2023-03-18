import Link from "next/link";
import { Fragment } from "react";
import { useWorks } from "@/hooks";
import { workMeta } from "@/constants";
import {
  SEO,
  Block,
  Error,
  Wrapper,
  Container,
  Typography,
} from "@/components";

export default function Work() {
  const { title, description } = workMeta();
  const { works, loading, error } = useWorks();

  if (loading) return;

  if (error) return <Error />;

  return (
    <Fragment>
      <SEO title={title} description={description} />

      <Container>
        <Wrapper>
          {works.map(({ _id, title, sub_title }) => (
            <div key={_id} className="work-block">
              <Link href={`/work/${title.toLowerCase()}`} scroll={true}>
                <Block>
                  <Typography level={2}>{title}</Typography>

                  <Typography size="small">{sub_title}</Typography>
                </Block>
              </Link>
            </div>
          ))}
        </Wrapper>
      </Container>
    </Fragment>
  );
}
