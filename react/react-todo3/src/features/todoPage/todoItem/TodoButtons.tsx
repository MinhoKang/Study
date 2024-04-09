import React, { SetStateAction } from "react";
import { todoButtons } from "../../../constants/todoPage/todoButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "../../../styles/features/todoPage/todoItem.module.css";

interface Props {
  setIsEdit: React.Dispatch<SetStateAction<boolean>>;
  isCheck: boolean;
  setIsCheck: React.Dispatch<SetStateAction<boolean>>;
  setIsDelete: React.Dispatch<SetStateAction<boolean>>;
}
const TodoButtons = ({
  setIsEdit,
  isCheck,
  setIsCheck,
  setIsDelete,
}: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    if (id === "check") {
      setIsCheck(!isCheck);
    } else if (id === "edit") {
      setIsEdit(true);
    } else if (id === "delete") {
      setIsDelete(true);
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
