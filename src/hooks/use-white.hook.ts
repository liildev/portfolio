import { useEffect } from "react";

export default function useWhite() {
  useEffect(() => {
    document.body.classList.add("website-background-white");
    document.body.classList.remove("website-background-black");

    return () => {
      document.body.classList.remove("website-background-white");
      document.body.classList.add("website-background-black");
    };
  }, []);
}
