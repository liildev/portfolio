import type { NextApiRequest, NextApiResponse } from "next";
import { IWork } from "typings";
import { client } from "@/libs/client";
import { workQuery } from "@/constants";

type Data = {
  works: IWork[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const works: IWork[] = await client.fetch(workQuery);

  res.status(200).json({ works });
}
