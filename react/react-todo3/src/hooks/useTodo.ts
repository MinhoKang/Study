import { useEffect, useState } from "react";
import { TodoObj } from "../types/todo";
import { getTodo } from "../apis/todo/getTodo";
import { addTodo } from "../apis/todo/addTodo";
import { deleteTodo } from "../apis/todo/deleteTodo";
import { editTodo } from "../apis/todo/editTodo";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const useTodo = () => {
  const [todos, setTodos] = useState<TodoObj[]>([]);
  const onChangeTodos = (newTodos: TodoObj[]) => setTodos(newTodos);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const accessToken = sessionStorage.getItem("accessToken");

  useEffect(() => {
    const getTodoList = async () => {
      if (!accessToken) return;
      try {
        const result = await getTodo(accessToken);
        if (result && result.data) {
          setTodos(result.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getTodoList();
  }, [accessToken]);

  const onAddTodo = async (todo: string) => {
    if (!accessToken) return;
    const response = await addTodo(todo, accessToken);
    onChangeTodos(response?.data.data.todos);
  };

  const onDeleteTodo = async (id: number) => {
    if (!accessToken) return;
    await deleteTodo(id, accessToken);
    const newTodos = await todos.filter((todo) => todo.id !== id);
    await onChangeTodos(newTodos);
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

  return { todos, onAddTodo, onDeleteTodo, onEditTodo, handleLogout };
};
