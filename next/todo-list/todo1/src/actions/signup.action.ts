"use server";

import { formSchema } from "../../types/schema";
import { SignupProps } from "../../types/types";

export const signup = async (_: any, formData: FormData) => {
  const params = formSchema.safeParse({
    id: formData.get("id")?.toString(),
    password: formData.get("password")?.toString(),
    passwordCheck: formData.get("passwordCheck")?.toString(),
    phoneNumber: formData.get("phoneNumber")?.toString(),
  });

  if (!params.success) {
    const { issues } = params.error;

    const fieldErrors: { [key: string]: string } = {};

    // 각 필드에 대한 오류 메시지 추출
    issues.forEach((issue) => {
      const field = issue.path[0]; // 필드 이름
      const message = issue.message; // 오류 메시지
      fieldErrors[field] = message; // 필드에 메시지 맵핑
    });

    return {
      status: false,
      error: "모든 값을 입력하세요",
      fieldErrors,
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params.data),
      }
    );
    if (!response.ok) throw new Error(response.statusText);

    return {
      status: true,
      error: "",
    };
  } catch (error) {
    return {
      status: false,
      error: "회원가입에 실패 했습니다.",
    };
  }
};

export const signup2 = async (params: SignupProps) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      }
    );

    if (!response.ok) throw new Error(response.statusText);

    return {
      status: true,
      error: "",
    };
  } catch (error) {
    return {
      status: false,
      error: "회원가입에 실패 했습니다.",
    };
  }
};
