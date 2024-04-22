import { useQuery } from "@tanstack/react-query";
import { getTodo } from "./getTodo";

export const useGetTodoQuery = (keyword?: string) => {
  const accessToken = sessionStorage.getItem("accessToken")!;
  const { data: todos, isError } = useQuery({
    queryKey: ["todos", keyword],
    queryFn: () => getTodo({ accessToken, keyword }),
    select: (data) => data?.data,
  });
  return { todos, isError };
};
