import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getTodo } from "../apis/todo/getTodo";
import { TodoObj } from "../types";
import { addTodo } from "../apis/todo/addTodo";

export const useGetTodoQuery = (
  accessToken: string
): UseQueryResult<TodoObj[], unknown> => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodo(accessToken!),
    select: (data) => {
      return data!.data;
    },
  });
};

export const useAddTodoQuery = (todo: string, accessToken: string) => {
  return useQuery({
    queryKey: ["addTodo"],
    queryFn: () => addTodo(todo, accessToken),
    select: (data) => {
      return data!.data;
    },
  });
};
