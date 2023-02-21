import Link from "next/link";
import Text from "../Text";
import Label from "../Label";
import { Fragment } from "react";
import { IResponsive } from "typings";
import { Block, Typography } from "@/components";

export default function Responsive({ mobile, toggle }: IResponsive) {
  return (
    <Typography h1>
      {mobile ? (
        <Fragment>
          <Block>
            <Text>Hello.</Text>
          </Block>
          <Block>
            <Text second>I am</Text>
          </Block>
          <Block>
            <Text third>Liil Dev</Text>
          </Block>
        </Fragment>
      ) : (
        <Fragment>
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
        </Fragment>
      )}
    </Typography>
  );
}
