import { getTodoById } from "../../../../utils/todos";
import style from "./page.module.css";

const TodoInfo = async ({ id }: { id: number }) => {
  const todo = await getTodoById(id);

  return (
    <section>
      <p>{todo?.id}</p>
      <p>{todo?.todo}</p>
      <p>{todo?.content}</p>
    </section>
  );
};

const Page = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      <TodoInfo id={params.id} />
      <button>수정하기</button>
    </div>
  );
};

export default Page;
