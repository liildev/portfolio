import { useState } from "react";
import { usePathname } from "next/navigation";
import { useKBar } from "kbar";
import Link from "next/link";
import { LayoutGroup } from "framer-motion";
import { Header, List, ButtonHeader, Icon, Nav, Aside, Logo } from "./styles";
import { Item } from "./item";
import { pages } from "~/constants";
import { ROUTES } from "~/constants";

export const Navbar = () => {
  const pathname = usePathname();
  const { query } = useKBar();
  const [hovered, setHovered] = useState("");

  return (
    <LayoutGroup>
      <Header>
        <Logo href={ROUTES.home} as={Link}>
          ld
        </Logo>

        <Nav>
          <List>
            {pages.map((page) => (
              <Item
                key={page}
                page={page}
                pathname={pathname}
                hovered={hovered}
                setHovered={setHovered}
              />
            ))}
          </List>
        </Nav>

        <Aside>
          <ButtonHeader as="button" type="button" aria-label="Command" onClick={query.toggle}>
            <Icon className="ri-command-line" />
          </ButtonHeader>
        </Aside>
      </Header>
    </LayoutGroup>
  );
};
