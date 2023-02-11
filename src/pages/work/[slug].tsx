import { urlFor } from "@/libs";
import { useRouter } from "next/router";
import { getProject } from "@/redux/actions/project.action";
import { projectSelector } from "@/redux/reducers/project.reducer";
import { Fragment, useEffect } from "react";
import { useWhite, useAppDispatch, useAppSelector } from "@/hooks";

import {
  SEO,
  Link,
  Block,
  Thumb,
  Error,
  Content,
  Wrapper,
  Container,
} from "@/components";

export default function Project() {
  const dispatch = useAppDispatch();
  const { project, loading, error } = useAppSelector(projectSelector);
  const {
    isReady,
    asPath,
    query: { slug },
  } = useRouter();

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

  useEffect(() => {
    if (isReady) {
      dispatch(getProject(slug));
    }
  }, [dispatch, isReady, slug]);

  if (loading) return;
  
  if (error) return <Error black />;

  return (
    <Fragment>
      <SEO path={asPath} title={title} description={about} color="#fff" />

      <div className="block-image-overflow">
        <Container>
          <Wrapper>
            <Block>
              <h2>{project.title}</h2>
            </Block>

            <Block>
              <p className="medium-size">{sub_title}</p>
            </Block>

            {img && <Thumb src={urlFor(img).url()} title={title} />}

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
                {tags?.map((tag: string) => (
                  <b key={tag}>{tag}</b>
                ))}
              </blockquote>
            </Content>
          </Wrapper>
        </Container>
      </div>
    </Fragment>
  );
}
