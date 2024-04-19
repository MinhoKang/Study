import css from "../../styles/features/todoPage/todoList.module.css";
import TodoItem from "./todoItem/TodoItem";
import { TodoObj } from "../../types";
import { useGetTodoQuery } from "../../apis/queries";

const TodoList = () => {
  const { todos } = useGetTodoQuery();
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
