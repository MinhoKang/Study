// import { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
// import { initialState, reducer } from "../../store/store";

const TodoPage = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  // console.log(dispatch);
  return (
    <div>
      <h1>Todo page</h1>
      <div>
        <TodoForm
        // add={(text: string) => dispatch({ type: "add", text: text })}
        />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoPage;
