"use server";

import { TodoProps } from "../../types/types";
import { getCookie } from "../../utils/cookie";

export const editTodo = async ({ id, todo, content }: TodoProps) => {
  const accessToken = getCookie("accessToken")?.value;

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

    if (!response.ok)
      return {
        status: false,
        error: "fetch 실패",
      };

    return {
      status: true,
      error: "",
    };
  } catch (error) {
    console.log(error);

    return {
      status: false,
      error: "오류 발생",
    };
  }
};
