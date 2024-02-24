import { ReactElement } from "react";
import { usePathname } from "next/navigation";
import { GradientTitle, styles, Main, Container, Content } from "./styles";
import { ROUTES } from "~/constants";

type Props = {
  tagline?: string;
  primaryColor: string;
  secondaryColor: string;
  children: ReactElement;
};

export const Layout = ({ children }: Props) => {
  const { tagline, primaryColor, secondaryColor } = children.props;

  const path = usePathname();
  const isHome = path === ROUTES.home;

  return (
    <Main css={styles.main(primaryColor, isHome)}>
      <Content>
        <Container>
          {tagline && (
            <GradientTitle css={styles.title(primaryColor, secondaryColor)}>
              {tagline}
            </GradientTitle>
          )}

          {children}
        </Container>
      </Content>
    </Main>
  );
};
