"use server";

import { getCookie } from "../../../utils/cookie";

export const getComments = async (id: number) => {
  const accessToken = getCookie("accessToken")?.value;

  if (!id || !accessToken) return null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/todo/${id}/comments`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        next: { tags: ["comments"] },
      }
    );
    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        "코멘트 불러오기 오류:",
        response.status,
        response.statusText,
        errorText
      );
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("에러", error);
    return null;
  }
};
