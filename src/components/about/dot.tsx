import React, { ReactNode } from "react";
import { Bull, styles } from "./styles";

type Props = {
  margin?: boolean;
  children?: ReactNode;
};

export const Dot = ({ margin, children }: Props) => (
  <Bull css={margin ? styles.dot : {}}> &bull; {children}</Bull>
);
