import { useQuery } from "@tanstack/react-query";
import { getTodo } from "./todo/getTodo";
import { searchTodo } from "./todo/searchTodo";

export const useGetTodoQuery = (keyword?: string) => {
  const accessToken = sessionStorage.getItem("accessToken")!;
  const { data: todos, refetch } = useQuery({
    queryKey: ["todos"], // keyword를 queryKey에 포함
    queryFn: () => {
      if (keyword) {
        return searchTodo(keyword, accessToken); // keyword가 있을 때 검색 함수 실행
      } else {
        return getTodo(accessToken); // keyword가 없을 때 일반 투두 가져오기 함수 실행
      }
    },
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
