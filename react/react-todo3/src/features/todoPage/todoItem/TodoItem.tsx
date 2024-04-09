import { TodoProps } from "../../../types/todo";
import css from "../../../styles/features/todoPage/todoItem.module.css";
import { useState } from "react";
import Todo from "./Todo";
import EditTodo from "./EditTodo";
import TodoButtons from "./TodoButtons";
import DeleteModal from "./DeleteModal";

const TodoItem = ({ todo }: TodoProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.todo);

  return (
    <div className={css.itemBox}>
      {isEdit ? (
        <EditTodo editedTodo={editedTodo} setEditedTodo={setEditedTodo} />
      ) : (
        <Todo todo={todo} />
      )}
      <TodoButtons todo={todo} setIsEdit={setIsEdit} />
      {isEdit && <DeleteModal todo={todo} setIsEdit={setIsEdit} />}
    </div>
  );
};

export default TodoItem;
