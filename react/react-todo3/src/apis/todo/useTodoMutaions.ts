import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "./deleteTodo";
import { TodoObj } from "../../types";
import { addTodo } from "./addTodo";
import { editTodo } from "./editTodo";

type Context = {
  data: TodoObj[];
  [key: string]: object;
};

export const useTodoMutations = (searchValue: string) => {
  const queryClient = useQueryClient();
  const accessToken = sessionStorage.getItem("accessToken")!;

  const { mutate: addTodoItem } = useMutation({
    mutationFn: (todo: string) => addTodo(todo, accessToken),
    onMutate: async (todo) => {
      await queryClient.cancelQueries({
        queryKey: ["todos", searchValue],
      });

      const prevTodo: TodoObj[] | [] =
        (await queryClient.getQueryData(["todos", searchValue])) || [];

      const newTodoId = prevTodo.length
        ? prevTodo[prevTodo.length - 1].id + 1
        : 0;
      const newTodo = [...prevTodo, { id: newTodoId, todo }];
      console.log("newTodo", newTodo);
      queryClient.setQueryData(["todos", searchValue], newTodo);
      return { prevTodo: prevTodo };
    },
    onError: (context: Context) => {
      queryClient.setQueryData(["todos", searchValue], context.prevTodo);
    },
    onSuccess: (data) => {
      const lastQueryTodoId = (
        queryClient.getQueryData(["todos", searchValue]) as TodoObj[]
      ).slice(-1)[0].id;
      const lastServerTodos = data.data.data.todos;
      const lastServerTodoId = lastServerTodos.slice(-1)[0].id;
      console.log(lastServerTodos);
      if (lastQueryTodoId !== lastServerTodoId) {
        queryClient.setQueryData(["todos", searchValue], lastServerTodos);
      }
    },
  });

  const { mutate: deleteTodoItem } = useMutation({
    mutationFn: (id: number) => deleteTodo(id, accessToken),
    onMutate: async (targetTodo) => {
      await queryClient.cancelQueries({ queryKey: ["todos", searchValue] });
      const prevTodo: TodoObj[] | [] =
        queryClient.getQueryData(["todos", searchValue]) || [];
      const changedData = prevTodo.filter(
        (todo: TodoObj) => todo.id !== targetTodo
      );
      queryClient.setQueryData(["todos", searchValue], changedData);
      return { prevTodo };
    },
    onError: (context: Context) => {
      queryClient.setQueryData(["todos", searchValue], context.prevTodo);
    },
  });

  const { mutate: editTodoItem } = useMutation({
    mutationFn: ({ editedTodo, id }: { editedTodo: string; id: number }) =>
      editTodo(editedTodo, id, accessToken),
    onMutate: async ({ editedTodo, id }) => {
      await queryClient.cancelQueries({ queryKey: ["todos", searchValue] });
      const prevTodo: TodoObj[] | [] =
        queryClient.getQueryData(["todos", searchValue]) || [];
      const changedData = prevTodo.map((todo: TodoObj) => {
        if (todo.id === id) {
          return { ...todo, todo: editedTodo };
        } else {
          return { ...todo };
        }
      });

      queryClient.setQueryData(["todos", searchValue], changedData);
      return { prevTodo };
    },
    onError: (context: Context) => {
      queryClient.setQueryData(["todos", searchValue], context.prevTodo);
    },
  });

  return { addTodoItem, deleteTodoItem, editTodoItem };
};
