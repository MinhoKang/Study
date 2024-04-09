import cn from "classnames";
import css from "../../../styles/features/todoPage/deleteModal.module.css";
import { TodoObj } from "../../../types/todo";
import { useTodo } from "../../../hooks/useTodo";
import { SetStateAction } from "react";

interface Props {
  todo: TodoObj;
  setIsEdit: React.Dispatch<SetStateAction<boolean>>;
}

const DeleteModal = ({ todo, setIsEdit }: Props) => {
  const { onDeleteTodo } = useTodo();
  const handleClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    // 삭제
    const response = await onDeleteTodo(todo.id);
    setIsEdit(false);
    await console.log(response);
    // 취소
  };

  return (
    <div className={css.container}>
      <div className={css.modal}>
        <p className={css.text}>삭제하시겠습니까?</p>
        <div className={css.btns} onClick={handleClick}>
          <div className={cn(css.btn, css.deleteBtn)}>삭제</div>
          <div
            className={cn(css.btn, css.cancelBtn)}
            onClick={() => setIsEdit(false)}
          >
            취소
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
