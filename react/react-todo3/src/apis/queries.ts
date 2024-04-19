import { useQuery } from "@tanstack/react-query";
import { getTodo } from "./todo/getTodo";

const accessToken = sessionStorage.getItem("accessToken")!;

export const useGetTodoQuery = () => {
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodo(accessToken),
  });
  console.log(todos);
  return { todos };
};
