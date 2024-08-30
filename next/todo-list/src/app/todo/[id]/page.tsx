import TodoEdit from "@/components/todoEdit";
import { getTodoById } from "../../../../utils/todos";
import style from "./page.module.css";

const TodoInfo = async ({ id }: { id: number }) => {
  const todo = await getTodoById(id);

  return (
      <TodoEdit todo={todo!} />
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
