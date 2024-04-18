import TodoList from "../../features/todoPage/TodoList";
import css from "../../styles/todoPage/todoPage.module.css";
import { useTodo } from "../../hooks";
import TodoForm from "../../features/todoPage/TodoForm";
import { Container, H1 } from "../../components";
import TodoSearch from "../../features/todoPage/TodoSearch";
import { useGetTodoQuery } from "../../hooks/queries";

const TodoPage = () => {
  const { handleLogout, handleSubmit, value, setValue } = useTodo();

  const { todos } = useGetTodoQuery(value);
  console.log(todos);

  return (
    <Container className={css.container}>
      <div className={css.logoutBtn} onClick={handleLogout}>
        LOGOUT
      </div>
      <H1 text="TODO APP" />
      <TodoSearch />
      <TodoList todos={todos} />
      <TodoForm />
    </Container>
  );
};

export default TodoPage;
