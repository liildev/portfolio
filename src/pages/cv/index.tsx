import Link from "next/link";
import { Fragment } from "react";
import { useWhite } from "@/hooks";
import { cvMeta, experiences, skills, summaries } from "@/constants";
import {
  SEO,
  Block,
  Stack,
  Content,
  Wrapper,
  Container,
  Typography,
} from "@/components";

export default function CV() {
  const { title, description } = cvMeta();

  useWhite();

  return (
    <Fragment>
      <SEO title={title} description={description} color="#fff" />

      <div className="text-black">
        <Container>
          <Wrapper>
            <Block>
              <Typography level={2}>Resume</Typography>
            </Block>

            <Block>
              <Typography>Tashkent, Uzbekistan</Typography>
            </Block>

            <Content>
              <Typography level={4}>Summaries</Typography>

              <Stack data={summaries} />
            </Content>

            <Content>
              <Typography level={4}>Experience</Typography>

              {experiences.map(({ id, title, time, lists }) => (
                <Stack key={id} time={time} data={lists}>
                  {title}
                </Stack>
              ))}

              <Link href="/contact" className="link">
                Contact
              </Link>
              <Link href="/work" className="link">
                Projects
              </Link>

              <blockquote>
                {skills.map(({ name }) => (
                  <b key={name}>{name}</b>
                ))}
              </blockquote>
            </Content>
          </Wrapper>
        </Container>
      </div>
    </Fragment>
  );
}
