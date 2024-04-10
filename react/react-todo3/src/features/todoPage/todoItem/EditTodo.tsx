import { useContext } from "react";
import css from "../../../styles/features/todoPage/todoItem.module.css";
import { ThemeContext } from "../../../context/ThemeContext";

type Props = {
  editedTodo: string;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  todoId: number;
};

const EditTodo = ({ editedTodo, setIsEdit, todoId }: Props) => {
  const { onEditTodo } = useContext(ThemeContext);
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
        onChange={() => setIsEdit(false)}
      />
      <div className={css.btns} onClick={handleClick}>
        <p className={css.editBtn}>EDIT</p>
        <p className={css.editBtn}>CANCEL</p>
      </div>
    </>
  );
};

export default EditTodo;
