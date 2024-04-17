import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "../../../styles/features/todoPage/todoItem.module.css";
import { TodoState } from "../../../types";
import { todoButtons } from "../../../constants";
import { useTodo } from "../../../hooks";

interface Props {
  isCheck: boolean;
  setTodoState: React.Dispatch<React.SetStateAction<TodoState>>;
}
const TodoButtons = ({ isCheck, setTodoState }: Props) => {
  const { handleClick } = useTodo();
  return (
    <div className={css.buttons}>
      {todoButtons.map((btn) => (
        <div
          key={btn.index}
          id={btn.name}
          className={btn.className}
          onClick={(e) => handleClick({ e, isCheck, setTodoState })}
        >
          <FontAwesomeIcon icon={btn.icon} />
        </div>
      ))}
    </div>
  );
};

export default TodoButtons;
