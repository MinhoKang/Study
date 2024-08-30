import TodoEdit from "@/components/todoEdit";
import { getTodoById } from "../../../../utils/todos";
import style from "./page.module.css";
import { getComments } from "@/actions/comment/getComments.action";

const TodoInfo = async ({ id }: { id: number }) => {
  const todo = await getTodoById(id);
  const comments = await getComments(id);
  console.log("commentscommentscomments", comments);
  return <TodoEdit todo={todo!} comments={comments} />;
};

const Page = ({ params }: { params: { id: number } }) => {
  return <TodoInfo id={params.id} />;
};

export default Page;
