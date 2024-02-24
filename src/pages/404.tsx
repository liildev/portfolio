import { Layout, ShortcutError } from "~/modules";

export default function Custom404() {
  return <ShortcutError code={404} />;
}

Custom404.Layout = Layout;
