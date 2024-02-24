import { getCssText } from "~/config";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta content="Liil Dev" name="author" />
        <meta name="msapplication-TileColor" content="#08070b" />
        <meta name="msapplication-TileImage" content="/images/mstile-150x150.png" />
        <meta name="theme-color" content="#08070b" />
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_ID} />
        <meta property="fb:app_id" content={process.env.NEXT_PUBLIC_FACEBOOK_ID} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Liil Dev" key="ogsitename" />
        <meta property="og:image:height" content="640" />
        <meta property="og:image:width" content="360" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@liildev" />

        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/images/favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/images/android-chrome-512x512.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>

      <Main />
      <NextScript />
    </Html>
  );
}
