import Text from "../Text";
import { Block, Center, Container, Typography } from "@/components";

export default function Mobile({ toggle }: { toggle: boolean }) {
  return (
    <Container logo>
      <Center toggle={!toggle}>
        <Typography h1>
          <Block>
            <Text>Hello.</Text>
          </Block>
          <Block>
            <Text second>I am</Text>
          </Block>
          <Block>
            <Text third>Liil Dev</Text>
          </Block>
        </Typography>
      </Center>
    </Container>
  );
}
