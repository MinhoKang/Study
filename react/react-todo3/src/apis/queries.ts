import { useQuery } from "@tanstack/react-query";
import { getTodo } from "./todo/getTodo";

export const useGetTodoQuery = (keyword?: string) => {
  const accessToken = sessionStorage.getItem("accessToken")!;
  const { data: todos, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodo(accessToken, keyword),
    // enabled: !!keyword,
  });

  return { todos, refetch };
};
// export const useGetTodoQuery = () => {
//   const accessToken = sessionStorage.getItem("accessToken")!;
//   const { data: todos } = useQuery({
//     queryKey: ["todos"],
//     queryFn: () => getTodo(accessToken),
//   });

//   return { todos };
// };
