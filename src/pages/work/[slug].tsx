import { ISlug } from "typings";
import { urlFor } from "@/libs";
import { Fragment } from "react";
import { useSlug, useWhite } from "@/hooks";

import {
  SEO,
  Link,
  Block,
  Thumb,
  Error,
  Content,
  Wrapper,
  Container,
  Typography,
} from "@/components";

export default function Slug() {
  const { work, error, loading } = useSlug();

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
  }: ISlug = work;

  useWhite();

  if (loading) return;

  if (error) return <Error black />;

  return (
    <Fragment>
      <SEO title={title} description={about} color="#fff" />

      <div className="block-image-overflow">
        <Container>
          <Wrapper>
            <Block>
              <Typography level={2}>{title}</Typography>
            </Block>

            <Block>
              <Typography>{sub_title}</Typography>
            </Block>

            {img.length !== 0 && (
              <Thumb src={urlFor(img).url()} title={title} />
            )}

            <Content>
              <Typography level={4}>About</Typography>

              <p>{about}</p>

              {play_market && (
                <Link href={play_market}>{title} on the Play Market</Link>
              )}

              {app_store && (
                <Link href={app_store}>{title} on the App Store</Link>
              )}

              {code && <Link href={code}>{title} on the GitHub</Link>}

              <Link href={source}>{title} Website</Link>

              <blockquote>
                {tags.map((tag: string) => (
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
