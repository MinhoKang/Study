"use server";

import { revalidateTag } from "next/cache";
import { getCookie } from "../../utils/cookie";

export const removeTodo = async (id: number) => {
  const accessToken = getCookie("accessToken")?.value;

  if (!id || !accessToken)
    return {
      status: false,
      error: "id 또는 accessToken이 없습니다.",
    };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/todo?id=${id}`,
      {
        method: "DELETE",
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
      error: `오류가 발생했습니다. ${error}`,
    };
  }
};
