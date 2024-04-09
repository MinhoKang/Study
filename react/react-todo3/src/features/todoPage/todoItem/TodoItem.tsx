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
  const [isCheck, setIsCheck] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  return (
    <div className={css.itemBox}>
      {isEdit ? (
        <EditTodo
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo}
          setIsEdit={setIsEdit}
          todoId={todo.id}
        />
      ) : (
        <>
          <Todo todo={todo} isCheck={isCheck} />
          <TodoButtons
            setIsEdit={setIsEdit}
            isCheck={isCheck}
            setIsCheck={setIsCheck}
            setIsDelete={setIsDelete}
          />
        </>
      )}

      {isDelete && <DeleteModal todo={todo} setIsDelete={setIsDelete} />}
    </div>
  );
};

export default TodoItem;
