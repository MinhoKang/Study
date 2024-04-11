import { useContext } from "react";
import css from "../../styles/features/todoPage/todoList.module.css";
import TodoItem from "./todoItem/TodoItem";
import { ThemeContext } from "../../context/ThemeContext";
import { TodoObj } from "../../types/todo";

const TodoList = () => {
  const { todos }: { todos: TodoObj[] | null } = useContext(ThemeContext);

  if (!todos) {
    return <div>Loding...</div>;
  }

  return (
    <div className={css.container}>
      {todos.map((todo: TodoObj) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
