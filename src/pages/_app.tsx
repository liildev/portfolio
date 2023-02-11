import type { AppProps } from "next/app";
import { store } from "@/redux";
import { useTag } from "@/hooks";
import { Provider } from "react-redux";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  useTag();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
