import { ReviewData } from "@/types";
import style from "./reviewItem.module.css";

const ReviewItem = ({ id, content, author, createdAt, bookId }: ReviewData) => {
  return (
    <div className={style.container}>
      <div className={style.author}>{author}</div>
      <div className={style.content}>{content}</div>
      <div className={style.bottomContainer}>
        <div className={style.date}>{new Date(createdAt).toLocaleString()}</div>
        <div className={style.deleteBtn}>삭제하기</div>
      </div>
    </div>
  );
};

export default ReviewItem;
