import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import style from "./[id].module.css";
import fetchOneBook from "@/lib/fetchOneBook";
import { useRouter } from "next/router";
import Head from "next/head";

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
    // false: 404페이지로 이동
    // "blocking": SSR 방식으로 실시간으로 페이지 생성
    // true: SSR 방식 but 데이터를 기다리지 않고 폴백 상태의 페이지(데이터 없는 html 페이지)먼저 반환. 데이터는 후속으로 처리
  };
};

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const { id } = context.params!;

  const book = await fetchOneBook(Number(id));

  if (!book) return { notFound: true };

  return { props: { book } };
};

const Page = ({ book }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      // fallback상태더라도 기본적인 메타 태그 적용을 위함
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
        <div>로딩중입니다</div>
      </>
    );
  }

  if (!book) return "문제 발생";

  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={coverImgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className={style.container}>
        <div
          style={{ backgroundImage: `url('${coverImgUrl}')` }}
          className={style.coverImgContainer}
        >
          <img src={coverImgUrl} />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {publisher}
        </div>
        <div className={style.description}>{description} </div>
      </div>
    </>
  );
};

export default Page;
