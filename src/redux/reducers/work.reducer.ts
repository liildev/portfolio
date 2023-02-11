import type { RootState } from "@/redux";
import { createReducer } from "@reduxjs/toolkit";
import { IWork } from "typings";
import { getWorks } from "../actions/work.action";

// declaring the types for our state
export type workState = {
  works: IWork[] | [];
  loading: boolean;
  error: boolean;
};

const initialState: workState = {
  works: [],
  loading: false,
  error: false,
};

export const workReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getWorks.pending, (state) => {
      state.loading = true;
      state.works = []
      state.error = false;
    })
    .addCase(getWorks.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.works = payload;
    })
    .addCase(getWorks.rejected, (state) => {
      state.loading = false;
      state.error = true;
      state.works = []
    });
});

export const worksSelector = (state: RootState) => state.works;

export default workReducer;
