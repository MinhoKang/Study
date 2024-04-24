import css from "../../styles/features/todoPage/todoList.module.css";
import TodoItem from "./todoItem/TodoItem";
import { TodoListProps, TodoObj } from "../../types";

const TodoList = ({
  todos,
  onEditTodoItem,
  onDeleteTodoItem,
}: TodoListProps) => {
  return (
    <div className={css.container}>
      {todos?.map((todo: TodoObj) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEditTodoItem={onEditTodoItem}
          onDeleteTodoItem={onDeleteTodoItem}
        />
      ))}
    </div>
  );
};

export default TodoList;
