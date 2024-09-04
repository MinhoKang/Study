"use client";

import { removeTodo } from "@/actions/removeTodo.action";
import type { TodoProps } from "../../types/types";
import style from "./todoItem.module.css";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

const TodoItem = ({
  id,
  todo,
  content,
  idx,
  checked,
  setCheckedTodoIds,
}: TodoProps & {
  idx: number;
  setCheckedTodoIds: Dispatch<SetStateAction<number[]>>;
  checked: boolean;
}) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/todo/${id}`);
  };

  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setCheckedTodoIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((todoId) => todoId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className={style.container} onClick={onClick}>
      <p className={style.todoNumber}>{idx}</p>
      <p className={style.todo}>{todo}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          removeTodo(id);
        }}
      >
        ❌
      </button>
      <input
        type="checkbox"
        onClick={(e) => e.stopPropagation()}
        onChange={handleCheckboxClick}
        checked={checked}
      />
    </div>
  );
};

export default TodoItem;
