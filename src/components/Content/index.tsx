import { FC, PropsWithChildren } from "react";

const Content: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-width-70">{children}</div>
  );
};

export default Content;
