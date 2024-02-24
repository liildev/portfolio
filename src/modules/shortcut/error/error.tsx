import Link from "next/link";
import { useShortcut } from "../utils";
import { ButtonPrimary } from "~/ui";
import { ROUTES } from "~/constants";
import { Box } from "./styles";

export const Error = ({ code }: { code?: number }) => {
  const { mounted, isMobile } = useShortcut();
  let title = "five hundred";
  let description = "Something isn't right.";

  if (code === 404) {
    title = "four oh four";
    description = "This page doesn't exist.";
  }

  return (
    <Box>
      <h1>{title}</h1>

      <ButtonPrimary as={Link} href={ROUTES.home}>
        {!mounted ? (
          <></>
        ) : isMobile ? (
          <>Tap to go home →</>
        ) : (
          <>
            Press <kbd>G</kbd> <kbd>H</kbd> to go home →
          </>
        )}
      </ButtonPrimary>

      <p>{description}</p>
    </Box>
  );
};
