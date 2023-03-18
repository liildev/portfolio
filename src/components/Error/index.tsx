import React from "react";
import { Block, Wrapper, Container } from "@/components";

export default function Error({ black }: { black?: boolean }) {
  return (
    <Container>
      <Wrapper>
        <Block>
          <h2 className={`${black && "text-black"}`}>
            Oops, something went wrong
          </h2>
        </Block>
        <Block>
          <p className={`${black ? "medium-size" : "small-size"}`}>
            Please, try again later
          </p>
        </Block>
      </Wrapper>
    </Container>
  );
}
