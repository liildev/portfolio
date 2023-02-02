import { homeMeta } from "@/constants";
import { useToggle } from "@/hooks";
import {
  SEO,
  Center,
  Animation,
  Container,
  Indication,
  Responsive,
} from "@/components";

export default function Home() {
  const { toggle, click } = useToggle();

  const { description } = homeMeta;

  return (
    <>
      <SEO description={description} />

      <div onClick={click}>
        <div className="hide-mobile">
          <Container logo>
            <Center toggle={!toggle}>
              <Responsive mobile />
            </Center>
          </Container>

          <Indication />
        </div>

        <Container logo>
          <Center>
            <Responsive toggle={toggle} />
          </Center>
        </Container>

        <Animation />
      </div>
    </>
  );
}
