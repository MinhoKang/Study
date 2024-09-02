"use client";

import { useActionState } from "react";
import style from "./todoInput.module.css";
import { addTodo } from "@/actions/addTodo.action";

const TodoInput = () => {
  const [state, formAction, isPending] = useActionState(addTodo, null);

  return (
    <form action={formAction} className={style.formContainer}>
      <input type="text" required disabled={isPending} name="todo" autoFocus />
      <button type="submit" disabled={isPending}>
        {isPending ? "..." : "ADD"}
      </button>
    </form>
  );
};

export default TodoInput;
