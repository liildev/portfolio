import { SEO } from "~/modules";
import { Layout } from "~/modules";
import { All, Bio } from "~/components";

export async function getStaticProps() {
  const props = {
    title: "About",
    image: "about.jpg",
    description:
      "Mansurov Nozim is a Uzbek programmer, You can also call him a front-end, back-end or software developer. He doesn't like to define himself by the work He's done. He defines himself by the work He wants to do. Skills can be taught, personality is inherent. He prefers to keep learning, continue challenging himself, and do interesting things that matter. His abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavors. He's a fast learner, able to pick up new skills and juggle different projects and roles with relative ease.",
    tagline: "Create. Share. Repeat.",
    primaryColor: "pink",
    secondaryColor: "purple",
  };

  return { props };
}

export default function About({ title, image, description }: Props) {
  return (
    <>
      <SEO title={title} image={image} description={description} />

      <h2>Bio</h2>

      <Bio description={description} />

      <h2>Career</h2>

      <All />
    </>
  );
}

About.Layout = Layout;
