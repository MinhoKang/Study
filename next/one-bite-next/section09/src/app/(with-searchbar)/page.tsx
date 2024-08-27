import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";
import { delay } from "@/util/delay";
import { Suspense } from "react";
import BookItemSkeleton from "@/components/skeleton/BookItemSkeleton";
import BookListSkeleton from "@/components/skeleton/BookListSkeleton";
import { Metadata } from "next";

const AllBooks = async () => {
  await delay(1500);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }
  );

  if (!response.ok) return <div>오류 발생...</div>;

  const allbooks: BookData[] = await response.json();

  return (
    <div>
      {allbooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

const RecommendedBooks = async () => {
  await delay(3000);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    { next: { revalidate: 3 } }
  );

  if (!response.ok) return <div>오류 발생...</div>;

  const recommendedBooks: BookData[] = await response.json();

  return (
    <div>
      {recommendedBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "한입북스",
  description: "한입 북스 도서",
  openGraph: {
    title: "한입 북스",
    description: "한입 북스 도서",
    images: ["/thumbnail.png"],
    // /만 적으면 public 디렉토리를 의미
  },
};

export default async function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <Suspense fallback={<BookListSkeleton count={3} />}>
          <RecommendedBooks />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <Suspense fallback={<BookListSkeleton count={3} />}>
          <AllBooks />
        </Suspense>
      </section>
    </div>
  );
}
