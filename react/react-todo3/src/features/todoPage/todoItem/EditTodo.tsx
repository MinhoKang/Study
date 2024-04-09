import css from "../../../styles/features/todoPage/todoItem.module.css";
import { SetStateAction } from "react";

type Props = {
  editedTodo: string;
  setEditedTodo: React.Dispatch<SetStateAction<string>>;
};

const EditTodo = ({ editedTodo, setEditedTodo }: Props) => {
  return (
    <input
      className={css.editInput}
      value={editedTodo}
      onChange={(e) => setEditedTodo(e.target.value)}
    ></input>
  );
};

export default EditTodo;
