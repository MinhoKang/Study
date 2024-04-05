import styles from "./todoList.module.scss";
import TodoItem from "./TodoItem";
import { TodoObj } from "../../../utils/types";
import React, { SetStateAction } from "react";

interface TodoListProps {
  todos: TodoObj[];
  setIsChanged: React.Dispatch<SetStateAction<boolean>>;
  isChanged: boolean;
}

const TodoList = ({ todos, setIsChanged, isChanged }: TodoListProps) => {
  return (
    <div className={styles.container}>
      {todos.map((item: TodoObj) => (
        <TodoItem
          key={item.id}
          item={item}
          setIsChanged={setIsChanged}
          isChanged={isChanged}
        />
      ))}
    </div>
  );
};

export default TodoList;
