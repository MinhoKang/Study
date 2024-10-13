import css from "../../../styles/features/todoPage/todoItem.module.css";
import TodoButtons from "./TodoButtons";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import cn from "classnames";
import { useTodoMutations } from "../../../apis";
import { TodoObj } from "../../../types";
import { Link } from "react-router-dom";

interface TodoItemProps {
  todo: TodoObj;
}

const TodoItem = ({ todo }: TodoItemProps) => {
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

  return (
    <div className={css.itemBox}>
      <Link to={`/todo/${todo.id}`} className={css.detail}>
        detail
      </Link>
      <input
        type="text"
        value={editedTodo}
        readOnly={!isEdit}
        onChange={(e) => setEditedTodo(e.target.value)}
        className={cn(css.editInput, isCheck && css.lineThrough)}
      />
      {isEdit ? (
        // ?: 선언적으로 바꾸고 이벤트버블링을 사용해야 하는지, 그렇다면 handleClick과 동일한 구조의 함수가 하나 더 생기는데 useTodo로 빼기?
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
