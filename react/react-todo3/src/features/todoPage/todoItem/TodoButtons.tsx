import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "../../../styles/features/todoPage/todoItem.module.css";
import { todoButtons } from "../../../constants";

interface Props {
  onHandleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const TodoButtons = ({ onHandleClick }: Props) => {
  return (
    <div className={css.buttons}>
      {todoButtons.map((btn) => (
        <div
          key={btn.index}
          id={btn.name}
          className={btn.className}
          onClick={(e) => onHandleClick(e)}
        >
          <FontAwesomeIcon icon={btn.icon} />
        </div>
      ))}
    </div>
  );
};

export default TodoButtons;
