"use client";

import { useState } from "react";
import type { CommentsProps, TodoProps } from "../../types/types";
import style from "./todoEdit.module.css";
import { editTodo } from "@/actions/editTodo.action";
import { addComments } from "@/actions/comment/addComments.action";
import CommentList from "./commentList";
import CommentEditor from "./commentEditor";

const TodoEdit = ({
  todo,
  comments,
}: {
  todo: TodoProps;
  comments: CommentsProps[];
}) => {
  const [isEditTodo, setIsEditTodo] = useState(false);

  const [todoValue, setTodoValue] = useState(todo?.todo);
  const [todoContentValue, setTodoContentValue] = useState(todo?.content);
  const [commentValue, setCommentValue] = useState("");

  console.log("comments", comments);

  const onClick = () => {
    const params: TodoProps = {
      id: todo.id,
      todo: todoValue,
      content: todoContentValue,
    };
    editTodo(params);
    setCommentValue("");
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
      <button
        onClick={() => {
          setCommentValue("");
          setIsEditTodo((prev) => !prev);
        }}
      >
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
      <p>COMMENTS</p>
      <CommentEditor id={todo.id} />
      {comments.map((comment) => (
        <CommentList
          key={comment.id}
          id={todo.id}
          contentId={comment.id}
          content={comment.content}
        />
      ))}
    </section>
  );
};

export default TodoEdit;
