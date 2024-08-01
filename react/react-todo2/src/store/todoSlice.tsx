import { createSlice } from "@reduxjs/toolkit";

export type TodoList = { id: number; text: string; isComplete: boolean }[];

const todoSlice = createSlice({
  name: "todo",
  initialState: [] as TodoList,
  reducers: {
    add: (state, action) => {
      return [...state, action.payload];
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    complete: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isComplete: !item.isComplete,
          };
        }
        return item;
      });
    },
    edit: () => {},
  },
});

export const { add, remove, complete, edit } = todoSlice.actions;

export default todoSlice.reducer;
