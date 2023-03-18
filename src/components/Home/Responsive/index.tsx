import Link from "next/link";
import Text from "../Text";
import Label from "../Label";
import { Fragment } from "react";
import { IResponsive } from "typings";
import { Block, Typography } from "@/components";

export default function Responsive({ mobile, toggle }: IResponsive) {
  return (
    <Typography level={1}>
      {mobile ? (
        <Fragment>
          <Block>
            <Text level={1}>Hello.</Text>
          </Block>
          <Block>
            <Text level={2}>I am</Text>
          </Block>
          <Block>
            <Text level={3}>Liil Dev</Text>
          </Block>
        </Fragment>
      ) : (
        <Fragment>
          <Link href="/about">
            <Block>
              <Label title="hello" />

              <Text desktop level={1} toggle={toggle}>
                About
              </Text>
            </Block>
          </Link>
          <Link href="/work">
            <Block>
              <Label title="me" />

              <Text desktop level={2} toggle={toggle}>
                Work
              </Text>
            </Block>
          </Link>
          <Link href="/contact">
            <Block>
              <Label title="dev" />

              <Text desktop level={3} toggle={toggle}>
                Contact
              </Text>
            </Block>
          </Link>
        </Fragment>
      )}
    </Typography>
  );
}
