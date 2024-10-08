import { useQuery } from "@tanstack/react-query";
import { getTodo } from "./todo/getTodo";

export const useGetTodoQuery = (keyword?: string) => {
  const accessToken = sessionStorage.getItem("accessToken")!;
  const { data: todos, isError: getTodoError } = useQuery({
    queryKey: ["todos", keyword],
    queryFn: () => getTodo(accessToken, keyword),
  });

  return { todos, getTodoError };
};
