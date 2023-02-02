import { FC, PropsWithChildren } from "react";

const Block: FC<PropsWithChildren> = ({ children }) => {
  return <div className="hide-text-block">{children}</div>;
};

export default Block;
