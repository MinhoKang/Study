import { TodoProps } from "../../../types/todo";
import css from "../../../styles/features/todoPage/todoItem.module.css";

const Todo = ({ todo }: TodoProps) => {
  return <p className={css.todoText}>{todo.todo}</p>;
};

export default Todo;
