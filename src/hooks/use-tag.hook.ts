import { useEffect } from "react";
import TagManger, { TagManagerArgs } from "react-gtm-module";

export default function useTag() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

  useEffect(() => {
    const tagManagerArgs: TagManagerArgs = { gtmId };

    TagManger.initialize(tagManagerArgs);
  }, [gtmId]);
}
