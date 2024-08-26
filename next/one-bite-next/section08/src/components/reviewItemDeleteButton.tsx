"use client";

import { deleteReviewAction } from "@/actions/deleteReview.action";
import { useActionState, useEffect, useRef } from "react";

const ReviewItemDeleteButton = ({
  reviewId,
  bookId,
}: {
  reviewId: number;
  bookId: number;
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null
  );

  useEffect(() => {
    if (state && !state.status) alert(state.error);
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
      <input name="reviewId" hidden value={reviewId} />
      <input name="bookId" hidden value={bookId} />
      {isPending ? (
        <div>...</div>
      ) : (
        <div className="" onClick={() => formRef.current?.requestSubmit()}>
          삭제하기
        </div>
      )}
    </form>
  );
};

export default ReviewItemDeleteButton;
