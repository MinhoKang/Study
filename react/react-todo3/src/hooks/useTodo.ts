import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useState } from "react";
import {
  HandleClick,
  HandleDelete,
  HandleSearch,
  HandleSubmit,
} from "../types";

export const useTodo = () => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleDelete = ({ e, setTodoState, todo }: HandleDelete) => {
    e.preventDefault();
    setTodoState((prevState) => ({ ...prevState, isDelete: false }));
  };

  const handleAdd = ({ e }: HandleSubmit) => {
    e.preventDefault();
    setValue("");
  };

  const handleClick = ({ e, isCheck, setTodoState }: HandleClick) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    if (id === "check") {
      setTodoState((prevState) => ({ ...prevState, isCheck: !isCheck }));
    } else if (id === "edit") {
      setTodoState((prevState) => ({ ...prevState, isEdit: true }));
    } else if (id === "delete") {
      setTodoState((prevState) => ({ ...prevState, isDelete: true }));
    }
  };

  const handleSearch = ({ e }: HandleSearch) => {
    e.preventDefault();
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setValue("");
  };

  return {
    handleLogout,
    handleDelete,
    handleAdd,
    handleClick,
    value,
    setValue,
    handleSearch,
    handleClear,
  };
};
