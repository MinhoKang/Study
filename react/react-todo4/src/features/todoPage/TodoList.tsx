import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoItem from "./TodoItem";
import { TodoObj } from "../../types";
import css from "../../styles/todoPage/todoPage.module.css";

const TodoList = () => {
  const todos = useContext(TodoContext);
  console.log(todos);

  return (
    <div className={css.container}>
      {todos?.map((todo: TodoObj) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
