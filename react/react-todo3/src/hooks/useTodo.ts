import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useState } from "react";
import {
  HandleClick,
  HandleDelete,
  HandleSearch,
  HandleSubmit,
} from "../types";
import { useTodoMutations } from "../apis/todo/useTodoMutaions";
import { useDebounce } from "./useDebounce";

export const useTodo = () => {
  const [value, setValue] = useState("");
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { deleteTodoItem, addTodoItem } = useTodoMutations();
  const debounceValue = useDebounce({ value });

  const invalidateTodos = () =>
    queryClient.invalidateQueries({
      queryKey: ["todos"],
    });

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleDelete = ({ e, setTodoState, todo }: HandleDelete) => {
    e.preventDefault();
    deleteTodoItem(todo.id);
    setTodoState((prevState) => ({ ...prevState, isDelete: false }));
    invalidateTodos();
  };

  const handleAdd = ({ e }: HandleSubmit) => {
    e.preventDefault();
    addTodoItem(value);
    setValue("");
    invalidateTodos();
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
    invalidateTodos();
  };

  return {
    handleLogout,
    handleDelete,
    handleAdd,
    handleClick,
    debounceValue,
    value,
    setValue,
    handleSearch,
    handleClear,
  };
};
