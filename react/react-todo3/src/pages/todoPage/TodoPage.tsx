import Container from "../../components/container/Container";
import H1 from "../../components/title/H1";
import TodoList from "../../features/todoPage/TodoList";
import css from "../../styles/todoPage/todoPage.module.css";
import { useTodo } from "../../hooks/useTodo";
import TodoForm from "../../features/todoPage/TodoForm";

const TodoPage = () => {
  const { todos, onChangeTodos, onAddTodo, onDeleteTodo, onEditTodo } =
    useTodo();

  return (
    <Container className={css.container}>
      <H1 text="TODO APP" />
      <TodoList todos={todos} />
      <TodoForm onAddTodo={onAddTodo} />
    </Container>
  );
};

export default TodoPage;
