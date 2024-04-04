import styles from "./todoList.module.scss";
import TodoItem from "./TodoItem";
import { TodoObj } from "../../../utils/types";

const TodoList = ({ todos }: { todos: TodoObj[] }) => {
  return (
    <div className={styles.container}>
      {todos.map((item: TodoObj) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
