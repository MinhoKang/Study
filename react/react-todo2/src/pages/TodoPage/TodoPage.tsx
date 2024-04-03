import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import styles from "./todoPage.module.scss";

const TodoPage = () => {
  return (
    <div className={styles.container}>
      <h1>TODO APP</h1>
      <TodoList />
      <TodoForm />
    </div>
  );
};

export default TodoPage;
