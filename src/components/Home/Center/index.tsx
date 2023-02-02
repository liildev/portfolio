import { ICenter } from "typings";

export default function Center({ toggle, children }: ICenter) {
  return (
    <div
      className={`vertical-center ${toggle && "hidden"}`}
    >
      {children}
    </div>
  );
}
