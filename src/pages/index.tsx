import { Layout, SEO, Shortcut } from "~/modules";
import { Animation } from "~/components";

export async function getStaticProps() {
  const props = {
    image: "ld.jpg",
    description: "Obsessed with developer experience",
  };

  return { props };
}

export default function Page({ image, description }: Props) {
  return (
    <>
      <SEO image={image} description={description} />

      <h1>Liil Dev</h1>
      <p>
        <strong>Software Developer</strong>

        <br />

        {description}
      </p>

      <Shortcut />

      <Animation />
    </>
  );
}

Page.Layout = Layout;
