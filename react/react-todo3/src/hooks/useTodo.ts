import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const useTodo = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleButtonClick = () => {};

  return {
    handleLogout,
    handleButtonClick,
  };
};
