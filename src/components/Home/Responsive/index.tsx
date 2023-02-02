import Link from "next/link";
import Text from "../Text";
import Label from "../Label";
import Block from "../../Block";
import { IResponsive } from "typings";

export default function Responsive({ mobile, toggle }: IResponsive) {
  return (
    <h1>
      {mobile ? (
        <>
          <Block>
            <Text>Hello.</Text>
          </Block>
          <Block>
            <Text second>I am</Text>
          </Block>
          <Block>
            <Text third>Liil Dev</Text>
          </Block>
        </>
      ) : (
        <>
          <Link href="/about">
            <Block>
              <Label hello />

              <Text desktop toggle={toggle}>
                About
              </Text>
            </Block>
          </Link>
          <Link href="/work">
            <Block>
              <Label />

              <Text desktop second toggle={toggle}>
                Work
              </Text>
            </Block>
          </Link>
          <Link href="/contact">
            <Block>
              <Label dev />

              <Text desktop third toggle={toggle}>
                Contact
              </Text>
            </Block>
          </Link>
        </>
      )}
    </h1>
  );
}
