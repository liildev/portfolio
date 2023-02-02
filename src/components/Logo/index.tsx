import { useRouter } from "next/router";

export default function Logo() {
  const { back } = useRouter();

  return (
    <div className="logo-wrapper">
      <div className="label-logo" onClick={() => back()} />
    </div>
  );
}
