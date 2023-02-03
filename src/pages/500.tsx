import { Block, Wrapper, Container } from "@/components";

export default function ServerError() {
  return (
    <Container>
      <Wrapper>
        <Block>
          <h2>Something went worng</h2>
          <p className="small-size">Please, try again later</p>
        </Block>
      </Wrapper>
    </Container>
  );
}
