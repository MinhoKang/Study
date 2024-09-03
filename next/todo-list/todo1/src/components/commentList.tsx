"use client";

import { editComments } from "@/actions/comment/editComments.action";
import style from "./commentList.module.css";
import { useState } from "react";
import { removeComments } from "@/actions/comment/removeComments.action";

interface Props {
  id: number;
  contentId: number;
  content: string;
}

const CommentList = ({ id, content, contentId }: Props) => {
  const [isEditContent, setIsEditContent] = useState(false);
  const [comment, setComment] = useState(content);

  const onEditClick = () => {
    setIsEditContent((prev) => !prev);
    if (isEditContent) {
      editComments({ id, commentId: contentId, content: comment });
    }
  };

  const onDeleteClick = () => {
    removeComments({ id, commentId: contentId });
  };

  return (
    <div className={style.container}>
      <textarea
        className={style.content}
        value={comment}
        disabled={!isEditContent}
        onChange={(e) => setComment(e.target.value)}
      />
      <div className={style.buttonContainer}>
        <button onClick={onEditClick}>
          {isEditContent ? "SUBMIT" : "EDIT"}
        </button>
        <button onClick={onDeleteClick}>DELETE</button>
        {isEditContent && (
          <button onClick={() => setIsEditContent((prev) => !prev)}>
            CANCEL
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentList;
