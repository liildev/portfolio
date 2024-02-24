import { styled } from "@stitches/react";

export const Wrapper = styled("div", {
  position: "fixed",
  top: 0,
  right: 0,
  zIndex: -1,

  svg: {
    height: "100vh",
    width: "100%",
  },
});
