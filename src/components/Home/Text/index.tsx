import { IText } from "typings";

export default function Text({ level, toggle, desktop, children }: IText) {
  return (
    <div
      className={`animate ${desktop && "on-hover-40 md:hidden"} ${
        toggle ? "hidden" : "block"
      } ${
        level === 1
          ? "text-white"
          : level === 2
          ? "delay04 text-red"
          : level === 3 && "delay08 text-red"
      }`}
    >
      {children}
    </div>
  );
}
