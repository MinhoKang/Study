import cn from "classnames";
import css from "../../../styles/features/todoPage/deleteModal.module.css";
import React, { SetStateAction } from "react";
import { useTodoMutations } from "../../../apis";

interface DeleteModalProps {
  setIsDelete: React.Dispatch<SetStateAction<boolean>>;
  todoId: number;
}

const DeleteModal = ({ setIsDelete, todoId }: DeleteModalProps) => {
  const { deleteTodoItem } = useTodoMutations();

  return (
    <div className={css.container}>
      <div className={css.modal}>
        <p className={css.text}>삭제하시겠습니까?</p>
        <div className={css.btns}>
          <div
            className={cn(css.btn, css.deleteBtn)}
            onClick={() => deleteTodoItem(todoId)}
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
