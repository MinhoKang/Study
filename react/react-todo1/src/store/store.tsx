type Todo = { seq: number; content: string };
export type InitialState = Todo[];
export type Action =
  | { type: "add"; text: string }
  | { type: "delete"; seq: number }
  | { type: "edit"; text: string; seq: number };

export const initialState: InitialState = [];

export const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case "add": {
      const newTodo = {
        seq: state.length,
        content: action.text,
      };
      return [...state, newTodo];
    }
    case "delete": {
      return state.filter((todo) => todo.seq !== action.seq);
    }
    case "edit": {
      return;
    }
    default:
      return state;
  }
};
