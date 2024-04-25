import css from "../../../styles/features/todoPage/todoItem.module.css";
import TodoButtons from "./TodoButtons";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import cn from "classnames";
import { useTodoMutations } from "../../../apis";
import { TodoObj } from "../../../types";
import { useNavigate } from "react-router-dom";

interface TodoItemProps {
  todo: TodoObj;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  // TODO: 수정
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.todo);

  const { editTodoItem } = useTodoMutations();
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    if (id === "check") {
      setIsCheck(!isCheck);
    } else if (id === "edit") {
      setIsEdit(true);
    } else if (id === "delete") {
      setIsDelete(true);
    }
  };
  const navigate = useNavigate();

  return (
    <div className={css.itemBox}>
      <p className={css.detail} onClick={() => navigate(`/todo/${todo.id}`)}>
        detail
      </p>
      <input
        type="text"
        value={editedTodo}
        readOnly={!isEdit}
        onChange={(e) => setEditedTodo(e.target.value)}
        className={cn(css.editInput, isCheck && css.lineThrough)}
      />
      {isEdit ? (
        // TODO: 수정
        <div className={css.editButtons}>
          <p
            className={css.editBtn}
            onClick={() => {
              editTodoItem({ editedTodo, id: todo.id });
              setIsEdit(false);
            }}
          >
            EDIT
          </p>
          <p
            className={css.editBtn}
            onClick={() => {
              setEditedTodo(todo.todo);
              setIsEdit(false);
            }}
          >
            CANCEL
          </p>
        </div>
      ) : (
        <TodoButtons onHandleClick={handleClick} />
      )}
      {isDelete && <DeleteModal setIsDelete={setIsDelete} todoId={todo.id} />}
    </div>
  );
};

export default TodoItem;
