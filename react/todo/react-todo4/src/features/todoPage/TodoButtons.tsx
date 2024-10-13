import React from "react";
import { TodoState } from "../../types";
import css from "../../styles/features/todoPage/todoItem.module.css";
import { todoButtons } from "../../constants/todoPage/todoButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTodo } from "../../hooks/useTodo";

interface TodoButtonsProps {
  isCheck: boolean;
  setTodoState: React.Dispatch<React.SetStateAction<TodoState>>;
  isEdit: boolean;
}

const TodoButtons = ({ isCheck, setTodoState, isEdit }: TodoButtonsProps) => {
  const { handleClick } = useTodo();

  return (
    <div className={css.buttons}>
      {isEdit ? (
        <div className={css.btns}>
          <p className={css.editBtn}>EDIT</p>
          <p className={css.editBtn}>CANCEL</p>
        </div>
      ) : (
        todoButtons.map((btn) => (
          <div
            key={btn.index}
            id={btn.name}
            className={btn.className}
            onClick={(e) => handleClick({ e, isCheck, setTodoState })}
          >
            <FontAwesomeIcon icon={btn.icon} />
          </div>
        ))
      )}
    </div>
  );
};

export default TodoButtons;
