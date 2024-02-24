import { styled } from "~/config";

export const styles = {
  dot: {
    margin: "0 20px 0 10px",
  },

  paragraph: {
    marginTop: "16px",
    "@bp2": { marginTop: "-6px" },
  },

  button: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@bp2": { flexDirection: "row" },
});

export const Paragraph = styled("p", {
  "@bp2": { margin: "15px 0" },
});

export const ButtonsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const Section = styled("div", {
  width: "auto",
  "@bp2": { width: "48%" },
});

export const Content = styled("div", {
  marginBottom: 40,
});

export const Description = styled("p", {
  margin: 0,
});

export const Bull = styled("span");
