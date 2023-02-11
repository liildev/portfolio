import { ReactNode } from "react";

interface IWork {
  _id: string;
  title: string;
  sub_title: string;
}

interface IProject {
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

interface IContainer {
  logo?: boolean;
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
  path?: string;
  title?: string;
  color?: string;
  keywords?: string;
  description: string;
}