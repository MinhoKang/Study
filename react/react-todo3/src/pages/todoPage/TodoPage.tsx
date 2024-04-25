import css from "../../styles/todoPage/todoPage.module.css";
import { useAuth } from "../../hooks";
import { useDebounce } from "../../hooks/useDebounce";
import { useState } from "react";
import { useGetTodoQuery, useTodoMutations } from "../../apis";
import TodoSearch from "../../features/todoPage/TodoSearch";
import TodoList from "../../features/todoPage/TodoList";
import TodoForm from "../../features/todoPage/TodoForm";

const TodoPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { logout } = useAuth();
  const debounceSeachQuery = useDebounce({ value: searchQuery });
  const { todos, getTodoError } = useGetTodoQuery(debounceSeachQuery);
  const { addTodoItem, deleteTodoItem, editTodoItem } =
    useTodoMutations(searchQuery);

  return (
    <div className={css.container}>
      <div className={css.logoutBtn} onClick={() => logout()}>
        LOGOUT
      </div>
      <h1>TODO LIST</h1>
      <TodoSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {getTodoError && <p>검색된 할 일이 없습니다.</p>}
      <TodoList
        todos={todos}
        onEditTodoItem={editTodoItem}
        onDeleteTodoItem={deleteTodoItem}
      />
      <TodoForm onAddTodoItem={addTodoItem} />
    </div>
  );
};

export default TodoPage;
