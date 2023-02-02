import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useWhite } from "@/hooks";
import { IProject } from "typings";
import { urlFor, fetchProject, client } from "@/libs";
import {
  SEO,
  Link,
  Block,
  Thumb,
  Content,
  Wrapper,
  Container,
} from "../../components";
import { projectQuery } from "@/constants";

interface Props {
  project: IProject;
}

export default function Project({ project }: Props) {
  const { asPath } = useRouter();

  const {
    img,
    code,
    tags,
    about,
    title,
    source,
    sub_title,
    app_store,
    play_market,
  } = project;

  useWhite();

  return (
    <>
      <SEO path={asPath} title={title} description={about} color="#fff" />
      <div className="block-image-overflow">
        <Container>
          <Wrapper>
            <Block>
              <h2>{title}</h2>
            </Block>

            <Block>
              <p className="medium-size">{sub_title}</p>
            </Block>

            <Thumb src={urlFor(img).url()} title={title} />

            <Content>
              <h4>About</h4>

              <p>{about}</p>

              {play_market && (
                <Link href={play_market}>{title} on the Play Market</Link>
              )}

              {app_store && (
                <Link href={app_store}>{title} on the App Store</Link>
              )}

              <Link href={code}>{title} on the GitHub</Link>

              <Link href={source}>{title} Website</Link>

              <blockquote>
                {tags.map((tag) => (
                  <b key={tag}>{tag}</b>
                ))}
              </blockquote>
            </Content>
          </Wrapper>
        </Container>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const slug = query.slug as string;

  const project = await client.fetch(projectQuery, { slug });

  return {
    props: {
      project: project[0],
    },
  };
};
