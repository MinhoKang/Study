import { useEffect, useState } from "react";
import { TodoObj } from "../types/todo";
import { getTodo } from "../apis/todo/getTodo";

export const useTodo = () => {
  const [todos, setTodos] = useState<TodoObj[]>([]);

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");

    const getTodoList = async () => {
      console.log(accessToken);
      if (!accessToken) return;

      try {
        const result = await getTodo(accessToken);
        if (result && result.data) {
          setTodos(result.data);
        } else {
          console.error("에러");
        }
      } catch (error) {
        console.error(error);
      }
    };

    getTodoList();
  }, []);

  const onChangeTodos = (newTodos: TodoObj[]) => setTodos(newTodos);

  return { todos, onChangeTodos };
};
