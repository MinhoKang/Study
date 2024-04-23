import formCss from "../../styles/features/todoPage/todoForm.module.css";
import { Input } from "../../components";
import { todoForm } from "../../constants";
import { useTodo } from "../../hooks";

const TodoForm = () => {
  
  const { value, setValue, handleAdd } = useTodo();

  return (
    <form className={formCss.formContainer} onSubmit={(e) => handleAdd({ e })}>
      {todoForm.map((form) => (
        <label key={form.index} className={formCss.label}>
          <Input
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
