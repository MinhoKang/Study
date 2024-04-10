import { useContext } from "react";
import css from "../../../styles/features/todoPage/todoItem.module.css";
import { TodoState } from "../../../types/todo";
import { ThemeContext } from "../../../context/ThemeContext";

type Props = {
  editedTodo: string;
  setTodoState: React.Dispatch<React.SetStateAction<TodoState>>;
  todoId: number;
};

const EditTodo = ({ editedTodo, setTodoState, todoId }: Props) => {
  const { onEditTodo } = useContext(ThemeContext);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if ((e.target as HTMLElement).textContent === "EDIT") {
      onEditTodo(editedTodo, todoId);
      setTodoState((prevState) => ({ ...prevState, isEdit: false }));
    } else if ((e.target as HTMLElement).innerText === "CANCEL") {
      setTodoState((prevState) => ({ ...prevState, isEdit: false }));
    }
  };

  return (
    <>
      <input
        className={css.editInput}
        value={editedTodo}
        onChange={(e) =>
          setTodoState((prevState) => ({
            ...prevState,
            editedTodo: e.target.value,
          }))
        }
      />
      <div className={css.btns} onClick={handleClick}>
        <p className={css.editBtn}>EDIT</p>
        <p className={css.editBtn}>CANCEL</p>
      </div>
    </>
  );
};

export default EditTodo;
