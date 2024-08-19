// import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
// import todoSlice from "./todoSlice";

import { AnyAction, combineReducers } from "redux";
import todoSlice from "./todoSlice";

// export const store = configureStore({
//   reducer: {
//     todo: todoSlice,
//   },
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

const combinedReducers = combineReducers({
  todoReducer: todoSlice,
});
export type OurStore = ReturnType<typeof combinedReducers>;
const rootReducer = (
  state: ReturnType<typeof combineReducers>,
  action: AnyAction
) => {
  if(action.type === )
}