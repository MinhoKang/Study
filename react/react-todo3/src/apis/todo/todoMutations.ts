import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "./addTodo";
import { TodoObj } from "../../types";
import { deleteTodo } from "./deleteTodo";

type Context = {
  data: TodoObj[];
  [key: string]: object;
};

export const useTodoMutaions = () => {
  const accessToken = sessionStorage.getItem("accessToken")!;
  const queryClient = useQueryClient();

  const { mutate: addMutaion } = useMutation({
    mutationFn: (todo: string) => addTodo(todo, accessToken),
    onMutate: async (todo) => {
      const prevTodos: TodoObj[] | [] =
        queryClient.getQueryData(["todos"]) || [];
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const newTodoId = prevTodos.length
        ? prevTodos[prevTodos.length - 1].id + 1
        : 0;
      const newTodo = [...prevTodos, { id: newTodoId, todo }];
      queryClient.setQueryData(["todos"], newTodo);
      return { prevTodos };
    },
    onError: (context: Context) => {
      queryClient.setQueryData(["todos"], context.prevTodo);
    },
    onSuccess: (data) => {
      const lastQueryTodoId = (
        queryClient.getQueryData(["todos"]) as TodoObj[]
      ).slice(-1)[0].id;
      const lastServerTodos = data?.data.data.todos;
      const lastServerTodoId = lastServerTodos.slice(-1)[0].id;

      if (lastQueryTodoId !== lastServerTodoId) {
        queryClient.setQueryData(["todos"], lastServerTodos);
      }
    },
  });

  const { mutate: deleteMutation } = useMutation({
    mutationFn: (id: number) => deleteTodo(id, accessToken),
    onMutate: async (targetTodo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const prevTodo: TodoObj[] | [] =
        queryClient.getQueryData(["todos"]) || [];
      const changedData = prevTodo.filter(
        (todo: TodoObj) => todo.id !== targetTodo
      );
      queryClient.setQueryData(["todos"], changedData);
      return { prevTodo };
    },
    onError: (context: Context) => {
      queryClient.setQueryData(["todos"], context.prevTodo);
    },
  });
  return { addMutaion, deleteMutation };
};
