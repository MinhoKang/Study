import { useContext, useState } from "react";
import Form from "../../components/form/Form";
import { todoForm } from "../../constants/todoPage/todoForm";
import Input from "../../components/input/Input";
import formCss from "../../styles/features/todoPage/todoForm.module.css";
import { UseTodo } from "../../types/useTodo";
import { ThemeContext } from "../../context/ThemeContext";

const TodoForm = () => {
  const [todoInput, setTodoInput] = useState("");
  const { onAddTodo } = useContext(ThemeContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onAddTodo(todoInput);
    setTodoInput("");
  };

  return (
    <Form className={formCss.formContainer} onSubmit={handleSubmit}>
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
    </Form>
  );
};

export default TodoForm;
