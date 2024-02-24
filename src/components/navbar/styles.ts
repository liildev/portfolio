import { styled } from "~/config";
import { motion } from "framer-motion";

export const styles = {
  container: {
    color: "$primary",
    "&::after": { opacity: 1 },
  },

  navHovered: (opacity: number) => ({
    opacity,
  }),
};

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  color: "white",
  fontSize: "12px",
  minHeight: "59px",
  width: "100%",
  flexWrap: "wrap",
  position: "absolute",
  top: "0",
  zIndex: 3,
  marginTop: "13px",
  "@bp2": { marginTop: "0" },
});

export const List = styled("ul", {
  margin: "0",
  padding: "0",
  listStyle: "none",
  display: "inline-flex",
  position: "relative",
  top: "5px",
  "@bp1": { justifyContent: "space-around" },
});

export const ButtonHeader = styled("a", {
  appearance: "none",
  background: "transparent",
  border: "none",
  borderRadius: "$borderRadius",
  color: "white",
  cursor: "pointer",
  height: "34px",
  padding: "0 10px",
  "&:hover": { background: "$hover" },
});

export const Icon = styled("i", {
  fontSize: "24px",
  lineHeight: "32px",
});

export const Logo = styled(ButtonHeader, {
  fontWeight: 700,
  fontSize: "32px",
  textDecoration: "none",
  marginLeft: "12px",
  fontFamily: "$heading",
});

export const Nav = styled("nav", {
  textAlign: "center",
  flex: 1,
  order: 2,
  flexBasis: "100%",
  "@bp2": { order: 0, flexBasis: "initial" },
  "@bp3": { overflowX: "scroll", overflowY: "hidden" },
});

export const Aside = styled("div", {
  display: "flex",
  alignItems: "center",
  paddingRight: "12px",
  marginLeft: "auto",
});

export const Anchor = styled("a", {
  border: 0,
  position: "relative",
  "&:hover, &:focus": { opacity: 1 },
});

export const NavContainer = styled(motion.span, {
  color: "$secondary",
  cursor: "pointer",
  display: "inline-block",
  fontSize: "12px",
  fontWeight: 500,
  letterSpacing: "1.2px",
  padding: "20px",
  textDecoration: "none",
  textTransform: "uppercase",
  transition: "color $duration ease-in-out",
  "&:hover": {
    color: "$primary",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    margin: "0px auto",
    top: "18px",
    left: "0px",
    right: "0px",
    height: "1px",
    width: "20px",
    background: "rgb(255, 255, 255)",
    opacity: 0,
    transition: "opacity $duration ease-in-out",
  },
});

export const NavHovered = styled(motion.span, {
  position: "absolute",
  top: "-15px",
  left: "0",
  right: "0",
  background: "$hover",
  padding: 20,
  borderRadius: "$borderRadius",
  zIndex: -1,
});
