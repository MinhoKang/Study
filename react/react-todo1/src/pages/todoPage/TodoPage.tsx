import { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import { initialState, reducer } from "../../store/store";
import TodoList from "./components/TodoList";

const TodoPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const addTodo = (text: string) => dispatch({ type: "add", text: text });
  const deleteTodo = (seq: number) => dispatch({ type: "delete", seq: seq });
  return (
    <div>
      <h1>Todo page</h1>
      <div>
        <TodoForm add={addTodo} />

        {<TodoList state={state} onDelete={deleteTodo} />}
      </div>
    </div>
  );
};

export default TodoPage;
