import { useQuery } from "@tanstack/react-query";
import { getTodo } from "../apis/todo/getTodo";

export const useGetTodoQuery = () => {
  const accessToken = sessionStorage.getItem("accessToken")!;
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodo(accessToken),
  });
  return { todos };
};

// export const useSearchQuery = (keyword: string) => {
//   const { data: searchedTodos } = useQuery({
//     queryKey: ["search"],
//     queryFn: () => searchTodo(keyword),
//   });
//   console.log(searchedTodos);
//   return { searchedTodos };
// };
