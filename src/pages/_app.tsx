import "~/styles/index.css";
import "remixicon/fonts/remixicon.css";

import type { AppProps } from "next/app";
import { ToastProvider, useRouterChange } from "~/lib";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { CommandBar, Scripts } from "~/modules";
import { Wrapper } from "~/ui";
import { Footer, Navbar, Toast, Noop } from "~/components";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as ComponentWithLayout).Layout || Noop;

  useRouterChange();

  return (
    <>
      <Scripts />

      <ToastProvider>
        <ToastPrimitive.Provider>
          <CommandBar>
            <Wrapper>
              <Navbar />

              <Layout>
                <Component {...pageProps} />
              </Layout>

              <Analytics />
              <SpeedInsights />

              <Footer />
            </Wrapper>

            <Toast />
          </CommandBar>
        </ToastPrimitive.Provider>
      </ToastProvider>
    </>
  );
}
