import css from "../../styles/features/todoPage/todoList.module.css";
import TodoItem from "./todoItem/TodoItem";
import { TodoObj } from "../../types";

const TodoList = ({ todos }: { todos: TodoObj[] }) => {
  console.log(todos);
  return (
    <div className={css.container}>
      {todos &&
        todos.map((todo: TodoObj) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;
