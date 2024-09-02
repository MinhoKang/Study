"use server";

import type { TodoProps } from "../types/types";
import { getCookie } from "./cookie";

export const getTodoById = async (id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/todos`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")?.value}`,
        },
      }
    );
    const allTodos: TodoProps[] = await response.json();

    const targetTodo = allTodos.filter((todo) => todo.id === Number(id))[0];
    return targetTodo;
  } catch (error) {
    return null;
  }
};
