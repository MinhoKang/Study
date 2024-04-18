import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import React, { SetStateAction, useEffect, useState } from "react";
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
  const {
    deleteTodoItem,
    addTodoItem,
    searchTodoItem,
    error,
    isError,
    addVariable,
    editVariable,
    variables,
  } = useTodoMutations();
  const [value, setValue] = useState("");
  console.log("value1", value);
  console.log("variables", variables);
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
    console.log(addVariable);
  };

  const handleClick = ({ e, isCheck, setTodoState }: HandleClick) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    if (id === "check") {
      setTodoState((prevState) => ({ ...prevState, isCheck: !isCheck }));
    } else if (id === "edit") {
      setTodoState((prevState) => ({ ...prevState, isEdit: true }));
      console.log(editVariable);
    } else if (id === "delete") {
      setTodoState((prevState) => ({ ...prevState, isDelete: true }));
    }
  };

  const handleSearch = ({ e, keyword }: HandleSearch) => {
    e.preventDefault();
    searchTodoItem(keyword);
    console.log("키워드", keyword);
    console.log("value2", value);
    console.log("error:", error);
    console.log("isError:", isError);
    console.log("variables", variables);

    console.log("sear", searchTodoItem(keyword));
  };

  const handleClear = () => {
    setValue("");
    searchTodoItem("");
  };

  return {
    handleLogout,
    handleDelete,
    handleSubmit,
    handleClick,
    handleSearch,
    value,
    setValue,
    handleClear,
  };
};
