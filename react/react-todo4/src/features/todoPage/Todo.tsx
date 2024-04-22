import { TodoObj } from "../../types";
import cn from "classnames";
import css from "../../styles/features/todoPage/todoItem.module.css";

interface TodoProps {
  todo: TodoObj;
  isCheck: boolean;
  isEdit: boolean;
  setIsEdit: (newValue: boolean) => void;
}
const Todo = ({ todo, isCheck, isEdit, setIsEdit }: TodoProps) => {
  return (
    <input
      className={cn(css.todoText, css.editInput, isCheck && css.lineThrough)}
      value={todo.todo}
      readOnly={!isEdit}
    />
  );
};

export default Todo;
