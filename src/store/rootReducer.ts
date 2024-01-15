import { combineReducers } from "@reduxjs/toolkit";
import { cutSlice } from "./slices/cutSlice";
import { boardSlice } from "./slices/boardSlice";

export const rootReducer = combineReducers({
  [cutSlice.name]: cutSlice.reducer,
  [boardSlice.name]: boardSlice.reducer,
});
