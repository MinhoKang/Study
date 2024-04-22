import { api } from "../api";

interface loginProps {
  id: string;
  password: string;
}

export const login = async ({ id, password }: loginProps) => {
  console.log(id, password);
  if (!id || !password) alert(`아이디와 비밀번호를 입력하세요`);
  try {
    const response = await api.post(`/login`, {
      id,
      password,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
