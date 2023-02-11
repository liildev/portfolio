import Link from "next/link";
import { useRouter } from "next/router";

export default function Logo() {
  const { pathname } = useRouter();

  const isSlug = pathname === "/work/[slug]";

  return (
    <Link href={`${isSlug ? "/work" : "/"}`}>
      <div className="logo-wrapper">
        <div className="label-logo" />
      </div>
    </Link>
  );
}
