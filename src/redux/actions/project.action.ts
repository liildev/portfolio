import { client } from "@/libs";
import { projectQuery } from "@/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProject = createAsyncThunk(
  "get/project",
  async (slug: string | string[] | undefined) => {
    const project = await client.fetch(projectQuery, { slug });

    return project;
  }
);
