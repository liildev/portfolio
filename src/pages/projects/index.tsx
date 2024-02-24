import { SEO } from "~/modules";
import { LayoutGroup } from "framer-motion";
import { Layout } from "~/modules";
import { AllProjects } from "~/components";
import { allProjects } from "~/data";
import { getTotalProjects } from "~/utils";
import { useDetect } from "~/lib";

export async function getStaticProps() {
  const props = {
    title: "Projects",
    image: "projects.jpg",
    tagline: "Work. Hobby.",
    primaryColor: "purple",
    secondaryColor: "cyan",
  };

  return { props };
}

export default function Projects({ title, image }: Props) {
  const { isOs } = useDetect();
  const description = `I'm obsessed with side project and <strong>building in public</strong>. Here you can navigate to <strong>${getTotalProjects(allProjects(isOs))} different</strong> websites I've built. Some projects are still active, others have been discontinued.`;

  return (
    <>
      <SEO title={title} image={image} description={description} />

      <LayoutGroup>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>All Projects</h2>

        {allProjects(isOs).map(AllProjects)}
      </LayoutGroup>
    </>
  );
}

Projects.Layout = Layout;
