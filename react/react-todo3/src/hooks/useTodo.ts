import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useGetTodoQuery } from "./queries";
import { useMutations } from "./mutaions";

export const useTodo = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const accessToken = sessionStorage.getItem("accessToken")!;
  const { data: todos } = useGetTodoQuery(accessToken);
  const { addMutaion, deleteMuation, editMutaion } = useMutations();

  const onAddTodo = async (todo: string) => {
    try {
      addMutaion.mutate({ todo, accessToken });
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteTodo = async (id: number) => {
    try {
      deleteMuation.mutate({ id, accessToken });
    } catch (error) {
      console.error(error);
    }
  };

  const onEditTodo = async (edited: string, id: number) => {
    try {
      editMutaion.mutate({ edited, id, accessToken });
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
