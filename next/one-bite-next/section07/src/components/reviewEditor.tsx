import { createReviewAction } from "@/actions/createReview.action";
import style from "./reviewEditor.module.css";

export const ReviewEditor = ({ bookId }: { bookId: string }) => {
  return (
    <section>
      <form action={createReviewAction} className={style.formContainer}>
        <input name="bookId" value={bookId} hidden />
        <textarea required name="content" placeholder="리뷰 내용" />
        <div className={style.submitContainer}>
          <input required type="text" name="author" placeholder="작성자" />
          <button type="submit">작성하기</button>
        </div>
      </form>
    </section>
  );
};
