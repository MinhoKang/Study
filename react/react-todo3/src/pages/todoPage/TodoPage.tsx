import TodoList from "../../features/todoPage/TodoList";
import css from "../../styles/todoPage/todoPage.module.css";
import { useTodo } from "../../hooks";
import TodoForm from "../../features/todoPage/TodoForm";
import { Container, H1 } from "../../components";
import { TodoContext } from "../../context/TodoContext";

const TodoPage = () => {
  const {

    onAddTodo,
    onDeleteTodo,
    onEditTodo,
    handleLogout,
  } = useTodo();

  return (
    <Container className={css.container}>
      <div className={css.logoutBtn} onClick={handleLogout}>
        LOGOUT
      </div>
      <H1 text="TODO APP" />
      <TodoContext.Provider
        value={{
          onAddTodo,
          onDeleteTodo,
          onEditTodo,
        }}
      >
        <TodoList />
        <TodoForm />
      </TodoContext.Provider>
    </Container>
  );
};

export default TodoPage;
