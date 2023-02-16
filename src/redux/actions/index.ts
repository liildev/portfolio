import { client } from "@/libs";
import { workQuery, slugQuery } from "@/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getWorks = createAsyncThunk("get/works", async () => {
  const works = await client.fetch(workQuery);

  return works;
});

const getWork = createAsyncThunk(
  "get/work",
  async (slug: string | string[] | undefined) => {
    const work = await client.fetch(slugQuery, { slug });

    return work;
  }
);

export { getWork, getWorks };
