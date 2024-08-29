"use client";

import { removeTodo } from "@/actions/removeTodo.action";
import type { TodoProps } from "../../types/types";
import style from "./todoItem.module.css";
import { useRouter } from "next/navigation";

const TodoItem = ({ id, todo, content, idx }: TodoProps & { idx: number }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/todo/${id}`);
  };

  return (
    <div className={style.container} onClick={onClick}>
      <p className={style.todoNumber}>{idx}</p>
      <p className={style.todoNumber}>id:{id}</p>
      <p className={style.todo}>{todo}</p>
      <button onClick={() => removeTodo(id)}>X</button>
    </div>
  );
};

export default TodoItem;
