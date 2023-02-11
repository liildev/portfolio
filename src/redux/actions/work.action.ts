import { client } from "@/libs";
import { workQuery } from "@/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getWorks = createAsyncThunk("get/works", async () => {
  const works = await client.fetch(workQuery);
  
  return works;
});
