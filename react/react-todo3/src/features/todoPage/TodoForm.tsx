import { useContext, useState } from "react";
import formCss from "../../styles/features/todoPage/todoForm.module.css";
import { Form, Input } from "../../components";
import { TodoContext } from "../../context/TodoContext";
import { todoForm } from "../../constants";

const TodoForm = () => {
  const [todoInput, setTodoInput] = useState("");
  const { onAddTodo } = useContext(TodoContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onAddTodo(todoInput);
    setTodoInput("");
  };

  return (
    <Form
      className={formCss.formContainer}
      onSubmit={(e) => handleSubmit(e as React.FormEvent<HTMLFormElement>)}
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
    </Form>
  );
};

export default TodoForm;
