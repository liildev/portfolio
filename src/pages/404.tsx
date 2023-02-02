import { Block, Wrapper, Container } from "@/components";

export default function NotFound() {
  return (
    <Container>
      <Wrapper>
        <Block>
          <h2>Page not found</h2>
          <p className="small-size">Sorry, there is nothing to see here</p>
        </Block>
      </Wrapper>
    </Container>
  );
}
