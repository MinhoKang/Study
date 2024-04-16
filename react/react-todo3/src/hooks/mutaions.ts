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
  const accessToken = sessionStorage.getItem("accessToken")!;

  const { mutate: addTodoItem } = useMutation({
    mutationFn: (todo: string) => addTodo(todo, accessToken),
    onMutate: async (todo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const prevTodo = (queryClient.getQueryData(["todos"]) as oldTodo)?.data;
      const newTodoId = prevTodo[prevTodo.length - 1].id + 1 ?? 0;
      const newTodo = [...prevTodo, { id: newTodoId, todo }];
      queryClient.setQueryData(["todos"], newTodo);
      return { prevTodo };
    },
    onError: (context) => {
      console.log("error");
      queryClient.setQueryData(["todos"], context.prevTodo);
      // queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onSettled: () => {
      console.log("refetch");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const { mutate: deleteTodoItem } = useMutation({
    mutationFn: (id: number) => deleteTodo(id, accessToken),
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

  const { mutate: editTodoItem } = useMutation({
    mutationFn: ({ edited, id }: { edited: string; id: number }) =>
      editTodo(edited, id, accessToken),
    onMutate: async ({ edited, id }) => {
      console.log(id); // edited, id, accessToken
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

  return { addTodoItem, deleteTodoItem, editTodoItem };
};
