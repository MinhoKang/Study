"use server";

import { revalidateTag } from "next/cache";
import { getCookie } from "../../../utils/cookie";

export const editComments = async ({
  id,
  commentId,
  content,
}: {
  id: number;
  commentId: number;
  content: string;
}) => {
  console.log("수정");
  console.log(id);
  console.log(commentId);
  console.log(content);
  const accessToken = getCookie("accessToken")?.value;

  if (!id || !content || !accessToken) return null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/todo/${id}/comment/${commentId}`,
      {
        method: "PUT",
        body: JSON.stringify({ content }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("accessToken")?.value}`,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text(); // 에러 내용을 텍스트로 읽기
      console.error(
        "서버 오류:",
        response.status,
        response.statusText,
        errorText
      );
      throw new Error(`HTTP error! status222: ${response.status}`);
    }

    const data = await response.json();

    revalidateTag(`comments`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
