import css from "../../styles/features/todoPage/todoForm.module.css";
import { todoForm } from "../../constants";
import { useState } from "react";
import { OnAddTodoItem } from "../../types";

interface TodoFormProps {
  onAddTodoItem: OnAddTodoItem;
}

const TodoForm = ({ onAddTodoItem }: TodoFormProps) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      className={css.formContainer}
      onSubmit={(e) => {
        // TODO: 수정
        e.preventDefault();
        onAddTodoItem(inputValue);
        setInputValue("");
      }}
    >
      {todoForm.map((form) => (
        <label key={form.index} className={css.label}>
          <input
            type={form.type}
            placeholder={form.placeholder}
            name="addInput"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus
          />
          <button type="submit">+</button>
        </label>
      ))}
    </form>
  );
};

export default TodoForm;
