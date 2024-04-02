import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    add: () => {},
    remove: () => {},
    edit: () => {},
  },
});

export const { add, remove, edit } = todoSlice.actions;

export default todoSlice.reducer;
