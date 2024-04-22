import Container from "../../components/Container";
import { TodoProvider } from "../../contexts/TodoProvider";
import TodoForm from "../../features/todoPage/TodoForm";
import TodoList from "../../features/todoPage/TodoList";
import TodoSearch from "../../features/todoPage/TodoSearch";
import { useTodo } from "../../hooks/useTodo";
import css from "../../styles/todoPage/todoPage.module.css";

const TodoPage = () => {
  const { handleLogout } = useTodo();

  return (
    <Container className={css.container}>
      <div className={css.logoutBtn} onClick={handleLogout}>
        LOGOUT
      </div>
      <h1>TODO LIST</h1>
      <TodoProvider>
        <TodoSearch />
        <TodoList />
        <TodoForm />
      </TodoProvider>
    </Container>
  );
};

export default TodoPage;
