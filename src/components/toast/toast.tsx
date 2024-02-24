import { useToast } from "~/lib";
import { Root, IconContainer, Title, Description, Close, Viewport, setIconColor } from "./styles";

export const Toast = () => {
  const { toastTitle, toastDescription, isSuccess, showToast, setShowToast } = useToast();

  const iconColor = isSuccess ? "#4cb782" : "#b75c4c";
  const iconName = isSuccess ? "checkbox-circle" : "error-warning";

  return (
    <>
      <Root open={showToast} onOpenChange={setShowToast}>
        <IconContainer css={setIconColor(iconColor)}>
          <i className={`ri-${iconName}-fill`} />
        </IconContainer>

        <div>
          <Title>{toastTitle}</Title>
          <Description>{toastDescription}</Description>
        </div>

        <Close aria-label="Close">
          <span aria-hidden>&times;</span>
        </Close>
      </Root>

      <Viewport />
    </>
  );
};
