"use server";

import { z } from "zod";

const formSchema = z
  .object({
    id: z.string().email({ message: "이메일 형식으로 입력하세요." }),
    password: z
      .string()
      .min(6, { message: "비밀번호는 최소 6자 이상이어야 합니다." })
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
        message: "비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.",
      }),
    passwordCheck: z
      .string()
      .min(6, { message: "비밀번호는 최소 6자 이상이어야 합니다." })
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
        message: "비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.",
      }),
    phoneNumber: z
      .string()
      .refine((value) => value.startsWith("010"), {
        message: "010으로 시작하는 11자리 숫자를 입력하세요.",
      })
      .refine((value) => value.length >= 11, {
        message: "연락처는 11자리여야 합니다.",
      }),
  })
  .refine((data) => data.password === data.passwordCheck, {
    path: ["passwordCheck"],
    message: "비밀번호가 일치하지 않습니다.",
  });

export const signup = async (_: any, formData: FormData) => {
  const params = formSchema.safeParse({
    id: formData.get("id")?.toString(),
    password: formData.get("password")?.toString(),
    passwordCheck: formData.get("passwordCheck")?.toString(),
    phoneNumber: formData.get("phoneNumber")?.toString(),
  });
  
  if (!params.success) {
    const { fieldErrors } = params.error.flatten();
    console.log("!params.success");
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
      state: true,
      error: "",
    };
  } catch (error) {
    console.log(error);

    return {
      status: false,
      error: "회원가입에 실패 했습니다.",
    };
  }
};
