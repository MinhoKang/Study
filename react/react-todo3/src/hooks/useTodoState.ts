import { useState } from "react";
import { TodoObj } from "../types/todo";

export const useTodoState = (todo: TodoObj) => {
  const [todoState, setTodoState] = useState({
    editedTodo: todo.todo,
    isEdit: false,
    isCheck: false,
    isDelete: false,
  });

  return {
    todoState,
    setTodoState,
  };
};
