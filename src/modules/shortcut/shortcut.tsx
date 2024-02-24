import { useKBar } from "kbar";
import { useDetect } from "~/lib";
import { ButtonPrimary } from "~/ui";

export const Shortcut = () => {
  const { query } = useKBar();
  const { mounted, isMac, isMobile } = useDetect();

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
