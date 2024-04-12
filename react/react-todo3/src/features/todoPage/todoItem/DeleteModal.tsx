import cn from "classnames";
import css from "../../../styles/features/todoPage/deleteModal.module.css";
import { SetStateAction, useContext } from "react";
import { TodoContext } from "../../../context/TodoContext";
import { TodoObj, TodoState } from "../../../types";

interface Props {
  todo: TodoObj;
  setTodoState: React.Dispatch<SetStateAction<TodoState>>;
}

const DeleteModal = ({ todo, setTodoState }: Props) => {
  const { onDeleteTodo } = useContext(TodoContext);
  const handleClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const response = await onDeleteTodo(todo.id);
    setTodoState((prevState) => ({ ...prevState, isDelete: false }));
    await console.log(response);
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
