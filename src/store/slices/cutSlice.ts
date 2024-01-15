import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICutInitialState, ICutInput, ICutSizes } from "../types";

const initialState: ICutInitialState = {
  cuts: [],
  inputCuts: [],
};

export const cutSlice = createSlice({
  name: "cuts",
  initialState,
  reducers: {
    setCuts: (state, { payload }: PayloadAction<ICutSizes[]>) => {
      state.cuts = payload;
    },
    setInputCuts: (state, { payload }: PayloadAction<ICutInput[]>) => {
      state.inputCuts = payload;
    },
    editCut: (
      state,
      { payload }: PayloadAction<{ cut: ICutInput; index: number }>
    ) => {
      state.inputCuts[payload.index] = payload.cut;
    },
    deleteCut: (state, { payload }: PayloadAction<number>) => {
      state.inputCuts = state.inputCuts.filter((_, i) => i !== payload);
    },
  },
});

export const { setCuts, setInputCuts, editCut, deleteCut } = cutSlice.actions;
