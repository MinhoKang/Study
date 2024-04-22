import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../apis/todo/addTodo";
import { deleteTodo } from "../apis/todo/deleteTodo";
import { editTodo } from "../apis/todo/editTodo";
import { TodoObj } from "../types";

type Context = {
  data: TodoObj[];
  [key: string]: object;
};

export const useTodoMutaions = () => {
  const queryClient = useQueryClient();
  const accessToken = sessionStorage.getItem("accessToken")!;

  const { mutate: addTodoItem } = useMutation({
    mutationFn: (todo: string) => addTodo({ accessToken, todo }),
    onMutate: async (todo) => {
      await queryClient.cancelQueries({ queryKey: ["todos", null] });

      const prevTodos: TodoObj[] | [] =
        queryClient.getQueryData(["todos", null]) || [];
      console.log(prevTodos);
      const newTodoId = prevTodos.length
        ? prevTodos[prevTodos.length - 1].id + 1
        : 0;
      const newTodo = [...prevTodos, { id: newTodoId, todo }];
      queryClient.setQueryData(["todos", null], newTodo);
      return { prevTodos };
    },
    onError: (context: Context) => {
      queryClient.setQueryData(["todos"], context.prevTodo);
    },
    onSuccess: (data) => {
      const lastQueryTodoId = (
        queryClient.getQueryData(["todos", null]) as TodoObj[]
      ).slice(-1)[0].id;
      const lastServerTodos = data!.data.data.todos;
      const lastServerTodoId = lastServerTodos.slice(-1)[0].id;
      console.log(lastServerTodos);
      if (lastQueryTodoId !== lastServerTodoId) {
        queryClient.setQueryData(["todos", null], lastServerTodos);
      }
    },
  });

  const { mutate: deleteTodoItem } = useMutation({
    mutationFn: (id: number) => deleteTodo({ accessToken, id }),
    onMutate: () => {},
  });

  const { mutate: editTodoItem } = useMutation({
    mutationFn: ({ editedTodo, id }: { editedTodo: string; id: number }) =>
      editTodo({ accessToken, id, editedTodo }),
    onMutate: () => {},
  });

  return { addTodoItem, deleteTodoItem, editTodoItem };
};
