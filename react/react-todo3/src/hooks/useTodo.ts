import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import React, { SetStateAction, useState } from "react";
import { TodoObj, TodoState } from "../types";
import { useTodoMutations } from "../apis/todo/useTodoMutaions";

interface HandleDelete {
  e: React.MouseEvent<HTMLDivElement>;
  todo: TodoObj;
  setTodoState: React.Dispatch<SetStateAction<TodoState>>;
}
interface HandleSubmit {
  e: React.FormEvent<HTMLFormElement>;
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
}

interface HandleClick {
  e: React.MouseEvent<HTMLDivElement>;
  isCheck: boolean;
  setTodoState: React.Dispatch<SetStateAction<TodoState>>;
}

interface HandleSearch {
  e: React.FormEvent<HTMLFormElement>;
  keyword: string;
}

export const useTodo = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { deleteTodoItem, addTodoItem, searchTodoItem } = useTodoMutations();
  const [value, setValue] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleDelete = ({ e, setTodoState, todo }: HandleDelete) => {
    e.preventDefault();
    deleteTodoItem(todo.id);
    setTodoState((prevState) => ({ ...prevState, isDelete: false }));
  };

  const handleSubmit = ({ e, value, setValue }: HandleSubmit) => {
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

  const handleSearch = ({ e, keyword }: HandleSearch) => {
    e.preventDefault();
    searchTodoItem(keyword);
    setValue("");
  };

  return {
    handleLogout,
    handleDelete,
    handleSubmit,
    handleClick,
    handleSearch,
    value,
    setValue,
  };
};
