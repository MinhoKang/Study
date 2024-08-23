import style from "./bookItemSkeleton.module.css";

const BookItemSkeleton = () => {
  return (
    <div className={style.container}>
      <div className={style.coverImg}></div>
      <div className={style.infoContainer}>
        <div className={style.title}></div>
        <div className={style.subTitle}></div>
        <br />
        <div className={style.author}></div>
      </div>
    </div>
  );
};

export default BookItemSkeleton;
