import { useState } from "react";

export default function useToggle() {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return { toggle, click: handleClick };
}
