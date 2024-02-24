import { styled } from "~/config";

export const FormContent = styled("form", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
});

export const FormGroup = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "10px",
});

export const Label = styled("label", {
  color: "$secondary",
  textTransform: "uppercase",
  fontSize: "12px",
  fontWeight: "500",
});

export const Input = styled("input", {
  color: "$primary",
  background: "none",
  border: "1px solid $secondary",
  borderRadius: "$borderRadius",
  padding: "10px",
  "&:focus": { outline: "none", borderColor: "$cyan" },
});

export const Textarea = styled("textarea", {
  color: "$primary",
  background: "none",
  border: "1px solid $secondary",
  borderRadius: "$borderRadius",
  padding: "10px",
  "&:focus": { outline: "none", borderColor: "$cyan" },
});

export const Button = styled("button", {
  color: "$background",
  background: "#fff",
  border: "1px solid #fff",
  borderRadius: "$borderRadius",
  cursor: "pointer",
  padding: "10px",
  marginTop: "5px",
  transition: "all 0.2s ease-in-out",
  "&:hover": { background: "transparent", borderColor: "$cyan", color: "$cyan" },
  "&:focus": { background: "transparent", borderColor: "$cyan", color: "$cyan", outline: "none" },
});
