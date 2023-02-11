import { client } from "@/libs";
import { workQuery } from "@/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const getWorks = createAsyncThunk("get/works", async () => {
  // const { data } = await axios.get(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/works`
  // );
  // return data.works;

  const res = await client.fetch(workQuery);
  return res;
});
