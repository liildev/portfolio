import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/libs/client";
import { IProject } from "typings";
import { projectQuery } from "@/constants";

type Data = {
  project: IProject[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const slug = req.query.slug as string;

  const project: IProject[] = await client.fetch(projectQuery, { slug });

  res.status(200).json({ project });
}
