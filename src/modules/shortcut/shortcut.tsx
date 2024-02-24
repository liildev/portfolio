import { useKBar } from "kbar";
import { useShortcut } from "./utils";
import { ButtonPrimary } from "~/ui";

export const Shortcut = () => {
  const { query } = useKBar();
  const { mounted, isMac, isMobile } = useShortcut();

  return (
    <ButtonPrimary as="button" onClick={query.toggle}>
      {!mounted ? (
        <></>
      ) : isMobile ? (
        <>Tap to start →</>
      ) : (
        <>
          Press <kbd>{isMac ? "⌘" : "ctrl"}</kbd> <kbd>K</kbd> to start →
        </>
      )}
    </ButtonPrimary>
  );
};
