import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Context, TodoObj } from "../../types";
import { addTodo } from "./addTodo";
import { editTodo } from "./editTodo";
import { deleteTodo } from "./deleteTodo";

export const useTodoMutations = (searchValue: string) => {
  const queryClient = useQueryClient();
  const accessToken = sessionStorage.getItem("accessToken")!;

  const { mutate: addTodoItem } = useMutation({
    mutationFn: (todo: string) => addTodo(todo, accessToken),
    onMutate: async (todo) => {
      await queryClient.cancelQueries({
        queryKey: ["todos", searchValue],
      });

      const prevTodos: TodoObj[] | [] =
        queryClient.getQueryData(["todos", searchValue]) || [];

      const newTodoId = prevTodos.length
        ? prevTodos[prevTodos.length - 1].id + 1
        : 0;
      const newTodo = [...prevTodos, { id: newTodoId, todo }];
      console.log("newTodo", newTodo);
      queryClient.setQueryData(["todos", searchValue], newTodo);
      return { prevTodos };
    },
    onError: (context: Context) => {
      queryClient.setQueryData(["todos", searchValue], context.prevTodos);
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
      const prevTodos: TodoObj[] | [] =
        queryClient.getQueryData(["todos", searchValue]) || [];
      const changedData = prevTodos.filter(
        (todo: TodoObj) => todo.id !== targetTodo
      );
      queryClient.setQueryData(["todos", searchValue], changedData);
      return { prevTodos };
    },
    onError: (context: Context) => {
      queryClient.setQueryData(["todos", searchValue], context.prevTodos);
    },
  });

  const { mutate: editTodoItem } = useMutation({
    mutationFn: ({ editedTodo, id }: { editedTodo: string; id: number }) =>
      editTodo(editedTodo, id, accessToken),
    onMutate: async ({ editedTodo, id }) => {
      await queryClient.cancelQueries({ queryKey: ["todos", searchValue] });
      const prevTodos: TodoObj[] | [] =
        queryClient.getQueryData(["todos", searchValue]) || [];
      const changedData = prevTodos.map((todo: TodoObj) => {
        if (todo.id === id) {
          return { ...todo, todo: editedTodo };
        } else {
          return { ...todo };
        }
      });
      queryClient.setQueryData(["todos", searchValue], changedData);
      return { prevTodos };
    },
    onError: (context: Context) => {
      queryClient.setQueryData(["todos", searchValue], context.prevTodos);
    },
  });

  return { addTodoItem, deleteTodoItem, editTodoItem };
};
