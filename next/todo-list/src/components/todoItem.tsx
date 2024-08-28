import type { TodoProps } from "../../types/types";
import style from "./todoItem.module.css";

const TodoItem = ({ id, todo, content, idx }: TodoProps & { idx: number }) => {
  return (
    <div className={style.container}>
      <p className={style.todoNumber}>{idx}</p>
      <p className={style.todo}>{todo}</p>
      <button>X</button>
    </div>
  );
};

export default TodoItem;
