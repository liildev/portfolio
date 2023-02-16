import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import workReducer from "./reducers";

export const store = configureStore({
  reducer: {
    work: workReducer,
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
