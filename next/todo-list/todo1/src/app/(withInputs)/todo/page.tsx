import TodoItem from "@/components/todoItem";
import type { TodoProps } from "../../../../types/types";
import { getCookie } from "../../../../utils/cookie";
import style from "./page.module.css";
import { getTodos } from "@/actions/getTodos.action";

const AllTodos = async () => {
  const allTodos = await getTodos();

  return (
    <section className={style.container}>
      {allTodos?.map((todo, idx) => (
        <TodoItem key={todo.id} idx={idx} {...todo} />
      ))}
    </section>
  );
};

const Page = async () => {
  return (
    <div>
      <AllTodos />
    </div>
  );
};

export default Page;
