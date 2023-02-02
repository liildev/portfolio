import { cvMeta, skills } from "@/constants";
import { useWhite } from "@/hooks";
import { SEO, Block, Content, Wrapper, Container } from "@/components";

export default function CV() {
  const { path, title, description } = cvMeta;

  useWhite();

  return (
    <>
      <SEO path={path} title={title} description={description} color="#fff" />

      <div className="text-black">
        <Container>
          <Wrapper>
            <Block>
              {/* <h2>Resume</h2> */}
              <h2>In procces...</h2>
            </Block>

            {/* <Block>
            <p className="medium-size">Tashkent, Uzbekistan</p>
          </Block> */}

            {/*
          <Content>
            <h4>Summary</h4>
            <ul>
              <li>
                About a year of industry experience in Frontend and Backend
                Development.
              </li>
              <li>
                Top skills include React and Node. Experienced working in
                fast-paced, Agile, and Scrum project management methodologies.
              </li>
              <li>
                Strong design, coding, and debugging skills using JavaScript and
                its technology.
              </li>
              <li>
                Solid understanding of algorithms, data structures, and
                object-oriented programming.
              </li>
              <li>
                Experience working with APIs. Collaborated with backend
                engineers to develop REST API contracts
              </li>
              <li>
                Experience working with a collaboration team on GitHub and GIT.
              </li>
            </ul>

            <h4>Work Expreience</h4>

            <div className="flex items-center justify-between">
              <b className="font-bold text-xl">Mentor assistant</b>
              <em>September 2022 - Present</em>
            </div>

            <ul>
              <li>
                Help over 27 students with programming and web development.
              </li>
              <li>
                Providing students with an hour of practice after the lesson on
                topics covered
              </li>
              <li>
                At the end of each month, take tests from students according to
                the criteria and provide feedback on their results
              </li>
              <li>
                Individual work with students who have difficulties learning a
                lesson
              </li>
              <li>
                Discussed and solved about 100 simple and medium tasks from
                Leetcode and Codewars
              </li>
            </ul>

            <h4>Skills</h4>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map(({ name, url }) => (
                <img
                  src={url}
                  className="max-w-[80px] max-h-[50px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition ease-out duration-300 object-contain"
                  alt={name}
                />
              ))}
            </div>
          </Content> */}
          </Wrapper>
        </Container>
      </div>
    </>
  );
}
