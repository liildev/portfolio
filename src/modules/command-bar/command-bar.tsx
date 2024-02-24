import { PropsWithChildren } from "react";
import { useCommandBar } from "./utils";
import { KBarProvider, KBarPortal } from "kbar";
import { Positioner, Search, Animator } from "./styles";
import { RenderResults } from "./results";

export const CommandBar = ({ children }: PropsWithChildren) => {
  const { actions } = useCommandBar();

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <Positioner>
          <Animator>
            <Search
              aria-activedescendant="kbar-listbox-item-1"
              placeholder="Type a command or search…"
            />

            <RenderResults />
          </Animator>
        </Positioner>
      </KBarPortal>

      {children}
    </KBarProvider>
  );
};
