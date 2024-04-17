import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useMutations } from "./mutaions";
import React, { SetStateAction } from "react";
import { TodoObj, TodoState } from "../types";

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

export const useTodo = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { deleteTodoItem, addTodoItem } = useMutations();

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

  return { handleLogout, handleDelete, handleSubmit, handleClick };
};
