import type { RootState } from "@/redux";
import { createReducer } from "@reduxjs/toolkit";
// import { IProject } from "typings";
import { getProject } from "../actions/project.action";

export type projectState = {
  project: any;
  loading: boolean;
  error: boolean;
};

const initialState: projectState = {
  project: {},
  loading: false,
  error: false,
};

export const projectReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getProject.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.project = {};
    })
    .addCase(getProject.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.project = payload;
    })
    .addCase(getProject.rejected, (state) => {
      state.loading = false;
      state.error = true;
      state.project = {};
    });
});

export const projectSelector = (state: RootState) => state.project;

export default projectReducer;
