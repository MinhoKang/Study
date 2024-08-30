"use server";

import { setCookie } from "../../utils/cookie";

export const login = async (_: any, formData: FormData) => {
  const id = formData.get("id")?.toString();
  const password = formData.get("password")?.toString();

  if (!id || !password) {
    return {
      status: false,
      error: "아이디와 비밀번호를 입력하세요.",
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, password }),
      }
    );

    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();

    setCookie("accessToken", data.data.accessToken);

    return {
      status: true,
      error: "",
    };
  } catch (error) {
    console.log("로그인 실패", error);
    return {
      status: false,
      error: "로그인에 실패 했습니다.",
    };
  }
};
