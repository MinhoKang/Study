"use client";

import { useState } from "react";
import { TodoProps } from "../../types/types";
import style from "./todoEdit.module.css";
import { editTodo } from "@/actions/editTodo.action";

const TodoEdit = ({ todo }: { todo: TodoProps }) => {
  const [isEditTodo, setIsEditTodo] = useState(false);

  const [todoValue, setTodoValue] = useState(todo?.todo);
  const [todoContentValue, setTodoContentValue] = useState(todo?.content);

  const onClick = () => {
    const params: TodoProps = {
      id: todo.id,
      todo: todoValue,
      content: todoContentValue,
    };
    editTodo(params);
  };

  return (
    <section className={style.container}>
      <label>
        <span>TODO</span>
        <input
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          disabled={!isEditTodo}
        />
      </label>

      <label>
        <span>CONTENT</span>
        <textarea
          value={todoContentValue}
          onChange={(e) => setTodoContentValue(e.target.value)}
          disabled={!isEditTodo}
        />
      </label>
      <button onClick={() => setIsEditTodo((prev) => !prev)}>
        {isEditTodo ? "CANCEL" : "EDIT TODO"}
      </button>
      {isEditTodo && (
        <button
          onClick={() => {
            onClick();
            setIsEditTodo((prev) => !prev);
          }}
        >
          SUBMIT
        </button>
      )}
    </section>
  );
};

export default TodoEdit;
