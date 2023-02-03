import { IThumb } from "typings";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
};

const client = createClient(config);

const urlFor = (source: IThumb[]) => imageUrlBuilder(client).image(source);

export { client, urlFor };
