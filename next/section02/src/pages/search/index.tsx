import { SearchableLayout } from "@/components/SearchableLayout";
import { ReactNode } from "react";
import { BookItem } from "@/components/BookItem";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import fetchBooks from "@/lib/fetchBooks";
import Head from "next/head";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { q } = context.query;
  // SSG방식으로는 쿼리 스트링을 불러올 수 없음 -> 서버에서 이미 실행되기 때문에 브라우저의 정보 못 읽음
  // 따라서 SSR방식으로 작동하게 해야 한다.

  const books = await fetchBooks(q as string);

  return { props: { books } };
};

const Index = ({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head>
        <title>한입북스 - 검색 결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스 검색 결과" />
        <meta
          property="og:description"
          content="한입 북스에 등록된 도서들을 만나보세요"
        />
      </Head>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

export default Index;

Index.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
