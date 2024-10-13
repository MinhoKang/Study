import { createContext, useContext, useReducer } from "react";

const initialState = {
  isLogin: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isLogin: action.isLogin,
      };
    case "logout":
      return {
        ...state,
        isLogin: action.isLogin,
      };
  }
};

const IsLoginContext = createContext(null);
const IsLoginDispatchContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <IsLoginContext.Provider value={state}>
      <IsLoginDispatchContext.Provider value={dispatch}>
        {children}
      </IsLoginDispatchContext.Provider>
    </IsLoginContext.Provider>
  );
};

export const useLoginState = () => {
  const state = useContext(IsLoginContext);
  if (!state) console.log("로그인해");
  return state;
};

export const useLoginDispatch = () => {
  const dispatch = useContext(IsLoginDispatchContext);
  if (!dispatch) console.log("디스");
  return dispatch || (() => {});
};
