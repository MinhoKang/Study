/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../apis/todo/deleteTodo";
import { TodoObj } from "../types";
import { addTodo } from "../apis/todo/addTodo";
import { editTodo } from "../apis/todo/editTodo";

type oldTodo = {
  data: TodoObj[];
  [key: string]: object;
};

export const useMutations = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({
      todo,
      accessToken,
    }: {
      todo: string;
      accessToken: string;
    }) => addTodo(todo, accessToken),
    onMutate: async (newTodo: any) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const prevTodos = queryClient.getQueryData(["todos"]) as any;
      const newTodos = [...prevTodos, newTodo];

      queryClient.setQueryData(["todos"], newTodos);

      return { prevTodos };
    },
    onError: (context: any) => {
      console.log("error");
      console.log(context);
      queryClient.setQueryData(["todos"], context.prevData);
      // queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onSettled: () => {
      console.log("refetch");
    },
  });

  const deleteMuation = useMutation({
    mutationFn: ({ id, accessToken }: { id: number; accessToken: string }) =>
      deleteTodo(id, accessToken),
    onMutate: async (targetTodo) => {
      console.log(targetTodo);
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      console.log(queryClient.getQueryData(["todos"]));
      const prevData = (queryClient.getQueryData(["todos"]) as oldTodo)?.data;
      console.log(prevData);
      const changedData = prevData.filter(
        (todo: TodoObj) => todo.id !== targetTodo.id
      );
      console.log(changedData);
      queryClient.setQueryData(["todos"], changedData);
      return { prevData };
    },
    onError: (context) => {
      queryClient.setQueryData(["todos"], context);
    },
    onSettled: () => {
      console.log("refetch");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const editMutaion = useMutation({
    mutationFn: ({
      edited,
      id,
      accessToken,
    }: {
      edited: string;
      id: number;
      accessToken: string;
    }) => editTodo(edited, id, accessToken),
    onMutate: async ({ edited, id }) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const prevData = (queryClient.getQueryData(["todos"]) as oldTodo)?.data;
      console.log(prevData);
      const changedData = prevData.map((todo: TodoObj) => {
        if (todo.id === id) {
          return { ...todo, todo: edited };
        }
        return todo;
      });
      queryClient.setQueryData(["todos"], changedData);
      return { prevData };
    },
    onError: (context) => {
      queryClient.setQueryData(["todos"], context);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return { mutate, deleteMuation, editMutaion };
};
