import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useTag } from "@/hooks";

export default function App({ Component, pageProps }: AppProps) {
  useTag();

  return <Component {...pageProps} />;
}
