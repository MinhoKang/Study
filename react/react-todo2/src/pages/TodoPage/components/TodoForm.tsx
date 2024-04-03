import { useState } from "react";
import styles from "./todoForm.module.scss";
import { sessionStorageAction } from "../../../hooks/sessionStorageAction";
import { addTodo } from "../../../apis/todo/addTodo";

const TodoForm = () => {
  const [todoInput, setTodoInput] = useState("");

  console.log(todoInput);
  const handleAdd = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const accessToken = sessionStorageAction.storage("get", "accessToken");
      if (!accessToken) return;
      const result = addTodo(todoInput, accessToken);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form>
        <label className={styles.label}>
          <input
            type="text"
            placeholder="Add a new task"
            value={todoInput}
            onChange={(e) => {
              setTodoInput(e.target.value);
            }}
          />
          <button type="submit" onClick={(e) => handleAdd(e)}>
            +
          </button>
        </label>
      </form>
    </div>
  );
};

export default TodoForm;
