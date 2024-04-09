import React, { SetStateAction } from "react";
import { todoButtons } from "../../../constants/todoPage/todoButton";
import { useTodo } from "../../../hooks/useTodo";
import { TodoObj } from "../../../types/todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "../../../styles/features/todoPage/todoItem.module.css";

interface Props {
  todo: TodoObj;
  setIsEdit: React.Dispatch<SetStateAction<boolean>>;
}
const TodoButtons = ({ todo, setIsEdit }: Props) => {
  const { onDeleteTodo } = useTodo();

  const handleClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = await e.currentTarget.id;
    if (id === "check") {
      console.log("쳌,");
    } else if (id === "edit") {
      setIsEdit(true);
    } else {
      await onDeleteTodo(todo.id);
    }
  };
  return (
    <div className={css.buttons}>
      {todoButtons.map((btn) => (
        <div
          key={btn.index}
          id={btn.name}
          className={btn.className}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={btn.icon} />
        </div>
      ))}
    </div>
  );
};

export default TodoButtons;
