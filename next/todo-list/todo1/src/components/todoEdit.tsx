"use client";

import { useState } from "react";
import { TodoProps } from "../../types/types";
import style from "./todoEdit.module.css";
import { editTodo } from "@/actions/editTodo.action";
import { addComments } from "@/actions/comment/addComments.action";
import { editComments } from "@/actions/comment/editComments.action";

const TodoEdit = ({ todo, comments }: { todo: TodoProps; comments: any }) => {
  const [isEditTodo, setIsEditTodo] = useState(false);

  const [todoValue, setTodoValue] = useState(todo?.todo);
  const [todoContentValue, setTodoContentValue] = useState(todo?.content);

  const [todoComment, setTodoComment] = useState(
    (comments?.[0] as any)?.content ?? "코멘트가 없습니다."
  );

  const onClick = () => {
    const params: TodoProps = {
      id: todo.id,
      todo: todoValue,
      content: todoContentValue,
    };
    editTodo(params);

    if (!(comments?.[0] as any)?.content) {
      addComments({ id: todo.id, content: todoComment });
    } else if (
      (comments?.[0] as any)?.content !== todoComment &&
      todoComment !== undefined
    ) {
      editComments({
        id: todo.id,
        commentId: (comments?.[0] as any)?.id,
        content: todoComment,
      });
    }
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
      <label>
        <span>COMMENT</span>
        <textarea
          value={todoComment}
          onChange={(e) => setTodoComment(e.target.value)}
          disabled={!isEditTodo}
        />
      </label>
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
      <button onClick={() => setIsEditTodo((prev) => !prev)}>
        {isEditTodo ? "CANCEL" : "EDIT TODO"}
      </button>
    </section>
  );
};

export default TodoEdit;
