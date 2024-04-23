import TodoList from "../../features/todoPage/TodoList";
import css from "../../styles/todoPage/todoPage.module.css";
import { useTodo } from "../../hooks";
import TodoForm from "../../features/todoPage/TodoForm";
import { Container, H1 } from "../../components";
import TodoSearch from "../../features/todoPage/TodoSearch";
import { useGetTodoQuery } from "../../apis/queries";

const TodoPage = () => {
  const { handleLogout, value, setValue, handleClear, debounceSearchValue } =
    useTodo();
  const { todos, getTodoError } = useGetTodoQuery(debounceSearchValue);
  console.log("todoPage todos", todos);
  // TODO: getTodo랑 getSearchedTodo나눠서
  // TODO: mutation 값 확인
  return (
    <Container className={css.container}>
      <div className={css.logoutBtn} onClick={handleLogout}>
        LOGOUT
      </div>
      <H1 text="TODO APP" />
      <TodoSearch value={value} setValue={setValue} handleClear={handleClear} />
      {getTodoError && <p>검색된 할 일이 없습니다.</p>}
      <TodoList todos={todos} />
      <TodoForm />
    </Container>
  );
};

export default TodoPage;



