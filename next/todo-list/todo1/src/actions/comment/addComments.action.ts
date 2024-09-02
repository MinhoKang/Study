"use server";

import { revalidateTag } from "next/cache";
import { getCookie } from "../../../utils/cookie";

export const addComments = async ({
  id,
  content,
}: {
  id: number;
  content: string;
}) => {
  const accessToken = getCookie("accessToken")?.value;

  if (!id || !content || !accessToken) return null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/todo/${id}/comment`,
      {
        method: "POST",
        body: JSON.stringify({ content }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("accessToken")?.value}`,
        },
      }
    );

    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();
    revalidateTag(`comments`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
