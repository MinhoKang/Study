import { SetStateAction } from "react";
import { TodoObj, TodoState } from "../../types";
import cn from "classnames";
import css from "../../styles/features/todoPage/deleteModal.module.css";
import { useTodo } from "../../hooks/useTodo";

interface DeleteModalProps {
  todo: TodoObj;
  setTodoState: React.Dispatch<SetStateAction<TodoState>>;
}

const DeleteModal = ({ todo, setTodoState }: DeleteModalProps) => {
  const { handleDelete } = useTodo();

  return (
    <div className={css.container}>
      <div className={css.modal}>
        <p className={css.text}>삭제하시겠습니까?</p>
        <div className={css.btns}>
          <div
            className={cn(css.btn, css.deleteBtn)}
            onClick={(e) => handleDelete({ e, setTodoState, todo })}
          >
            삭제
          </div>

          <div
            className={cn(css.btn, css.cancelBtn)}
            onClick={() =>
              setTodoState((prevState) => ({ ...prevState, isDelete: false }))
            }
          >
            취소
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
