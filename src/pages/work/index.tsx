import Link from "next/link";
import { workMeta } from "@/constants";
import { Fragment, useEffect } from "react";
import { getWorks, workSelector } from "@/redux";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  SEO,
  Block,
  Error,
  Wrapper,
  Container,
  Typography,
} from "@/components";

export default function Work() {
  const dispatch = useAppDispatch();
  const { title, description } = workMeta();

  const {
    data: { works },
    loading,
    error,
  } = useAppSelector(workSelector);

  useEffect(() => {
    dispatch(getWorks());
  }, [dispatch]);

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
                  <Typography h2>{title}</Typography>

                  <Typography small>{sub_title}</Typography>
                </Block>
              </Link>
            </div>
          ))}
        </Wrapper>
      </Container>
    </Fragment>
  );
}
