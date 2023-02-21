import React from "react";
import Block from "../Block";
import Wrapper from "../Grid/Wrapper";
import Container from "../Grid/Container";

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
