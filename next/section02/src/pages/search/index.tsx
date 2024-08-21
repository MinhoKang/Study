import { SearchableLayout } from "@/components/SearchableLayout";
import { ReactNode } from "react";
import { BookItem } from "@/components/BookItem";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetchBooks";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { q } = context.query;

  const books = await fetchBooks(q as string);

  return { props: { books } };
};

const Index = ({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
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
