import { useQuery } from "@tanstack/react-query";
import { getTodo } from "../apis/todo/getTodo";
import { searchTodo } from "../apis/todo/searchTodo";

const accessToken = sessionStorage.getItem("accessToken")!;
export const useGetTodoQuery = (searchQuery?: string) => {
  const { data: todos } = useQuery({
    queryKey: ["todos", searchQuery],
    queryFn: () => getTodo(accessToken, searchQuery),
    // enabled: !!searchQuery,
  });
  return { todos };
};

// export const useSearchQuery = (keyword: string) => {
//   const { data: searchedTodos, isLoading } = useQuery({
//     queryKey: ["search"],
//     queryFn: () => searchTodo(accessToken, keyword),
//   });

//   return { searchedTodos, isLoading };
// };
