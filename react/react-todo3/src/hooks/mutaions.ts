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
      console.log(todo);
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const prevTodo: TodoObj[] | [] =
        queryClient.getQueryData(["todos"]) || [];
      console.log(prevTodo);
      const newTodoId =
        prevTodo.length > 0 ? prevTodo[prevTodo.length - 1].id + 1 : 0;
      console.log(newTodoId);
      const newTodo = [...prevTodo, { id: newTodoId, todo }];
      console.log(newTodo);
      const new11 = queryClient.setQueryData(["todos"], newTodo);
      console.log(new11);
      console.log(queryClient.setQueryData(["todos"], newTodo));
      return { prevTodo };
    },
    onError: (context: oldTodo) => {
      console.log("error");
      queryClient.setQueryData(["todos"], context.prevTodo);
    },
    onSettled: () => {
      console.log("refetch");
    },
  });

  const { mutate: deleteTodoItem } = useMutation({
    mutationFn: (id: number) => deleteTodo(id, accessToken),
    onMutate: async (targetTodo) => {
      console.log(targetTodo);
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      console.log(queryClient.getQueryData(["todos"]));
      const prevData: TodoObj[] | [] =
        queryClient.getQueryData(["todos"]) || [];
      console.log(prevData);
      const changedData = prevData.filter(
        (todo: TodoObj) => todo.id !== targetTodo
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
    },
  });

  const { mutate: editTodoItem } = useMutation({
    mutationFn: ({ edited, id }: { edited: string; id: number }) =>
      editTodo(edited, id, accessToken),
    onMutate: async ({ edited, id }) => {
      console.log(id); // edited, id, accessToken
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const prevData: TodoObj[] | [] =
        queryClient.getQueryData(["todos"]) || [];
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
  });

  return { addTodoItem, deleteTodoItem, editTodoItem };
};
