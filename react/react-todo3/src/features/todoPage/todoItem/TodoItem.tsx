import css from "../../../styles/features/todoPage/todoItem.module.css";
import TodoButtons from "./TodoButtons";
import { TodoItemProps } from "../../../types";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

const TodoItem = ({
  todo,
  onEditTodoItem,
  onDeleteTodoItem,
}: TodoItemProps) => {
  // TODO: 수정
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.todo);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    if (id === "check") {
      setIsCheck(!isCheck);
    } else if (id === "edit") {
      setIsEdit(true);
      console.log("info", todo.id, isEdit);
    } else if (id === "delete") {
      setIsDelete(true);
    }
  };

  return (
    <div className={css.itemBox}>
      <input
        type="text"
        defaultValue={editedTodo}
        readOnly={!isEdit}
        onChange={(e) => setEditedTodo(e.target.value)}
        className={css.editInput}
      />
      {isEdit ? (
        // TODO: 수정
        <div className={css.editButtons}>
          <p
            className={css.editBtn}
            onClick={() => {
              onEditTodoItem({ editedTodo, id: todo.id });
              setIsEdit(false);
            }}
          >
            EDIT
          </p>
          <p className={css.editBtn} onClick={() => setIsEdit(false)}>
            CANCEL
          </p>
        </div>
      ) : (
        <TodoButtons onHandleClick={handleClick} />
      )}
      {isDelete && (
        <DeleteModal
          setIsDelete={setIsDelete}
          onDeleteTodoItem={() => onDeleteTodoItem(todo.id)}
        />
      )}
    </div>
  );
};

export default TodoItem;
