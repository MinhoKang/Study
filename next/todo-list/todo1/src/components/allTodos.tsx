"use client";

import TodoItem from "./todoItem";
import style from "./allTodos.module.css";
import { TodoProps } from "../../types/types";
import { useState } from "react";

export const AllTodos = ({ allTodos }: { allTodos: TodoProps[] }) => {
  const [checkedTodoIds, setCheckedTodoIds] = useState<number[]>([]);

  const filterTodos = ({
    todos,
    checkedTodoIds,
  }: {
    todos: TodoProps[];
    checkedTodoIds: number[];
  }) => {
    const nonChecked = todos.filter(
      (todo) => !checkedTodoIds.includes(todo.id)
    );
    const checked = todos.filter((todo) => checkedTodoIds.includes(todo.id));
    return { nonChecked, checked };
  };

  const nonCheckedTodos = filterTodos({
    todos: allTodos,
    checkedTodoIds,
  }).nonChecked;

  const checkedTodos = filterTodos({
    todos: allTodos,
    checkedTodoIds,
  }).checked;

  return (
    <section className={style.container}>
      {nonCheckedTodos?.map((todo, idx) => (
        <TodoItem
          key={todo.id}
          idx={idx}
          setCheckedTodoIds={setCheckedTodoIds}
          checked={checkedTodoIds.includes(todo.id)}
          {...todo}
        />
      ))}
      <div className={style.line}></div>
      {checkedTodos?.map((todo, idx) => (
        <TodoItem
          key={todo.id}
          idx={idx}
          setCheckedTodoIds={setCheckedTodoIds}
          checked={checkedTodoIds.includes(todo.id)}
          {...todo}
        />
      ))}
    </section>
  );
};
