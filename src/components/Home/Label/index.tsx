import { ILabel } from "typings";

export default function Label({ dev, hello }: ILabel) {
  return (
    <div
      className={`on-hover-40 hidden md:block animate ${
        hello ? "label-hello" : dev ? "label-liildev delay08" : "label-iam delay04"
      }`}
    />
  );
}
