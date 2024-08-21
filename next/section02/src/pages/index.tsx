import { SearchableLayout } from "@/components/SearchableLayout";
import style from "./index.module.css";
import { ReactNode } from "react";
import books from "@/mock/books.json";
import { BookItem } from "@/components/BookItem";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = () => {
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수
  // Next에서 약속된 이름의 함수

  const data = "hello";

  // getServerSideProps의 return문은 props(객체)가 포함된 객체를 반환해야 함
  return {
    props: {
      data,
      // data는 props로 바로 사용 가능
    },
  };
};

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);
  // 서버에서도 실행되기 때문에 터미널에도 출력 => window 객체와 같이 js에서 사용하는 문법을 쓰면 오류 발생
  // useEffect 사용해서 해결 => 마운트 이후에 실행되기 때문

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
