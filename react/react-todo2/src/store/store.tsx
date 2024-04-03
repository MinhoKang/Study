import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import loginSlice from "./loginSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    login: loginSlice,
  },
});
