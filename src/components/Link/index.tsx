import { ILink } from "typings";

export default function Link({ href, onClick, children }: ILink) {
  return (
    <a
      href={href}
      className="link"
      rel="noopener noreferrer"
      target="_blank"
      onClick={onClick}
    >
      {children}
    </a>
  );
}
