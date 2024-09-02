"use client";

import { useState } from "react";
import type { CommentsProps, TodoProps } from "../../types/types";
import style from "./todoEdit.module.css";
import { editTodo } from "@/actions/editTodo.action";
import { addComments } from "@/actions/comment/addComments.action";
import { editComments } from "@/actions/comment/editComments.action";
import { revalidateTag } from "next/cache";
import CommentList from "./commentList";

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
  const [todoComment, setTodoComment] = useState(
    comments.map((comment) => comment.content) ?? "코멘트가 없습니다."
  );

  console.log("commentscomments", todoComment);

  const onClick = () => {
    const params: TodoProps = {
      id: todo.id,
      todo: todoValue,
      content: todoContentValue,
    };
    editTodo(params);
    addComments({ id: todo.id, content: commentValue });

    // if (!comments.length) {
    //   addComments({ id: todo.id, content: commentValue });
    // }
    //  else {
    //   editComments({
    //     id: todo.id,
    //     commentId: (comments?.[0] as any)?.id,
    //     content: commentValue,
    //   });
    // }
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
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          disabled={!isEditTodo}
        />
      </label>
      {comments.map((comment) => (
        <CommentList
          key={comment.id}
          id={todo.id}
          contentId={comment.id}
          content={comment.content}
        />
      ))}
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
