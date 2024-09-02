"use client";

import TodoItem from "./todoItem";
import style from "./allTodos.module.css";
import { TodoProps } from "../../types/types";
import { useEffect, useState } from "react";

export const AllTodos = ({
  allTodos,
  q,
}: {
  allTodos: TodoProps[];
  q?: string;
}) => {
  const [searchedTodos, setSearchedTodos] = useState(allTodos);
  const [checkedTodoIds, setCheckedTodoIds] = useState<number[]>([]);

  const filterTodos = ({
    todos,
    checkedTodoIds,
  }: {
    todos: TodoProps[];
    checkedTodoIds: number[];
  }) => {
    const nonChecked = todos?.filter(
      (todo) => !checkedTodoIds.includes(todo.id)
    );
    const checked = todos?.filter((todo) => checkedTodoIds.includes(todo.id));
    return { nonChecked, checked };
  };

  const nonCheckedTodos = filterTodos({
    todos: searchedTodos,
    checkedTodoIds,
  }).nonChecked;

  const checkedTodos = filterTodos({
    todos: searchedTodos,
    checkedTodoIds,
  }).checked;

  useEffect(() => {
    if (!q) return setSearchedTodos(allTodos);

    const searched = allTodos.filter((todo) => todo.todo.includes(q));

    setSearchedTodos(searched);
  }, [q, allTodos]);

  return (
    <section className={style.container}>
      <span>미완료</span>
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
      <span>완료</span>
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
