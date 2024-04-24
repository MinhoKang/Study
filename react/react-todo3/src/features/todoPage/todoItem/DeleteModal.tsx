import cn from "classnames";
import css from "../../../styles/features/todoPage/deleteModal.module.css";
import React, { MouseEventHandler, SetStateAction } from "react";

interface Props {
  setIsDelete: React.Dispatch<SetStateAction<boolean>>;
  onDeleteTodoItem: MouseEventHandler<HTMLDivElement>;
}

const DeleteModal = ({ setIsDelete, onDeleteTodoItem }: Props) => {
  return (
    <div className={css.container}>
      <div className={css.modal}>
        <p className={css.text}>삭제하시겠습니까?</p>
        <div className={css.btns}>
          <div
            className={cn(css.btn, css.deleteBtn)}
            onClick={onDeleteTodoItem}
          >
            삭제
          </div>
          <div
            className={cn(css.btn, css.cancelBtn)}
            onClick={() => setIsDelete(false)}
          >
            취소
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
