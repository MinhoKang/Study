import { notFound } from "next/navigation";
import style from "./page.module.css";
import { BookData, ReviewData } from "@/types";
import ReviewItem from "@/components/reviewItem";
import { ReviewEditor } from "@/components/reviewEditor";
import Image from "next/image";
import { Metadata } from "next";

// generateStaticParams에서 return하는 값 외에는 전부 404로 보내기
// export const dynamicParams = false;

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

async function BookDetail({ bookId }: { bookId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`,
    {
      next: { tags: [`review-${bookId}`] },
    }
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
        <Image
          src={coverImgUrl}
          width={240}
          height={300}
          alt={`도서 ${title}의 커버 이미지`}
        />
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

async function ReviewList({ bookId }: { bookId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`
  );

  if (!response.ok)
    throw new Error(`Review fetch failed: ${response.statusText}`);

  const reviews: ReviewData[] = await response.json();

  return (
    <section>
      {reviews.map((review) => (
        <ReviewItem key={`review-item-${review.id}`} {...review} />
      ))}
    </section>
  );
}

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata | null> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${params.id}`
  );

  if (!response.ok) throw new Error(response.statusText);

  const bookData: BookData = await response.json();

  return {
    title: `${bookData.title} - 한입북스`,
    description: `${bookData.description}`,
    openGraph: {
      title: `${bookData.title} - 한입북스`,
      description: `${bookData.description}`,
      images: [bookData.coverImgUrl],
    },
  };
};

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className={style.container}>
      <BookDetail bookId={params.id} />
      <ReviewEditor bookId={params.id} />
      <ReviewList bookId={params.id} />
    </div>
  );
}
