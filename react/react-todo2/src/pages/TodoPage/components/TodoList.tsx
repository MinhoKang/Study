import styles from "./todoList.module.scss";
import TodoItem from "./TodoItem";
import { AddTodoListFunction, TodoObj } from "../../../utils/types";

const TodoList = ({
  todos,
  refreshTodo,
}: {
  todos: TodoObj[];
  refreshTodo: AddTodoListFunction;
}) => {
  return (
    <div className={styles.container}>
      {todos.map((item: TodoObj) => (
        <TodoItem key={item.id} item={item} refreshTodo={refreshTodo} />
      ))}
    </div>
  );
};

export default TodoList;
