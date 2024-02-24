import { useEffect, useState } from "react";

export const useShortcut = () => {
  const [mounted, setMounted] = useState(false);

  const isMac = typeof window !== "undefined" ? /Mac/i.test(navigator.userAgent) : false;
  const isMobile =
    typeof window !== "undefined" ? /iPhone|iPad|Android/i.test(navigator.userAgent) : false;

  useEffect(() => {
    setMounted(true);
  }, []);

  return { mounted, isMac, isMobile };
};
