import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { addTodo } from "../apis/todo/addTodo";
import { deleteTodo } from "../apis/todo/deleteTodo";
import { editTodo } from "../apis/todo/editTodo";
import { useGetTodoQuery } from "./queries";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TodoObj } from "../types";

export const useTodo = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const accessToken = sessionStorage.getItem("accessToken")!;
  const queryClient = useQueryClient();
  const { data: todos } = useGetTodoQuery(accessToken);

  const addMutaion = useMutation({
    mutationFn: ({
      todo,
      accessToken,
    }: {
      todo: string;
      accessToken: string;
    }) => addTodo(todo, accessToken),
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const prev = queryClient.getQueryData(["todos"]);

      const lastId = prev?.data[prev?.data.length - 1].id;

      queryClient.setQueryData(["todos"], (oldTodo) => [
        ...oldTodo.data,
        { id: lastId + 1, todo: newTodo.todo },
      ]);

      return { prev };
    },
    onSuccess: () => {
      console.log("성공");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error, newTodo, context) => {
      console.log("error");
      console.log(context);
      queryClient.setQueryData(["todos"], context?.prev);
      // queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onSettled: () => {
      console.log("refetch");
      // queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const onAddTodo = async (todo: string) => {
    try {
      addMutaion.mutate({ todo, accessToken });
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id, accessToken);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    } catch (error) {
      console.error(error);
    }
  };

  const onEditTodo = async (edited: string, id: number) => {
    try {
      await editTodo(edited, id, accessToken);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return { todos, onAddTodo, onDeleteTodo, onEditTodo, handleLogout };
};
