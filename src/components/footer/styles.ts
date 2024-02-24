import { styled } from "~/config";

export const Container = styled("footer", {
  background: "$background",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 0",
});

export const Icon = styled("i", {
  color: "$primary",
  opacity: 1,
  marginLeft: "5px",
  marginTop: "1px",
  fontSize: "24px",
  "@bp2": { opacity: 0, fontSize: "16px" },
});

export const Anchor = styled("a", {
  color: "$secondary",
  display: "flex",
  fontSize: "15px",
  border: 0,
  marginLeft: "20px",
  textDecoration: "none",
  textTransform: "lowercase",
  transition: "color $duration ease-in-out",
  "&:hover, &:focus": {
    color: "$primary",
    opacity: 1,
  },
  [`&:hover ${Icon}`]: {
    transition: "opacity $duration ease-in-out",
    opacity: 1,
  },
  "&:first-child": { margin: "0" },
});

export const Title = styled("span", {
  display: "none",
  "@bp2": { display: "block" },
});
