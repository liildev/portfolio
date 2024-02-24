import { forwardRef, isValidElement } from "react";
import { ActionImpl } from "kbar";
import { Action, ActionRow, Kbd, Shortcut, getResultStyle, Box } from "../styles";

interface ResultItemProps {
  item: ActionImpl;
  active: boolean;
}

export const Item = forwardRef<HTMLDivElement, ResultItemProps>(
  ({ item: { icon, name, shortcut }, active }, ref) => {
    if (isValidElement(icon)) {
      const lottieRef = icon.props.lottieRef;

      if (lottieRef && active) {
        lottieRef.current?.play();
      } else {
        lottieRef.current?.stop();
      }
    }

    return (
      <Box ref={ref} css={getResultStyle(active)}>
        <Action>
          {icon}

          <ActionRow>
            <span>{name}</span>
          </ActionRow>
        </Action>

        <Shortcut aria-hidden>
          {shortcut?.map((shortcut) => <Kbd key={shortcut}>{shortcut}</Kbd>)}
        </Shortcut>
      </Box>
    );
  }
);
