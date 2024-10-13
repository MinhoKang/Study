import css from "../../styles/features/todoPage/todoList.module.css";
import TodoItem from "./todoItem/TodoItem";
import { TodoObj } from "../../types";

interface TodoListProps {
  todos: TodoObj[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div className={css.container}>
      {todos?.map((todo: TodoObj) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
