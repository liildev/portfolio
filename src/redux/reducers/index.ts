import type { RootState } from "@/redux";
import { createReducer } from "@reduxjs/toolkit";
import { ISlug, IWork } from "typings";
import { getWork, getWorks } from "../actions";

export type workState = {
  data: { works: IWork[] | [], work: ISlug | {} };
  loading: boolean;
  error: boolean;
};

const initialState: workState = {
  data: {
    works: [],
    work: {},
  },
  loading: false,
  error: false,
};

export const workReducer = createReducer(initialState, (builder) => {
  // Get All
  builder
    .addCase(getWorks.pending, (state) => {
      state.loading = true;
      state.data.works = [];
      state.error = false;
    })
    .addCase(getWorks.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.data.works = payload;
    })
    .addCase(getWorks.rejected, (state) => {
      state.loading = false;
      state.error = true;
      state.data.works = [];
    });

  // Get One
  builder
    .addCase(getWork.pending, (state) => {
      state.loading = true;
      state.data.work = {};
      state.error = false;
    })
    .addCase(getWork.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.data.work = payload;
    })
    .addCase(getWork.rejected, (state) => {
      state.loading = false;
      state.error = true;
      state.data.work = {};
    });
});

export const workSelector = (state: RootState) => state.work;

export default workReducer;
