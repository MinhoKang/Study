import css from "../../../styles/features/todoPage/todoItem.module.css";
import TodoButtons from "./TodoButtons";
import DeleteModal from "./DeleteModal";
import { TodoObj } from "../../../types";
import { useState } from "react";
import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { Context } from "../../../types/mutaion";

interface TodoItemProps {
  todo: TodoObj;
  onEditTodoItem: UseMutateFunction<
    AxiosResponse<Context> | undefined,
    Context,
    { editedTodo: string; id: number },
    { prevTodos: TodoObj[] }
  >;
  onDeleteTodoItem: UseMutateFunction<
    AxiosResponse<Context> | undefined,
    Context,
    number,
    { prevTodos: TodoObj[] }
  >;
}

const TodoItem = ({
  todo,
  onEditTodoItem,
  onDeleteTodoItem,
}: TodoItemProps) => {
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
      />

      {!isEdit ? (
        <TodoButtons onHandleClick={handleClick} />
      ) : (
        <div className={css.btns}>
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
