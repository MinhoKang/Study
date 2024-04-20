import { useQuery } from "@tanstack/react-query";
import { getTodo } from "./todo/getTodo";

export const useGetTodoQuery = (keyword?: string) => {
  console.log(keyword);
  const accessToken = sessionStorage.getItem("accessToken")!;
  const { data: todos, isError: getTodoError } = useQuery({
    queryKey: ["todos", keyword],
    queryFn: () => getTodo(accessToken, keyword),
    select: (data) => data?.data,
  });

  return { todos, getTodoError };
};
