import { SearchableLayout } from "@/components/SearchableLayout";
import { ReactNode } from "react";
import books from "@/mock/books.json";
import { BookItem } from "@/components/BookItem";

const Index = () => {
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
