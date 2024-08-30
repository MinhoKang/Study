"use client";

import TodoItem from "./todoItem";
import style from "./allTodos.module.css";
import { TodoProps } from "../../types/types";

export const AllTodos = ({ allTodos }: { allTodos: TodoProps[] }) => {
  return (
    <section className={style.container}>
      {allTodos?.map((todo, idx) => (
        <TodoItem key={todo.id} idx={idx} {...todo} />
      ))}
    </section>
  );
};
