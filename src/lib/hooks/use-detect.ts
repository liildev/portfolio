import { useEffect, useState } from "react";

export const useDetect = () => {
  const [mounted, setMounted] = useState(false);

  const isOs =
    typeof window !== "undefined" ? /Mac|iPhone|iPad|iPod/i.test(navigator.platform) : false;
  const isMac = typeof window !== "undefined" ? /Mac/i.test(navigator.platform) : false;
  const isMobile =
    typeof window !== "undefined" ? /iPhone|iPad|Android/i.test(navigator.platform) : false;

  useEffect(() => {
    setMounted(true);
  }, []);

  return { mounted, isOs, isMac, isMobile };
};
