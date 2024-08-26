import { ReviewData } from "@/types";
import style from "./reviewItem.module.css";
import ReviewItemDeleteButton from "./reviewItemDeleteButton";

const ReviewItem = ({ id, content, author, createdAt, bookId }: ReviewData) => {
  return (
    <div className={style.container}>
      <div className={style.author}>{author}</div>
      <div className={style.content}>{content}</div>
      <div className={style.bottomContainer}>
        <div className={style.date}>{new Date(createdAt).toLocaleString()}</div>
        <ReviewItemDeleteButton reviewId={id} bookId={bookId} />
      </div>
    </div>
  );
};

export default ReviewItem;
