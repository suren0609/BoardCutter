import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBoard, IBoardSliceInitialState } from "../types";

const initialState: IBoardSliceInitialState = {
  boards: [],
};
export const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    setBoards: (state, { payload }: PayloadAction<IBoard[]>) => {
      state.boards = payload;
    },
  },
});

export const { setBoards } = boardSlice.actions;
