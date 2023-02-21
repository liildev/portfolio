import { FC, PropsWithChildren } from "react";

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="top-bottom-margin">{children}</div>;
};

export default Wrapper;
