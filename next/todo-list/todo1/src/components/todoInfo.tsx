import { getComments } from "@/actions/comment/getComments.action";
import { getTodoById } from "../../utils/todos";
import TodoEdit from "./todoEdit";
import style from "./todoInfo.module.css";
import CommentEditor from "./commentEditor";
import CommentList from "./commentList";
import { CommentsProps, TodoProps } from "../../types/types";

export const TodoInfo = async ({ id }: { id: number }) => {
  const todo: TodoProps | null = await getTodoById(id);
  const comments: CommentsProps[] = await getComments(id);
  return (
    <div className={style.container}>
      {todo ? (
        <>
          <TodoEdit todo={todo} comments={comments} />
          <p>COMMENTS</p>
          <CommentEditor id={todo.id} />
          {comments?.map((comment) => (
            <CommentList
              key={comment.id}
              id={todo.id}
              contentId={comment.id}
              content={comment.content}
            />
          ))}
        </>
      ) : (
        <p>할 일을 찾을 수 없습니다.</p>
      )}
    </div>
  );
};
