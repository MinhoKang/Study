import { TodoObj } from "../types";
import { useState } from "react";

export const useTodoState = (todo: TodoObj) => {
  const [todoState, setTodoState] = useState({
    editedTodo: todo.todo,
    isEdit: false,
    isCheck: false,
    isDelete: false,
  });

  const setEditedTodo = (newValue: string) => {
    return setTodoState((prevState) => ({
      ...prevState,
      editedTodo: newValue,
    }));
  };

  const setIsEdit = (newValue: boolean) => {
    return setTodoState((prevState) => ({ ...prevState, isEdit: newValue }));
  };

  const setIsCheck = (newValue: boolean) => {
    return setTodoState((prevState) => ({ ...prevState, isCheck: newValue }));
  };
  const setIsDelete = (newValue: boolean) => {
    return setTodoState((prevState) => ({ ...prevState, isDelete: newValue }));
  };

  return {
    todoState,
    setTodoState,
    setEditedTodo,
    setIsEdit,
    setIsCheck,
    setIsDelete,
  };
};
