import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useTodoState } from "./useTodoState";
import { TodoObj } from "../types/todo";

type Props = {
  todo: TodoObj;
  setIsEdit: (newValue: boolean) => void;
};

export const useEditTodo = ({ todo, setIsEdit }: Props) => {
  const { onEditTodo } = useContext(ThemeContext);
  const {
    todoState: { editedTodo },
    setTodoState,
  } = useTodoState(todo);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if ((e.target as HTMLElement).textContent === "EDIT") {
      onEditTodo(editedTodo, todo.id);
      setIsEdit(false);
    } else if ((e.target as HTMLElement).innerText === "CANCEL") {
      setIsEdit(false);
    }
  };

  return { editedTodo, setTodoState, handleClick };
};
