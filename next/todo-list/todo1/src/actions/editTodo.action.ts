"use server";

import { revalidateTag } from "next/cache";
import { TodoProps } from "../../types/types";
import { getCookie } from "../../utils/cookie";

export const editTodo = async ({ id, todo, content }: TodoProps) => {
  const accessToken = getCookie("accessToken")?.value;
  console.log(id);
  console.log(todo);
  console.log(content);
  if (!accessToken)
    return {
      statue: false,
      error: "accessToken이 없습니다",
    };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/todo?id=${id}`,
      {
        method: "PUT",
        body: JSON.stringify({ id, todo, content }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(response);
    if (!response.ok)
      return {
        status: false,
        error: "fetch 실패",
      };

    revalidateTag("todos");
    return {
      status: true,
      error: "",
    };
  } catch (error) {
    return {
      status: false,
      error: "오류 발생",
    };
  }
};
