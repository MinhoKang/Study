import { useState } from "react";
import { HandleSubmit, TodoObj } from "../types/todo";

import { editTodo } from "../apis/todo/editTodo";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useTodoMutaions } from "../apis/todo/todoMutations";

export const useTodo = () => {
  const [todos, setTodos] = useState<TodoObj[]>([]);
  const [value, setValue] = useState("");
  const onChangeTodos = (newTodos: TodoObj[]) => setTodos(newTodos);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { addMutaion, deleteMutation } = useTodoMutaions();

  const accessToken = sessionStorage.getItem("accessToken");

  const handleSubmit = ({ e, value, setValue }: HandleSubmit) => {
    e.preventDefault();
    console.log(value);
    addMutaion(value);
    setValue("");
  };

  const onDeleteTodo = async (id: number) => {
    deleteMutation(id);
    // await onChangeTodos(newTodos);
  };

  const onEditTodo = async (edited: string, id: number) => {
    if (!accessToken) return;
    const response = await editTodo(edited, id, accessToken);
    const updatedTodo = response!.data.data.todo;
    const updatedIndex = todos.findIndex((todo) => todo.id === updatedTodo.id);
    const updatedTodos = [
      ...todos.slice(0, updatedIndex),
      updatedTodo,
      ...todos.slice(updatedIndex + 1),
    ];
    onChangeTodos(updatedTodos);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return {
    handleSubmit,
    onDeleteTodo,
    onEditTodo,
    handleLogout,
    value,
    setValue,
  };
};
