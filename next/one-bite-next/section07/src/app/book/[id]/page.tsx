import { notFound } from "next/navigation";
import style from "./page.module.css";

// generateStaticParams에서 return하는 값 외에는 전부 404로 보내기
// export const dynamicParams = false;

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

async function BookDetail({ bookId }: { bookId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`
  );

  if (!response.ok) {
    if (response.status === 404) notFound();
    return <div>오류</div>;
  }

  const bookData = await response.json();

  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    bookData;

  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
}

const ReviewEditor = ({ bookId }: { bookId: string }) => {
  async function createReviewAvtion(formData: FormData) {
    "use server";
    const content = formData.get("content")?.toString;
    const author = formData.get("author")?.toString;

    if (!content || !author) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
        {
          method: "POST",
          body: JSON.stringify({ bookId, content, author }),
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
      return;
    }
  }

  return (
    <section>
      <form action={createReviewAvtion}>
        <input required type="text" name="content" placeholder="리뷰 내용" />
        <input required type="text" name="author" placeholder="작성자" />
        <button type="submit">작성하기</button>
      </form>
    </section>
  );
};

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className={style.container}>
      <BookDetail bookId={params.id} />
      <ReviewEditor bookId={params.id} />
    </div>
  );
}
