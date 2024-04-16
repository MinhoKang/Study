import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useMutations } from "./mutaions";

export const useTodo = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const accessToken = sessionStorage.getItem("accessToken")!;
  const { mutate: addTodo, deleteMuation, editMutaion } = useMutations();

  const onAddTodo = async (todo: string) => {
    try {
      addTodo({ todo, accessToken });
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

  return { onAddTodo, onDeleteTodo, onEditTodo, handleLogout };
};
