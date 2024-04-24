import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useState } from "react";

export const useTodo = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return {
    handleLogout,
    searchQuery,
    setSearchQuery,
  };
};
