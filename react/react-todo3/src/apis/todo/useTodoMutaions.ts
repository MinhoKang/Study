import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Context, TodoObj } from "../../types";
import { addTodo } from "./addTodo";
import { editTodo } from "./editTodo";
import { deleteTodo } from "./deleteTodo";

export const useTodoMutations = () => {
  const queryClient = useQueryClient();
  const accessToken = sessionStorage.getItem("accessToken")!;
  const getTodoQueryCache = () => {
    return queryClient
      .getQueryCache()
      .findAll()
      .map((query) => query.queryKey)[0];
  };

  const { mutate: addTodoItem } = useMutation({
    mutationFn: (todo: string) => addTodo(todo, accessToken),
    onMutate: async (todo) => {
      const todoQueryCache = getTodoQueryCache();

      const todosKey = await queryClient.cancelQueries({
        queryKey: todoQueryCache,
      });

      const prevTodos: TodoObj[] | [] =
        queryClient.getQueryData(todoQueryCache) || [];

      const newTodoId = prevTodos.length
        ? prevTodos[prevTodos.length - 1].id + 1
        : 0;
      const newTodos = [...prevTodos, { id: newTodoId, todo }];
      queryClient.setQueryData(todoQueryCache, newTodos);
      return { prevTodos, todosKey };
    },
    onError: (context: Context) => {
      const todoQueryCache = getTodoQueryCache();
      queryClient.setQueryData(todoQueryCache, context.prevTodos);
    },
    onSuccess: (data) => {
      const todoQueryCache = getTodoQueryCache();

      const lastQueryTodoId = (
        queryClient.getQueryData(todoQueryCache) as TodoObj[]
      ).slice(-1)[0].id;
      const lastServerTodos = data.data.data.todos;
      const lastServerTodoId = lastServerTodos.slice(-1)[0].id;
      if (lastQueryTodoId !== lastServerTodoId) {
        queryClient.setQueryData(todoQueryCache, lastServerTodos);
      }
    },
  });

  const { mutate: deleteTodoItem } = useMutation({
    mutationFn: (id: number) => deleteTodo(id, accessToken),
    onMutate: async (targetTodo) => {
      const todoQueryCache = getTodoQueryCache();

      await queryClient.cancelQueries({ queryKey: todoQueryCache });
      const prevTodos: TodoObj[] | [] =
        queryClient.getQueryData(todoQueryCache) || [];
      const changedData = prevTodos.filter(
        (todo: TodoObj) => todo.id !== targetTodo
      );
      queryClient.setQueryData(todoQueryCache, changedData);
      return { prevTodos };
    },
    onError: (context: Context) => {
      const todoQueryCache = getTodoQueryCache();

      queryClient.setQueryData(todoQueryCache, context.prevTodos);
    },
  });

  const { mutate: editTodoItem } = useMutation({
    mutationFn: ({ editedTodo, id }: { editedTodo: string; id: number }) =>
      editTodo(editedTodo, id, accessToken),
    onMutate: async ({ editedTodo, id }) => {
      const todoQueryCache = getTodoQueryCache();

      await queryClient.cancelQueries({ queryKey: todoQueryCache });
      const prevTodos: TodoObj[] | [] =
        queryClient.getQueryData(todoQueryCache) || [];
      const changedData = prevTodos.map((todo: TodoObj) => {
        if (todo.id === id) {
          return { ...todo, todo: editedTodo };
        } else {
          return { ...todo };
        }
      });
      queryClient.setQueryData(todoQueryCache, changedData);
      return { prevTodos };
    },
    onError: (context: Context) => {
      const todoQueryCache = getTodoQueryCache();

      queryClient.setQueryData(todoQueryCache, context.prevTodos);
    },
  });

  return { addTodoItem, deleteTodoItem, editTodoItem };
};
