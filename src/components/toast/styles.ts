import * as ToastPrimitive from "@radix-ui/react-toast";
import { styled, keyframes } from "~/config";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(20px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 1, transform: "translateY(0)" },
  "100%": { opacity: 0, transform: "translateY(20px)" },
});

export const setIconColor = (color: string) => ({
  color,
});

export const Root = styled(ToastPrimitive.Root, {
  background: "$hover",
  borderRadius: "4px",
  border: "1px solid rgb(48, 50, 54)",
  boxShadow: "rgb(0 0 0 / 8%) 0px 4px 13px",
  color: "rgb(138, 143, 152)",
  fontSize: "14px",
  overflow: "hidden",
  margin: "0px",
  padding: "12px",
  display: "flex",
  zIndex: 2,
  '&[data-state="open"]': {
    animation: `100ms ease-in forwards ${slideUpAndFade}`,
  },
  '&[data-state="closed"]': {
    animation: `100ms ease-in forwards ${slideDownAndFade}`,
  },
});

export const IconContainer = styled("div", {
  fontSize: "16px",
  marginTop: "-2px",
  marginRight: "8px",
});

export const Title = styled(ToastPrimitive.Title, {
  color: "$primary",
  marginBottom: "8px",
  "@bp1": { marginBottom: "4px" },
});

export const Description = styled(ToastPrimitive.Description, {
  marginTop: "-5px",
  lineHeight: "16px",
  "@bp1": { lineHeight: "28px" },
});

export const Close = styled(ToastPrimitive.Close, {
  position: "absolute",
  right: "0",
  top: "0",
  width: "32px",
  height: "32px",
  background: "transparent",
  border: "0",
  fontSize: "18px",
  color: "rgb(138, 143, 152)",
  cursor: "pointer",
  transition: "color 0.2s ease-in-out",
  "&:hover": { color: "$primary" },
});

export const Viewport = styled(ToastPrimitive.Viewport, {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  zIndex: 2,
});
