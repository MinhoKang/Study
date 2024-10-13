import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setTodos } from "../../store/todoSlice";
import { useDispatch } from "react-redux";

export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async (accessToken: string, { rejectWithValue }) => {
    const dispatch = useDispatch();

    if (!accessToken) {
      return rejectWithValue("Access token not found");
    }
    try {
      const response = await axiosInstance.get("/todos", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("zzzz", response.data);
      //   dispatch(setTodos(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
