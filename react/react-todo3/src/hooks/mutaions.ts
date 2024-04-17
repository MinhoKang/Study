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
      const prevTodo: TodoObj[] | [] =
        queryClient.getQueryData(["todos"]) || [];
      const newTodoId = prevTodo.length
        ? prevTodo[prevTodo.length - 1].id + 1
        : 0;
      const newTodo = [...prevTodo, { id: newTodoId, todo }];
      queryClient.setQueryData(["todos"], newTodo);
      return { prevTodo };
    },
    onError: (context: oldTodo) => {
      queryClient.setQueryData(["todos"], context.prevTodo);
    },
  });

  const { mutate: deleteTodoItem } = useMutation({
    mutationFn: (id: number) => deleteTodo(id, accessToken),
    onMutate: async (targetTodo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const prevData: TodoObj[] | [] =
        queryClient.getQueryData(["todos"]) || [];
      const changedData = prevData.filter(
        (todo: TodoObj) => todo.id !== targetTodo
      );
      queryClient.setQueryData(["todos"], changedData);
      return { prevData };
    },
    onError: (context) => {
      queryClient.setQueryData(["todos"], context);
    },
  });

  const { mutate: editTodoItem } = useMutation({
    mutationFn: ({ edited, id }: { edited: string; id: number }) =>
      editTodo(edited, id, accessToken),
    onMutate: async ({ edited, id }) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const prevData: TodoObj[] | [] =
        queryClient.getQueryData(["todos"]) || [];
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
  });

  return { addTodoItem, deleteTodoItem, editTodoItem };
};
