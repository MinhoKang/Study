import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import style from "./[id].module.css";
import fetchOneBook from "@/lib/fetchOneBook";

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const { id } = context.params!;
  const book = await fetchOneBook(Number(id));

  return { props: { book } };
};

const Page = ({ book }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!book) return "문제 발생";

  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;

  return (
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
  );
};

export default Page;
