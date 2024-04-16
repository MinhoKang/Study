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
  return { handleLogout, handleDelete, handleSubmit };
};
