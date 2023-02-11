import { ILink } from "typings";

export default function Link({ children, ...props }: ILink) {
  return (
    <a className="link" target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
