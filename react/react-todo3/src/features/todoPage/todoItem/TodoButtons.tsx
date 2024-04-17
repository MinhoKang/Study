import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "../../../styles/features/todoPage/todoItem.module.css";
import { TodoState } from "../../../types";
import { todoButtons } from "../../../constants";

interface Props {
  isCheck: boolean;
  setTodoState: React.Dispatch<React.SetStateAction<TodoState>>;
}
const TodoButtons = ({ isCheck, setTodoState }: Props) => {
  // TODO: useTodo로
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
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
