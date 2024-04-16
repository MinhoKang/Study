import cn from "classnames";
import css from "../../../styles/features/todoPage/deleteModal.module.css";
import { SetStateAction } from "react";
import { TodoObj, TodoState } from "../../../types";
import { useMutations } from "../../../hooks/mutaions";

interface Props {
  todo: TodoObj;
  setTodoState: React.Dispatch<SetStateAction<TodoState>>;
}

const DeleteModal = ({ todo, setTodoState }: Props) => {
  const { deleteTodoItem } = useMutations();
  const handleClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    deleteTodoItem(todo.id);
    setTodoState((prevState) => ({ ...prevState, isDelete: false }));
  };

  return (
    <div className={css.container}>
      <div className={css.modal}>
        <p className={css.text}>삭제하시겠습니까?</p>
        <div className={css.btns}>
          <div className={cn(css.btn, css.deleteBtn)} onClick={handleClick}>
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
