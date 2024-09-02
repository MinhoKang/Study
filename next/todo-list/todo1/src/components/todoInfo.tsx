import { getComments } from "@/actions/comment/getComments.action";
import { getTodoById } from "../../utils/todos";
import TodoEdit from "./todoEdit";
import style from "./todoInfo.module.css";

export const TodoInfo = async ({ id }: { id: number }) => {
  const todo = await getTodoById(id);
  const comments = await getComments(id);
  console.log(id, "comments", comments);
  return <TodoEdit todo={todo!} comments={comments} />;
};
