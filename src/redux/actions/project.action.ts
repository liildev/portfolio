import { client } from "@/libs";
import { projectQuery } from "@/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProject = createAsyncThunk(
  "get/project",
  async (slug: string | string[] | undefined) => {
    // const { data } = await axios.get(
    //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/project?slug=${slug}`
    // );

    // return data.project;
    const res = await client.fetch(projectQuery, { slug });
    return res;
  }
);
