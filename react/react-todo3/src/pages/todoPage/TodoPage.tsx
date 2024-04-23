import TodoList from "../../features/todoPage/TodoList";
import css from "../../styles/todoPage/todoPage.module.css";
import { useTodo } from "../../hooks";
import TodoForm from "../../features/todoPage/TodoForm";
import { Container, H1 } from "../../components";
import TodoSearch from "../../features/todoPage/TodoSearch";
import { useGetTodoQuery } from "../../apis/queries";
import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useTodoMutations } from "../../apis/todo/useTodoMutaions";

const TodoPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debounceSeachQuery = useDebounce({ value: searchQuery });

  const { todos, getTodoError } = useGetTodoQuery(debounceSeachQuery);

  const { handleLogout, value, setValue, handleClear } = useTodo();
  const { addTodoItem, deleteTodoItem, editTodoItem } =
    useTodoMutations(searchQuery);

  return (
    <Container className={css.container}>
      <div className={css.logoutBtn} onClick={() => handleLogout()}>
        LOGOUT
      </div>
      <H1 text="TODO APP" />
      <TodoSearch value={value} setValue={setValue} handleClear={handleClear} />
      {getTodoError && <p>검색된 할 일이 없습니다.</p>}
      <TodoList
        todos={todos}
        onEditTodoItem={editTodoItem}
        onDeleteTodoItem={deleteTodoItem}
      />
      <TodoForm onAddTodoItem={addTodoItem} />
    </Container>
  );
};

export default TodoPage;
