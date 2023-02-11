import Link from "next/link";
import { Fragment } from "react";
import { aboutMeta } from "@/constants";
import { SEO, Block, Content, Wrapper, Container } from "@/components";

export default function About() {
  const { path, title, description } = aboutMeta;
  
  return (
    <Fragment>
      <SEO path={path} title={title} description={description} />

      <Container>
        <Wrapper>
          <Block>
            <h2>I build functional web apps</h2>
          </Block>

          <Content>
            <h4>About</h4>

            <p className="medium-size text-white">
              Hi, I&apos;m Nozim. I&apos;m a full stack developer, specialized
              in development of web applications using React, Node & more.
            </p>

            <p>
              You can also call me a front-end, back-end or software developer.
            </p>
            
            <p>
              I don&apos;t like to define myself by the work I&apos;ve done. I
              define myself by the work I want to do. Skills can be taught,
              personality is inherent. I prefer to keep learning, continue
              challenging myself, and do interesting things that matter.
            </p>

            <p>
              My abundant energy fuels me in the pursuit of many interests,
              hobbies, areas of study and artistic endeavors. I&apos;m a fast
              learner, able to pick up new skills and juggle different projects
              and roles with relative ease.
            </p>

            <p>
              You can read more about my experience, skills, education and much
              more in the attached bellow:
            </p>

            <Link href="/cv" className="link" scroll={true}>
              My resume
            </Link>
          </Content>
        </Wrapper>
      </Container>
    </Fragment>
  );
}
