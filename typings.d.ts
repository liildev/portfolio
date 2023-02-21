import { ReactNode } from "react";

interface IWork {
  _id: string;
  title: string;
  sub_title: string;
}

interface ISlug {
  title: string;
  sub_title: string;
  about: string;
  tags: string[];
  code: string;
  source: string;
  app_store: string;
  play_market: string;
  img: IThumb[];
}

interface IData {
  id: number;
  item: string;
}
interface IStack {
  time?: string;
  title?: string;
  data: IData[];
  children?: ReactNode;
}

interface IContainer {
  logo?: boolean;
  children: ReactNode;
}

interface ITypography {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  small?: boolean;
  large?: boolean;
  children: ReactNode;
}

interface IText {
  third?: boolean;
  second?: boolean;
  toggle?: boolean;
  desktop?: boolean;
  children: ReactNode;
}

interface ILabel {
  dev?: boolean;
  hello?: boolean;
}

interface ILink {
  href: string;
  children: ReactNode;
}

interface ICenter {
  toggle?: boolean;
  children: ReactNode;
}

interface IThumb {
  src: string;
  title: string;
}

interface IResponsive {
  mobile?: boolean;
  toggle?: boolean;
}

interface ISeo {
  title?: string;
  color?: string;
  keywords?: string;
  description: string;
}
