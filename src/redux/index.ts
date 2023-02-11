import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import workReducer from "./reducers/work.reducer";
import projectReducer from "./reducers/project.reducer";

export const store = configureStore({
  reducer: {
    works: workReducer,
    project: projectReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
