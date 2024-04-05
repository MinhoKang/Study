import TodoForm from "./components/TodoForm";
import styles from "./todoPage.module.scss";
import TodoList from "./components/TodoList";
import React, { SetStateAction, useEffect, useState } from "react";
import { sessionStorageAction } from "../../hooks/sessionStorageAction";
import { getTodo } from "../../apis/todo/getTodo";
import { TodoObj } from "../../utils/types";

interface TodoPageProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<SetStateAction<boolean>>;
}

const TodoPage = ({ isLogin, setIsLogin }: TodoPageProps) => {
  const [todos, setTodos] = useState<TodoObj[]>([]);
  const [isChanged, setIsChanged] = useState(false);
  const accessToken = sessionStorageAction.storage("get", "accessToken");

  useEffect(() => {
    const getTodoList = async () => {
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

    getTodoList();
  }, [isChanged, accessToken]);

  const handleLogout = () => {
    sessionStorage.clear();
    setIsLogin(!isLogin);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoutBtn} onClick={handleLogout}>
        LOG OUT
      </div>
      <h1>TODO APP</h1>
      <TodoList
        todos={todos}
        setIsChanged={setIsChanged}
        isChanged={isChanged}
      />
      <TodoForm setIsChanged={setIsChanged} isChanged={isChanged} />
    </div>
  );
};

export default TodoPage;
