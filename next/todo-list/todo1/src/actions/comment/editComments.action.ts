"use server";

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
  const accessToken = getCookie("accessToken")?.value;
  console.log(id);
  console.log(content);
  console.log(accessToken);
  console.log(commentId);

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

    console.log("data", data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
