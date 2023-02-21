import { Block, Wrapper, Container, Typography } from "@/components";

export default function NotFound() {
  return (
    <Container>
      <Wrapper>
        <Block>
          <Typography h2>Page not found</Typography>
          
          <Typography small>Sorry, there is nothing to see here</Typography>
        </Block>
      </Wrapper>
    </Container>
  );
}
