import { workMeta } from "@/constants";
import { getWorks } from "@/redux/actions/work.action";
import { worksSelector } from "@/redux/reducers/work.reducer";
import { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { SEO, Error, Wrapper, WorkItem, Container } from "@/components";

export default function Work() {
  const dispatch = useAppDispatch();
  const { works, loading, error } = useAppSelector(worksSelector);
  const { path, title, description } = workMeta;

  useEffect(() => {
    dispatch(getWorks());
  }, [dispatch]);

  if (loading) return;

  if (error) return <Error />;

  return (
    <Fragment>
      <SEO path={path} title={title} description={description} />

      <Container>
        <Wrapper>
          {works.map((work) => (
            <WorkItem key={work._id} work={work} />
          ))}
        </Wrapper>
      </Container>
    </Fragment>
  );
}
