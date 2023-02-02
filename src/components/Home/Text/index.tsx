import { IText } from "typings";

export default function Text({
  third,
  second,
  toggle,
  desktop,
  children,
}: IText) {
  return (
    <div
      className={`animate ${desktop && "on-hover-40 md:hidden"} ${
        toggle ? "hidden" : "block"
      } ${second ? "delay04 text-red" : third ? "delay08 text-red" : "text-white"}`}
    >
      {children}
    </div>
  );
}
