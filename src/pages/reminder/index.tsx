import { SEO } from "~/modules";
import { Layout } from "~/modules";

export async function getStaticProps() {
  const props = {
    title: "Reminder",
    image: "reminder.jpg",
    tagline: "Seven. Eight.",
    description: "Fall down seven times stand up eight.",
    primaryColor: "yellow",
    secondaryColor: "pink",
  };

  return { props };
}

export default function Reminder({ title, image, description }: Props) {
  return (
    <>
      <SEO title={title} image={image} description={description} />

      <p>
        <strong>七転び八起き</strong> (Nana korobi, ya oki) - Fall down <strong>seven</strong> times
        stand up <strong>eight.</strong>
      </p>

      <p>
        <em>- Japanese proverb</em>
      </p>
    </>
  );
}

Reminder.Layout = Layout;
