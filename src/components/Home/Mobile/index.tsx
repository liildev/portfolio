import Text from "../Text";
import { Block, Center, Container, Typography } from "@/components";

export default function Mobile({ toggle }: { toggle: boolean }) {
  return (
    <Container logo>
      <Center toggle={!toggle}>
        <Typography level={1}>
          <Block>
            <Text level={1}>Hello.</Text>
          </Block>
          <Block>
            <Text level={2}>I am</Text>
          </Block>
          <Block>
            <Text level={3}>Liil Dev</Text>
          </Block>
        </Typography>
      </Center>
    </Container>
  );
}
