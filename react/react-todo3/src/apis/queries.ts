import { useQuery } from "@tanstack/react-query";
import { getTodo } from "./todo/getTodo";

export const useGetTodoQuery = () => {
  const accessToken = sessionStorage.getItem("accessToken")!;
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodo(accessToken),
  });

  return { todos };
};
