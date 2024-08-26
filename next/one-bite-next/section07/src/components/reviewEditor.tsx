"use client";

import { createReviewAction } from "@/actions/createReview.action";
import style from "./reviewEditor.module.css";
import { useActionState, useEffect } from "react";

export const ReviewEditor = ({ bookId }: { bookId: string }) => {
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null
  );

  useEffect(() => {
    if (state && !state.statue) alert("오류 발생");
  }, [state]);
  return (
    <section>
      <form action={formAction} className={style.formContainer}>
        <input name="bookId" value={bookId} hidden />
        <textarea
          disabled={isPending}
          required
          name="content"
          placeholder="리뷰 내용"
        />
        <div className={style.submitContainer}>
          <input
            disabled={isPending}
            required
            type="text"
            name="author"
            placeholder="작성자"
          />
          <button disabled={isPending} type="submit">
            {isPending ? "..." : "작성하기"}
          </button>
        </div>
      </form>
    </section>
  );
};
