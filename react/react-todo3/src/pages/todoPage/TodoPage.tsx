import TodoList from "../../features/todoPage/TodoList";
import css from "../../styles/todoPage/todoPage.module.css";
import { useTodo } from "../../hooks";
import TodoForm from "../../features/todoPage/TodoForm";
import { Container, H1 } from "../../components";

const TodoPage = () => {
  const { handleLogout } = useTodo();

  return (
    <Container className={css.container}>
      <div className={css.logoutBtn} onClick={handleLogout}>
        LOGOUT
      </div>
      <H1 text="TODO APP" />
      <TodoList />
      <TodoForm />
    </Container>
  );
};

export default TodoPage;
