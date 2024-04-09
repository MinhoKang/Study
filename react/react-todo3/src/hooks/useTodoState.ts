import { useState } from "react";
import { TodoObj } from "../types/todo";

export const useTodoState = (todo: TodoObj) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.todo);
  const [isCheck, setIsCheck] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  console.log(isEdit, editedTodo, isCheck, isDelete);
  
  return {
    isEdit,
    setIsEdit,
    editedTodo,
    setEditedTodo,
    isCheck,
    setIsCheck,
    isDelete,
    setIsDelete,
  };
};
