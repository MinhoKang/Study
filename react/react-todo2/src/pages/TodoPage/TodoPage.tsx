import TodoForm from "./components/TodoForm";
import styles from "./todoPage.module.scss";
import TodoList from "./components/TodoList";

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
