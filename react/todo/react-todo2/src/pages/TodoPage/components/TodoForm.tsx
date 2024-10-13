import { SetStateAction, useState } from "react";
import styles from "./todoForm.module.scss";
import { sessionStorageAction } from "../../../hooks/sessionStorageAction";
import { addTodo } from "../../../apis/todo/addTodo";

interface TodoFormProps {
  setIsChanged: React.Dispatch<SetStateAction<boolean>>;
  isChanged: boolean;
}

const TodoForm = ({ setIsChanged, isChanged }: TodoFormProps) => {
  const [todoInput, setTodoInput] = useState("");

  const handleAdd = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const accessToken = sessionStorageAction.storage("get", "accessToken");
      const result = await addTodo(todoInput, accessToken!);
      console.log("add", result);
      setIsChanged(!isChanged);
      setTodoInput("");
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
