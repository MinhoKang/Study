"use client";

import { useState } from "react";
import style from "./commentEditor.module.css";
import { addComments } from "@/actions/comment/addComments.action";

const CommentEditor = ({ id }: { id: number }) => {
  const [commentValue, setCommentValue] = useState("");

  const onClick = () => {
    addComments({ id, content: commentValue });
    setCommentValue("");
  };

  return (
    <div className={style.container}>
      <label>
        <span>ENTER COMMENT</span>
        <textarea
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
      </label>
      <button onClick={onClick}>SUBMIT</button>
    </div>
  );
};

export default CommentEditor;
