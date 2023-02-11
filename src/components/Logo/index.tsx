import Link from "next/link";
// import { useRouter } from "next/router";

export default function Logo() {
  // const { back } = useRouter();

  return (
    <Link href="/">
      <div className="logo-wrapper">
        <div className="label-logo" />
      </div>
    </Link>
  );
}
