import css from "../../styles/todoPage/todoPage.module.css";
import { useAuth, useTodo } from "../../hooks";
import TodoSearch from "../../features/todoPage/TodoSearch";
import TodoList from "../../features/todoPage/TodoList";
import TodoForm from "../../features/todoPage/TodoForm";

const TodoPage = () => {
  const { searchQuery, setSearchQuery, todos, getTodoError } = useTodo();
  const { logout } = useAuth();

  return (
    <div className={css.container}>
      <div className={css.logoutBtn} onClick={logout}>
        LOGOUT
      </div>
      <h1>TODO LIST</h1>
      <TodoSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {getTodoError && <p>검색된 할 일이 없습니다.</p>}
      <TodoList todos={todos} />
      <TodoForm />
    </div>
  );
};

export default TodoPage;
