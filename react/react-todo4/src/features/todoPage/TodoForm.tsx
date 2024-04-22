import { todoForm } from "../../constants/todoPage/todoForm";
import { useTodo } from "../../hooks/useTodo";
import css from "../../styles/features/todoPage/todoForm.module.css";

const TodoForm = () => {
  const { value, setValue, handleAdd } = useTodo();
  return (
    <form className={css.formContainer} onSubmit={(e) => handleAdd(e)}>
      {todoForm.map((form) => (
        <label key={form.index} className={css.label}>
          <input
            type={form.type}
            placeholder={form.placeholder}
            name="addInput"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">+</button>
        </label>
      ))}
    </form>
  );
};

export default TodoForm;
