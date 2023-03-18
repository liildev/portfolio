import { Block, Wrapper, Container, Typography } from "@/components";

export default function ServerError() {
  return (
    <Container>
      <Wrapper>
        <Block>
          <Typography level={2}>Something went wrong</Typography>

          <Typography size="small">Please, try again later</Typography>
        </Block>
      </Wrapper>
    </Container>
  );
}
