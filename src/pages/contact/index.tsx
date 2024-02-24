import { Layout } from "~/modules";
import { SEO } from "~/modules";
import { ContactForm } from "~/components";

export async function getStaticProps() {
  const props = {
    title: "Contact",
    image: "contact.jpg",
    tagline: "Email me. Like in the old days.",
    primaryColor: "cyan",
    secondaryColor: "green",
  };

  return { props };
}

export default function Contact({ title, image }: Props) {
  const description = `<strong>I love chatting</strong> with software engineers, tech founders, students, and creators. <strong>I'm a busy person</strong>, so I can't promise that I'll reply to your email right away, but I'll try my best to respond in a timely manner.`;

  return (
    <>
      <SEO title={title} image={image} description={description} />

      <p dangerouslySetInnerHTML={{ __html: description }} />

      <h2>Send an email</h2>

      <ContactForm />
    </>
  );
}

Contact.Layout = Layout;
