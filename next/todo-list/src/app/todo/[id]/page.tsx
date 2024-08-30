import { getTodoById } from "../../../../utils/todos";
import style from "./page.module.css";

const TodoInfo = async ({ id }: { id: number }) => {
  const todo = await getTodoById(id);

  return (
    <section>
      <p>{todo?.id}</p>
      <input value={todo?.todo} />
      <p>{todo?.content}</p>
      <button>수정하기</button>
    </section>
  );
};

const Page = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      <TodoInfo id={params.id} />
    </div>
  );
};

export default Page;
