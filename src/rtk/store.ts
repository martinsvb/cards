import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import matches from "./slices/matches/matchesSlice";
import { Matches } from "../types/matches";

type Store = {
  matches: Matches;
};

const reducer = combineReducers<Store>({
  matches,
});

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
