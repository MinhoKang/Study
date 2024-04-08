import { TodoObj } from "../../types/todo";
import css from "../../styles/features/todoPage/todoItem.module.css";
import cn from "classnames";
import { todoButtons } from "../../constants/todoPage/todoButton";
import Button from "../../components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Todo {
  todo: TodoObj;
}

const TodoItem = ({ todo }: Todo) => {
  return (
    <div className={css.itemBox}>
      <p className={cn(css.todoText)}>{todo.todo}</p>
      <div className={css.buttons}>
        {todoButtons.map((btn) => (
          <Button key={btn.index} className={btn.className}></Button>
        ))}
      </div>
    </div>
  );
};

export default TodoItem;
