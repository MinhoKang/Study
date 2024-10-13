import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useTodoMutaions } from "./useTodoMutations";
import { HandleClick, HandleDelete } from "../types";

export const useTodo = () => {
  const [value, setValue] = useState("");
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { addTodoItem, deleteTodoItem, editTodoItem } = useTodoMutaions();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const invalidateTodos = () =>
    queryClient.invalidateQueries({
      queryKey: ["todos"],
    });

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addTodoItem(value);
    await invalidateTodos();
    await setValue("");
  };

  const handleDelete = ({ e, setTodoState, todo }: HandleDelete) => {
    e.preventDefault();
    deleteTodoItem(todo.id);
    setTodoState((prevState) => ({ ...prevState, isDelete: false }));
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

  return {
    value,
    setValue,
    handleLogout,
    handleAdd,
    handleDelete,
    handleClick,
  };
};
