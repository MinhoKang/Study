import formCss from "../../styles/features/todoPage/todoForm.module.css";
import { Input } from "../../components";
import { todoForm } from "../../constants";
import { useState } from "react";

interface TodoFormProps {
  onAddTodoItem: (todo: string) => Promise<void>;
}

const TodoForm = ({ onAddTodoItem }: TodoFormProps) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      className={formCss.formContainer}
      onSubmit={() => onAddTodoItem(inputValue)}
    >
      {todoForm.map((form) => (
        <label key={form.index} className={formCss.label}>
          <Input
            type={form.type}
            placeholder={form.placeholder}
            name="addInput"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">+</button>
        </label>
      ))}
    </form>
  );
};

export default TodoForm;
