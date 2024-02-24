import Link from "next/link";
import { Anchor, NavHovered, NavContainer, styles } from "./styles";
import { ROUTES } from "~/constants";

type Props = {
  page: string;
  hovered: string;
  pathname: string;
  setHovered: (isHovered: string) => void;
};

export const Item = ({ page, hovered, pathname, setHovered }: Props) => {
  const path = page === "Home" ? ROUTES.home : `/${page.toLowerCase()}`;
  const isHovered = hovered === page;

  return (
    <li>
      <Anchor as={Link} href={path}>
        <NavContainer
          onHoverStart={() => setHovered(page)}
          onHoverEnd={() => setHovered("")}
          css={pathname === path ? styles.container : {}}
        >
          {isHovered && (
            <NavHovered
              layoutId="nav"
              initial={styles.navHovered(0)}
              animate={styles.navHovered(1)}
              exit={styles.navHovered(0)}
            />
          )}

          {page}
        </NavContainer>
      </Anchor>
    </li>
  );
};
