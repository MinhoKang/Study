import { SearchableLayout } from "@/components/SearchableLayout";
import style from "./index.module.css";
import { ReactNode } from "react";
import { BookItem } from "@/components/BookItem";
import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetchBooks";
import fetchRandomBooks from "@/lib/fetchRandomBooks";
import Head from "next/head";

// export const getServerSideProps = async () => {
//   // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수
//   // Next에서 약속된 이름의 함수
//   // SSR방식으로 작동하게 하는 함수

//   // const allBooks = await fetchBooks();
//   // const recommendedBooks = await fetchRandomBooks();

//   const [allBooks, recommendedBooks] = await Promise.all([
//     fetchBooks(),
//     fetchRandomBooks(),
//   ]);

//   // getServerSideProps의 return문은 props(객체)가 포함된 객체를 반환해야 함
//   return {
//     props: {
//       allBooks,
//       recommendedBooks,
//     },
//   };
// };

export const getStaticProps = async () => {
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수
  // Next에서 약속된 이름의 함수
  // SSG방식으로 작동하게 하는 함수

  const [allBooks, recommendedBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

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
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>한입북스</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스" />
        <meta
          property="og:description"
          content="한입 북스에 등록된 도서들을 만나보세요"
        />
      </Head>
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
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
