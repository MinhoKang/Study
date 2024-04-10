import Container from "../../components/container/Container";
import H1 from "../../components/title/H1";
import TodoList from "../../features/todoPage/TodoList";
import css from "../../styles/todoPage/todoPage.module.css";
import { useTodo } from "../../hooks/useTodo";
import TodoForm from "../../features/todoPage/TodoForm";
import { ThemeContext } from "../../context/ThemeContext";

const TodoPage = () => {
  const { todos, onAddTodo, onDeleteTodo, onEditTodo } = useTodo();

  return (
    <Container className={css.container}>
      <H1 text="TODO APP" />
      <ThemeContext.Provider
        value={{
          todos,
          onAddTodo,
          onDeleteTodo,
          onEditTodo,
        }}
      >
        <TodoList />
        <TodoForm />
      </ThemeContext.Provider>
    </Container>
  );
};

export default TodoPage;
