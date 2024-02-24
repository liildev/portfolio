import Link from "next/link";
import { Anchor, Icon, Title } from "./styles";

type Props = {
  url: string;
  icon: string;
  title: string;
};

export const Item = ({ url, title, icon }: Props) => (
  <Anchor href={url} as={Link} target="_blank">
    <Title>{title}</Title>
    <Icon className={icon} />
  </Anchor>
);
