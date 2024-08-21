import { SearchableLayout } from "@/components/SearchableLayout";
import style from "./index.module.css";
import { ReactNode } from "react";
import { BookItem } from "@/components/BookItem";
import { InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetchBooks";
import fetchRandomBooks from "@/lib/fetchRandomBooks";

export const getServerSideProps = async () => {
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수
  // Next에서 약속된 이름의 함수

  // const allBooks = await fetchBooks();
  // const recommendedBooks = await fetchRandomBooks();

  const [allBooks, recommendedBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  // getServerSideProps의 return문은 props(객체)가 포함된 객체를 반환해야 함
  return {
    props: {
      allBooks,
      recommendedBooks,
    },
  };
};

export default function Home({
  allBooks,
  recommendedBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recommendedBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
