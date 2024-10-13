import css from "../../styles/features/todoPage/todoForm.module.css";
import { todoForm } from "../../constants";
import { useState } from "react";
import { useTodoMutations } from "../../apis";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");

  const { addTodoItem } = useTodoMutations();

  return (
    <form
      className={css.formContainer}
      onSubmit={(e) => {
        e.preventDefault();
        addTodoItem(inputValue);
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
