"use server";

import type { TodoProps } from "../../types/types";
import { getCookie } from "../../utils/cookie";

export const getTodos = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/todos`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")?.value}`,
        },
        next: { tags: ["todos"] },
      }
    );

    if (!response.ok) throw new Error(response.statusText);

    const allTodos: TodoProps[] = await response.json();
    return allTodos;
  } catch (error) {
    console.log(error);
  }
};
