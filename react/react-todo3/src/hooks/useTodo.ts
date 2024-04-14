import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { addTodo } from "../apis/todo/addTodo";
import { deleteTodo } from "../apis/todo/deleteTodo";
import { editTodo } from "../apis/todo/editTodo";
import { useGetTodoQuery } from "./queries";
import { useQueryClient } from "@tanstack/react-query";

export const useTodo = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const accessToken = sessionStorage.getItem("accessToken")!;
  const queryClient = useQueryClient();

  const { data: todos, refetch } = useGetTodoQuery(accessToken);

  const onAddTodo = async (todo: string) => {
    try {
      await addTodo(todo, accessToken);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
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
