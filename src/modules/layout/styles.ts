import { styled } from "~/config";

export const styles = {
  main: (primaryColor: string, isHome: boolean) => ({
    "& ::selection": {
      background: primaryColor ? `$${primaryColor}` : "#ff80bf",
      color: "#000",
      WebkitTextFillColor: "#000",
    },

    ...(isHome && {
      alignItems: "center",
      display: "flex",
      margin: "0 auto",
      "@bp2": { width: 800 },
    }),
  }),

  title: (primaryColor: string, secondaryColor: string) => ({
    backgroundImage: `linear-gradient(
        135deg,
        $${primaryColor} 0%,
        $${secondaryColor} 100%
      );`,
  }),
};

export const Main = styled("main", {
  "@bp2": { padding: "$navHeightDesktop 0" },
  padding: "$navHeightMobile 0 40px 0",
  overflow: "hidden",
  flex: "1 1",
});

export const Container = styled("div", {
  margin: "0 auto",
  maxWidth: "760px",
  padding: "0 20px",
});

export const Content = styled("div", {
  fontSize: "16px",
  lineHeight: "32px",
  color: "$secondary",
  background: "$background",
  position: "relative",
  zIndex: 1,
  height: "100%",
  padding: "20px 0",
  "& .iframe-wrap": {
    height: "0",
    marginBottom: "20px",
    overflow: "hidden",
    paddingBottom: "56.25%",
    paddingTop: "30px",
    position: "relative",
  },
  "& .iframe-wrap iframe": {
    border: "0",
    height: "100%",
    left: "0",
    position: "absolute",
    top: "0",
    width: "100%",
  },
  "& .post-image-caption": {
    color: "$secondary",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: "14px",
  },
  "& .post-image-full": {
    margin: "20px 0 0",
    maxWidth: "initial",
    width: "70vw",
    "@bp2": {
      marginLeft: "calc(-1 * (70vw - 760px) / 2)",
    },
    "@bp4": {
      marginLeft: 0,
    },
  },
  "& .side-by-side": {
    display: "flex",
    width: "90vw",
    margin: "40px 0",
    flexDirection: "row",
    "@bp2": {
      marginLeft: "calc(-1 * (90vw - 760px) / 2)",
    },
    "@bp4": {
      marginLeft: 0,
      flexDirection: "column",
    },
  },
  "& .side-by-side-img": {
    minWidth: "50%",
    "@bp2": {
      minWidth: "100%",
    },
  },
  "& .side-by-side-caption": {
    color: "$secondary",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: "14px",
    marginTop: -30,
  },
});

export const GradientTitle = styled("h1", {
  backgroundSize: "100%",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  MozBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  MozTextFillColor: "transparent",
  WebkitBoxDecorationBreak: "clone",
});
