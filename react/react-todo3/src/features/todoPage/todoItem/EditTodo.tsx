import css from "../../../styles/features/todoPage/todoItem.module.css";
import { useEditTodo } from "../../../hooks";
import { TodoObj } from "../../../types";

type Props = {
  todo: TodoObj;
  setIsEdit: (newValue: boolean) => void;
};

const EditTodo = ({ todo, setIsEdit }: Props) => {
  const { editedTodo, setTodoState, handleClick } = useEditTodo({
    todo,
    setIsEdit,
  });

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
      <div className={css.btns} onClick={()=>putTodo({})}>
        <p className={css.editBtn}>EDIT</p>
        <p className={css.editBtn}>CANCEL</p>
      </div>
    </>
  );
};

export default EditTodo;
