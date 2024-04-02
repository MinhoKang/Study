// import { createContext, useContext, useReducer } from "react";

// const StoreContext = createContext(undefined);
// useReducer
// export const useStore = () => useContext(StoreContext);

type InitialState = { seq: number; content: string }[];
type Action = { type: string; text?: string };

export const initialState: InitialState = [];

export const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case "add": {
      const newTodo = {
        seq: state && state.length,
        content: action.text,
      };
      return [...state, newTodo];
    }
    default:
      return state;
  }
};
