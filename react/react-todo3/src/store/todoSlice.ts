import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoObj } from "../types/todo";
import { getTodo } from "../apis/todo/getTodo";

interface TodoState {
  todos: TodoObj[];
  loading: "idle" | "pending" | "successed" | "failed";
}

export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async (accessToken: string) => {
    console.log(accessToken);
    const response = await getTodo(accessToken);
    console.log("ggg", response);
    return response.data;
  }
);

const initialState: TodoState = {
  todos: [],
  loading: "idle",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos(state, action: PayloadAction<TodoObj>) {
      state.todos.push(action.payload);
    },
    deleteTodos(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodos(state, action: PayloadAction<{ id: number; edited: string }>) {
      const { id, edited } = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todos[index].todo = edited;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = "successed";
      state.todos = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export const { addTodos, deleteTodos, editTodos } = todoSlice.actions;

export default todoSlice.reducer;
