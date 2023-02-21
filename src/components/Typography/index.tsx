import { ITypography } from "typings";

export default function Typography({
  h1,
  h2,
  h3,
  h4,
  small,
  large,
  children,
}: ITypography) {
  return h1 ? (
    <h1>{children}</h1>
  ) : h2 ? (
    <h2>{children}</h2>
  ) : h3 ? (
    <h3>{children}</h3>
  ) : h4 ? (
    <h4>{children}</h4>
  ) : (
    <p
      className={`${
        small ? "small-size" : large ? "large-size" : "medium-size"
      }`}
    >
      {children}
    </p>
  );
}
