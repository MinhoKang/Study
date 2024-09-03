"use server";

import { revalidateTag } from "next/cache";
import { getCookie } from "../../utils/cookie";

export const addTodo = async (_: any, formData: FormData) => {
  const todo = formData.get("todo")?.toString();
  const accessToken = getCookie("accessToken")?.value;

  if (!todo || !accessToken) {
    return {
      status: false,
      error: "오류가 발생했습니다.",
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/todo`,
      {
        method: "POST",
        body: JSON.stringify({ todo }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) throw new Error(response.statusText);

    revalidateTag("todos");

    return {
      status: true,
      error: "",
    };
  } catch (error) {
    return {
      status: false,
      error: "투두 추가를 실패했습니다.",
    };
  }
};
