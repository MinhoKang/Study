import axiosInstance from "./api";

export const login = async (id: string, password: string) => {
  if (!id || !password) alert("아이디와 비밀번호를 입력하세요");
  try {
    const response = await axiosInstance.post("/login", {
      id,
      password,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
