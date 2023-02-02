import { Logo } from "..";
import { IContainer } from "typings";

export default function Container({ logo, children }: IContainer) {
  return (
    <div className="max-width">
      {!logo && <Logo />}
      {children}
    </div>
  );
}
