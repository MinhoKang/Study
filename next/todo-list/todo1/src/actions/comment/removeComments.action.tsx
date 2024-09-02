"use server";

import { revalidateTag } from "next/cache";
import { getCookie } from "../../../utils/cookie";

export const removeComments = async ({
  id,
  commentId,
}: {
  id: number;
  commentId: number;
}) => {
  const accessToken = getCookie("accessToken")?.value;

  if (!id || !accessToken) return null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/todo/${id}/comment/${commentId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("accessToken")?.value}`,
        },
      }
    );

    if (!response.ok) throw new Error(response.statusText);

    revalidateTag(`comments`);
  } catch (error) {
    console.log(error);
  }
};
