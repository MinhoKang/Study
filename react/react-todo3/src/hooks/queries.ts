import { useQuery } from "@tanstack/react-query";
import { getTodo } from "../apis/todo/getTodo";
import { singUp } from "../apis/signUp";
import { login } from "../apis/login";

export const useGetTodoQuery = () => {
  const accessToken = sessionStorage.getItem("accessToken")!;
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodo(accessToken),
    select: (data) => {
      return data?.data;
    },
  });
};

export const useSignUpQuery = (
  id: string,
  password: string,
  passwordCheck: string,
  phoneNumber: string
) => {
  return useQuery({
    queryKey: ["signUp"],
    queryFn: () => singUp(id, password, passwordCheck, phoneNumber),
  });
};

export const useLoginQuery = (id: string, password: string) => {
  return useQuery({
    queryKey: ["login"],
    queryFn: () => login(id, password),
  });
};
