import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import React, { SetStateAction, useState } from "react";
import { TodoObj, TodoState } from "../types";
import { useTodoMutations } from "../apis/todo/useTodoMutaions";
import { useGetTodoQuery } from "../apis/queries";

interface Props {
  e: React.MouseEvent<HTMLDivElement>;
  todo: TodoObj;
  setTodoState: React.Dispatch<SetStateAction<TodoState>>;
}

interface Props2 {
  e: React.FormEvent<HTMLFormElement>;
  todoInput: string;
  setTodoInput: React.Dispatch<SetStateAction<string>>;
}

interface Props3 {
  e: React.MouseEvent<HTMLDivElement>;
  isCheck: boolean;
  setTodoState: React.Dispatch<SetStateAction<TodoState>>;
}

interface HandleSearch {
  e: React.FormEvent<HTMLFormElement>;
  keyword: string;
}

export const useTodo = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { deleteTodoItem, addTodoItem } = useTodoMutations();
  // const { refetch, todos } = useGetTodoQuery();
  // console.log(todos);
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleDelete = ({ e, setTodoState, todo }: Props) => {
    e.preventDefault();
    deleteTodoItem(todo.id);
    setTodoState((prevState) => ({ ...prevState, isDelete: false }));
  };

  const handleSubmit = ({ e, todoInput, setTodoInput }: Props2) => {
    e.preventDefault();
    addTodoItem(todoInput);
    setTodoInput("");
  };

  const handleClick = ({ e, isCheck, setTodoState }: Props3) => {
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
  };

  return {
    handleLogout,
    handleDelete,
    handleSubmit,
    handleClick,
    value,
    setValue,
  };
};
