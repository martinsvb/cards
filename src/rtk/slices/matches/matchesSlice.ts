import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Matches } from "../../../types/matches";

export const initialState: Matches = {
  value: 0,
  suit: 0,
};

const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    logout: () => initialState,
    increaseValue: (state) => {
      state.value = state.value + 1;
    },
    increaseSuit: (state) => {
      state.suit = state.suit + 1;
    },
  },
});

export const { increaseSuit, increaseValue } = matchesSlice.actions;

export default matchesSlice.reducer;

export const selectMatches = (state: RootState) => state.matches;
