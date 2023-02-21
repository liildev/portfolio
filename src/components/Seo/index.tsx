import Head from "next/head";
import { ISeo } from "typings";
import { useRouter } from "next/router";

export default function SEO({ title, color, keywords, description }: ISeo) {
  const { asPath } = useRouter();

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="theme-color" content={color ? color : "#000"} />
      <meta name="msapplication-TileColor" content="#ea0f1e" />
      <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
      <meta
        name="google-site-verification"
        content={process.env.NEXT_PUBLIC_GOOGLE_ID}
      />

      {/* Description */}
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={
          keywords
            ? keywords
            : "liil dev, liildev, liildevuz, web development skills, developer frontend, programming software, web applications, programming languages, source code, frontend and backend, full stack development, software"
        }
      />

      {/* Open Graph data */}
      <meta
        property="og:title"
        content={title ? `${title} | Liil Dev` : "Liil Dev"}
        key="ogtitle"
      />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://liil.dev${asPath}`} />
      <meta property="og:site_name" content="Liil Dev" key="ogsitename" />

      <title>{title ? `${title} | Liil Dev` : "Liil Dev"}</title>

      {/* Icons */}
  		<link href="https://liil.dev" rel="canonical" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/android-chrome-512x512.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}
