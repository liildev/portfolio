import { Fragment } from "react";
import { contactMeta, socialLinks } from "@/constants";
import {
  SEO,
  Link,
  Block,
  Content,
  Wrapper,
  Container,
  Typography,
} from "@/components";

export default function Contact() {
  const { title, description } = contactMeta();

  return (
    <Fragment>
      <SEO title={title} description={description} />
      <Container>
        <Wrapper>
          <Block>
            <Typography h2>Let&apos;s make something great!</Typography>
          </Block>

          <Content>
            <Typography h4>Contact</Typography>

            <p>
              I&apos;m seeking out opportunities to collaborate with companies /
              agencies / individuals, not just work for them. I want to bring my
              collective design experience to the table where we can work
              together to solve real business-problems in a way that optimizes
              all of our respective experience and knowledge.
            </p>
            <p>
              I want to avoid subjective pissing-matches, and favor open-minded
              collaborators where egos are out of the equation. If that all
              sounds about right, then lets for sure chat about how we can work
              together.
            </p>
            <p>Feel free to reach out through any platforms bellow:</p>

            <ul className="contact-list">
              {socialLinks.map(({ id, link, title }) => (
                <li key={id}>
                  <Link href={link}>{title}</Link>
                </li>
              ))}
            </ul>
          </Content>
        </Wrapper>
      </Container>
    </Fragment>
  );
}
