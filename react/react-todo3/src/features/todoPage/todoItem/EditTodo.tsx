import { useTodo } from "../../../hooks/useTodo";
import css from "../../../styles/features/todoPage/todoItem.module.css";
import { SetStateAction } from "react";

type Props = {
  editedTodo: string;
  setEditedTodo: React.Dispatch<SetStateAction<string>>;
  setIsEdit: React.Dispatch<SetStateAction<boolean>>;
  todoId: number;
};

const EditTodo = ({ editedTodo, setEditedTodo, setIsEdit, todoId }: Props) => {
  const { onEditTodo } = useTodo();
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if ((e.target as HTMLElement).textContent === "EDIT") {
      onEditTodo(editedTodo, todoId);
      setIsEdit(false);
    } else if ((e.target as HTMLElement).innerText === "CANCEL") {
      setIsEdit(false);
    }
  };

  return (
    <>
      <input
        className={css.editInput}
        value={editedTodo}
        onChange={(e) => setEditedTodo(e.target.value)}
      />
      <div className={css.btns} onClick={handleClick}>
        <p className={css.editBtn}>EDIT</p>
        <p className={css.editBtn}>CANCEL</p>
      </div>
    </>
  );
};

export default EditTodo;
