import TodoForm from "./components/TodoForm";
import styles from "./todoPage.module.scss";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import { sessionStorageAction } from "../../hooks/sessionStorageAction";
import { getTodo } from "../../apis/todo/getTodo";
import { NewTodo, TodoObj } from "../../utils/types";

const TodoPage = () => {
  const [todos, setTodos] = useState<TodoObj[]>([]);

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = async () => {
    const accessToken = await sessionStorageAction.storage(
      "get",
      "accessToken"
    );
    console.log(accessToken);
    if (!accessToken) return;

    try {
      const result = await getTodo(accessToken);
      if (result && result.data) {
        setTodos(result.data);
      } else {
        console.error("에러");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const refreshTodo = (newTodo: NewTodo) => {
    console.log(newTodo);
    setTodos(newTodo.data.todos);
  };

  return (
    <div className={styles.container}>
      <h1>TODO APP</h1>
      <TodoList todos={todos} refreshTodo={refreshTodo}/>
      <TodoForm refreshTodo={refreshTodo} />
    </div>
  );
};

export default TodoPage;
