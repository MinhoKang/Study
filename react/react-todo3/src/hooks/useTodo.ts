import { useEffect, useState } from "react";
import { TodoObj } from "../types/todo";
import { getTodo } from "../apis/todo/getTodo";
import { addTodo } from "../apis/todo/addTodo";
import { deleteTodo } from "../apis/todo/deleteTodo";
import { editTodo } from "../apis/todo/editTodo";

export const useTodo = () => {
  const [todos, setTodos] = useState<TodoObj[]>([]);
  const onChangeTodos = (newTodos: TodoObj[]) => setTodos(newTodos);

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
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
  }, []);

  const onAddTodo = async (todo: string) => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (!accessToken) return;
    const response = await addTodo(todo, accessToken);
    onChangeTodos(response?.data.data.todos);
  };

  const onDeleteTodo = async (id: number) => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (!accessToken) return;
    const response = await deleteTodo(id, accessToken);

    console.log("삭제", response);
    const newTodos = await todos.filter((todo) => todo.id !== id);
    console.log("newTodos", newTodos);
    await onChangeTodos(newTodos);
    console.log("todos", todos);
  };

  const onEditTodo = async (edited: string, id: number) => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (!accessToken) return;
    const response = await editTodo(edited, id, accessToken);
    console.log(response);
  };

  return { todos, onChangeTodos, onAddTodo, onDeleteTodo, onEditTodo };
};
