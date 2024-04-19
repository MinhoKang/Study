import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useState } from "react";
import {
  HandleClick,
  HandleDelete,
  HandleSearch,
  HandleSubmit,
  TodoObj,
} from "../types";
import { useTodoMutations } from "../apis/todo/useTodoMutaions";
import { useGetTodoQuery } from "../apis/queries";

interface UseTodoProps {
  todo?: TodoObj;
}

export const useTodo = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { deleteTodoItem, addTodoItem } = useTodoMutations();
  const { todos, refetch } = useGetTodoQuery(value);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleDelete = ({ e, setTodoState, todo }: HandleDelete) => {
    e.preventDefault();
    deleteTodoItem(todo.id);
    setTodoState((prevState) => ({ ...prevState, isDelete: false }));
    refetch();
  };

  const handleAdd = ({ e, value, setValue }: HandleSubmit) => {
    e.preventDefault();
    addTodoItem(value);
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
    refetch();
  };

  const handleClear = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await setValue("");
    await refetch();
  };

  return {
    handleLogout,
    handleDelete,
    handleAdd,
    handleClick,
    value,
    setValue,
    handleSearch,
    todos,
    handleClear,
    refetch,
  };
};
