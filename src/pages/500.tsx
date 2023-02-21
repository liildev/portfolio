import { Block, Wrapper, Container, Typography } from "@/components";

export default function ServerError() {
  return (
    <Container>
      <Wrapper>
        <Block>
          <Typography h2>Something went wrong</Typography>

          <Typography small>Please, try again later</Typography>
        </Block>
      </Wrapper>
    </Container>
  );
}
