import { TodoObj } from "../../../types/todo";
import css from "../../../styles/features/todoPage/todoItem.module.css";
import cn from "classnames";

interface Props {
  todo: TodoObj;
  isCheck: boolean;
}

const Todo = ({ todo, isCheck }: Props) => {
  return (
    <p className={cn(css.todoText, isCheck && css.lineThrough)}>{todo.todo}</p>
  );
};

export default Todo;
