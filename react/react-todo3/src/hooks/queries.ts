import { useQuery } from "@tanstack/react-query";
import { getTodo } from "../apis/todo/getTodo";
import { searchTodo } from "../apis/todo/searchTodo";

const accessToken = sessionStorage.getItem("accessToken")!;
export const useGetTodoQuery = () => {
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodo(accessToken),
  });
  return { todos };
};

export const useSearchQuery = (keyword: string) => {
  const { data: searchedTodos, isLoading } = useQuery({
    queryKey: ["search"],
    queryFn: () => {
      if (!keyword.trim()) {
        return null;
      }
      searchTodo(keyword, accessToken);
    },
  });

  return { searchedTodos, isLoading };
};
