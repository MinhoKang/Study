import { api } from "../api";

interface SignUpProps {
  id: string;
  password: string;
  passwordCheck: string;
  phoneNumber: string;
}

export const signUp = async ({
  id,
  password,
  passwordCheck,
  phoneNumber,
}: SignUpProps) => {
  try {
    const response = await api.post(`/signup`, {
      id,
      password,
      passwordCheck,
      phoneNumber,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
