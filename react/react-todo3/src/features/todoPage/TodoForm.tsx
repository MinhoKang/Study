import { useState } from "react";
import formCss from "../../styles/features/todoPage/todoForm.module.css";
import { Input } from "../../components";
import { todoForm } from "../../constants";
import { useTodo } from "../../hooks";

const TodoForm = () => {
  const [todoInput, setTodoInput] = useState("");
  const { handleSubmit } = useTodo();

  return (
    <form
      className={formCss.formContainer}
      onSubmit={(e) => handleSubmit({ e, todoInput, setTodoInput })}
    >
      {todoForm.map((form) => (
        <label key={form.index} className={formCss.label}>
          <Input
            type={form.type}
            placeholder={form.placeholder}
            name="addInput"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <button type="submit">+</button>
        </label>
      ))}
    </form>
  );
};

export default TodoForm;
