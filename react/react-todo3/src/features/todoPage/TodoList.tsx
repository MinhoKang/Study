import css from "../../styles/features/todoPage/todoList.module.css";
import { TodoObj } from "../../types/todo";
import TodoItem from "./todoItem/TodoItem";

const TodoList = ({ todos }: { todos: TodoObj[] }) => {
  return (
    <div className={css.container}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
