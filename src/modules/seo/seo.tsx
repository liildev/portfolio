import Head from "next/head";
import { useRouter } from "next/router";
import { stripHtml, setTitle } from "~/lib";

export const SEO = ({ title, image, description }: ISeo) => {
  const { asPath } = useRouter();

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={stripHtml(description)} />
      <meta
        name="keywords"
        content="liil dev, liildev, web development, developer, software, frontend, programming"
      />

      <meta property="og:title" content={setTitle(title)} key="ogtitle" />
      <meta property="og:description" content={stripHtml(description)} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://liildev.uz${asPath}`} />
      <meta property="og:image" content={`https://liildev.uz/images/${image}`} />
      <meta property="og:image:secure_url" content={`https://liildev.uz/images/${image}`} />

      <meta property="twitter:title" content={setTitle(title)} />
      <meta property="twitter:description" content={stripHtml(description)} />
      <meta property="twitter:image" content={`https://liildev.uz/images/${image}`} />

      <title>{setTitle(title)}</title>
    </Head>
  );
};
