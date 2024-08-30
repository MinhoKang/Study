import TodoItem from "@/components/todoItem";
import type { TodoProps } from "../../../../types/types";
import { getCookie } from "../../../../utils/cookie";
import style from "./page.module.css";

const AllTodos = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/todos`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")?.value}`,
        },
        next: { tags: ["todos"] },
      }
    );

    if (!response.ok) return <div>오류 발생</div>;

    const allTodos: TodoProps[] = await response.json();

    return (
      <section className={style.container}>
        {allTodos.map((todo, idx) => (
          <TodoItem key={todo.id} idx={idx} {...todo} />
        ))}
      </section>
    );
  } catch (error) {
    console.log(error);
  }
};

const Page = async () => {
  return (
    <div>
      <AllTodos />
    </div>
  );
};

export default Page;
