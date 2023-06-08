import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/redux";
import { useTag } from "@/hooks";

export default function App({ Component, pageProps }: AppProps) {
  useTag();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
