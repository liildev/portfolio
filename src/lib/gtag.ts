import { useRouter } from "next/router";
import { useEffect } from "react";

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTM_ID as string;

export const useRouterChange = () => {
  const router = useRouter();

  const pageView = (url: string) => {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  };

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};
