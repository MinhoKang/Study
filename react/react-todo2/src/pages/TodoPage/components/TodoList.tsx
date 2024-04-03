import { useEffect, useState } from "react";
import { getTodo } from "../../../apis/todo/getTodo";
import { sessionStorageAction } from "../../../hooks/sessionStorageAction";
import styles from "./todoList.module.scss";
import TodoItem from "./TodoItem";

export type TodoObj = {
  id: number;
  todo: string;
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);
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

  return (
    <div className={styles.container}>
      {todos.map((item: TodoObj) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
