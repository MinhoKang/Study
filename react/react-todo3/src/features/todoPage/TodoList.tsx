import css from "../../styles/features/todoPage/todoList.module.css";
import TodoItem from "./todoItem/TodoItem";
import { TodoObj } from "../../types";
import { useGetTodoQuery } from "../../hooks/queries";

const TodoList = () => {
  const { data: todos } = useGetTodoQuery();

  if (!todos) {
    return <div>Loding...</div>;
  }

  return (
    <div className={css.container}>
      {todos?.map((todo: TodoObj) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
