import { ITypography } from "typings";

export default function Typography({ size, level, children }: ITypography) {
  return level === 1 ? (
    <h1>{children}</h1>
  ) : level === 2 ? (
    <h2>{children}</h2>
  ) : level === 3 ? (
    <h3>{children}</h3>
  ) : level === 4 ? (
    <h4>{children}</h4>
  ) : (
    <p
      className={`${
        size === "small"
          ? "small-size"
          : size === "large"
          ? "large-size"
          : "medium-size"
      }`}
    >
      {children}
    </p>
  );
}
