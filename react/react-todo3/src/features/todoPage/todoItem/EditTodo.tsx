import React, { useContext } from "react";
import css from "../../../styles/features/todoPage/todoItem.module.css";
import { ThemeContext } from "../../../context/ThemeContext";
import { useTodoState } from "../../../hooks/useTodoState";
import { TodoObj } from "../../../types/todo";

type Props = {
  todo: TodoObj;
  setIsEdit: (newValue: boolean) => void;
};

const EditTodo = ({ todo, setIsEdit }: Props) => {
  const { onEditTodo } = useContext(ThemeContext);
  const {
    todoState: { editedTodo },
    setTodoState,
  } = useTodoState(todo);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if ((e.target as HTMLElement).textContent === "EDIT") {
      onEditTodo(editedTodo, todo.id);
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
