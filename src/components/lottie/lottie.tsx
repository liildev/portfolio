import { LottieOptions, LottieRef } from "lottie-react";
import { StyledLottie, style } from "./styles";

type Props = {
  lottieRef: LottieRef;
  animationData: LottieOptions["animationData"];
  mr?: boolean;
  mb?: boolean;
};

export const Lottie = ({ lottieRef, mr, mb, animationData }: Props) => (
  <StyledLottie
    lottieRef={lottieRef}
    animationData={animationData}
    css={style(mr, mb)}
    loop={false}
    autoplay={false}
  />
);
