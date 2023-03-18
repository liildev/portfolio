export default function Label({ title }: {title: string}) {
  return (
    <div
      className={`on-hover-40 hidden md:block animate ${
        title === "hello"
          ? "label-hello"
          : title === "dev"
          ? "label-liildev delay08"
          : title === "me" && "label-iam delay04"
      }`}
    />
  );
}
