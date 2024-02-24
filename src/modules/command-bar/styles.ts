import { styled } from "~/config";
import { KBarAnimator, KBarPositioner, KBarSearch } from "kbar";

export const Positioner = styled(KBarPositioner, {
  position: "fixed",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  inset: "0px",
  padding: "14vh 16px 16px",
  background: "rgba(0, 0, 0, .8)",
  boxSizing: "border-box",
});

export const Search = styled(KBarSearch, {
  padding: "12px 16px",
  fontSize: "16px",
  width: "100%",
  boxSizing: "border-box",
  outline: "none",
  border: "none",
  margin: 0,
  background: "$command",
  color: "$primary",
});

export const GroupName = styled("div", {
  padding: "8px 16px",
  fontSize: "10px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  background: "$command",
});

export const Kbd = styled("kbd", {
  background: "rgba(255, 255, 255, .1)",
  color: "$secondary",
  padding: "4px 8px",
  textTransform: "uppercase",
});

export const Shortcut = styled("div", {
  display: "grid",
  gridAutoFlow: "column",
  gap: "4px",
});

export const Action = styled("div", {
  display: "flex",
  gap: "8px",
  alignItems: "center",
});

export const ActionRow = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const Animator = styled(KBarAnimator, {
  backgroundColor: "#1a1c1e",
  maxWidth: "600px",
  width: "100%",
  color: "$primary",
  borderRadius: "8px",
  overflow: "hidden",
  "@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))": {
    backgroundColor: "$command",
    WebkitBackdropFilter: "saturate(300%) blur(25px)",
    backdropFilter: "saturate(300%) blur(25px)",
  },

  /* Hide scrollbar for Chrome, Safari and Opera */
  "& > div > div::-webkit-scrollbar": {
    display: "none",
  },

  /* Hide scrollbar for IE, Edge and Firefox */
  "& > div > div": {
    "-ms-overflow-style": "none",
    "scrollbar-width": "none",
  },
});

export const Box = styled("div");

export const getResultStyle = (active: boolean) => ({
  padding: "12px 16px",
  background: active ? "rgba(255, 255, 255, 0.1)" : "$command",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: 0,
  cursor: "pointer",
  color: active ? "$primary" : "$secondary",
});
