import { workMeta } from "@/constants";
import { getWorks } from "@/redux/actions";
import { workSelector } from "@/redux/reducers";
import { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { SEO, Error, Wrapper, WorkItem, Container } from "@/components";

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
          {works.map((work) => (
            <WorkItem key={work._id} work={work} />
          ))}
        </Wrapper>
      </Container>
    </Fragment>
  );
}
