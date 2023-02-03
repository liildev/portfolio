import type { GetServerSideProps } from "next";
import { IWork } from "typings";
import { workMeta } from "@/constants";
import { fetchWorks } from "@/libs";
import { SEO, Wrapper, WorkItem, Container } from "@/components";

interface Props {
  works: IWork[];
}

export default function Work({ works }: Props) {
  const { path, title, description } = workMeta;

  return (
    <>
      <SEO path={path} title={title} description={description} />

      <Container>
        <Wrapper>
          {works.map((work) => (
            <WorkItem key={work._id} work={work} />
          ))}
        </Wrapper>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const works = await fetchWorks();

  return {
    props: {
      works,
    },
  };
};
