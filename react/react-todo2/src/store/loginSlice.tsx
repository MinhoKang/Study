import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    changeLoginState: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { changeLoginState } = loginSlice.actions;

export default loginSlice.reducer;
