import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "./deleteTodo";
import { TodoObj } from "../../types";
import { addTodo } from "./addTodo";
import { editTodo } from "./editTodo";
import { searchTodo } from "./searchTodo";

type Context = {
  data: TodoObj[];
  [key: string]: object;
};

export const useTodoMutations = () => {
  const queryClient = useQueryClient();
  const accessToken = sessionStorage.getItem("accessToken")!;

  const { mutate: addTodoItem, variables: addVariable } = useMutation({
    mutationFn: (todo: string) => addTodo(todo, accessToken),
    onMutate: async (todo) => {
      const prevTodo: TodoObj[] | [] =
        queryClient.getQueryData(["todos"]) || [];
      await queryClient.cancelQueries({
        queryKey: ["todos"],
      });

      const newTodoId = prevTodo.length
        ? prevTodo[prevTodo.length - 1].id + 1
        : 0;
      const newTodo = [...prevTodo, { id: newTodoId, todo }];
      queryClient.setQueryData(["todos"], newTodo);
      return { prevTodo };
    },
    onError: (context: Context) => {
      queryClient.setQueryData(["todos"], context.prevTodo);
    },
    onSuccess(data) {
      const lastQueryTodoId = (
        queryClient.getQueryData(["todos"]) as TodoObj[]
      ).slice(-1)[0].id;
      const lastServerTodos = data.data.data.todos;
      const lastServerTodoId = lastServerTodos.slice(-1)[0].id;

      if (lastQueryTodoId !== lastServerTodoId) {
        queryClient.setQueryData(["todos"], lastServerTodos);
      }
    },
  });

  const { mutate: deleteTodoItem } = useMutation({
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

  const { mutate: editTodoItem, variables: editVariable } = useMutation({
    mutationFn: ({ edited, id }: { edited: string; id: number }) =>
      editTodo(edited, id, accessToken),
    onMutate: async ({ edited, id }) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const prevTodo: TodoObj[] | [] =
        queryClient.getQueryData(["todos"]) || [];
      const changedData = prevTodo.map((todo: TodoObj) => {
        if (todo.id === id) {
          return { ...todo, todo: edited };
        }
        return { prevTodo };
      });
      queryClient.setQueryData(["todos"], changedData);
      return { prevTodo };
    },
    onError: (context: Context) => {
      queryClient.setQueryData(["todos"], context.prevTodo);
    },
  });
  const {
    mutate: searchTodoItem,
    data,
    error,
    isError,
    variables,
  } = useMutation({
    mutationFn: (keyword: string) => searchTodo(keyword, accessToken),
    onMutate: async (keyword) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const prevTodo: TodoObj[] | [] =
        queryClient.getQueryData(["todos"]) || [];
      if (keyword.trim() === "") {
        queryClient.setQueryData(["todos"], prevTodo);
        return { prevTodo };
      }
      return { prevTodo };
    },
    onError: (context: Context) => {
      console.log(context);
      queryClient.setQueryData(["todos"], context.prevTodo);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["todos"], data?.data);
    },
  });

  return {
    addTodoItem,
    deleteTodoItem,
    editTodoItem,
    searchTodoItem,
    data,
    error,
    isError,
    addVariable,
    editVariable,
    variables,
  };
};
