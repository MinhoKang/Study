import { useState } from "react";
import formCss from "../../styles/features/todoPage/todoForm.module.css";
import { Form, Input } from "../../components";
import { todoForm } from "../../constants";
import { useMutations } from "../../hooks/mutaions";

const TodoForm = () => {
  const [todoInput, setTodoInput] = useState("");
  const { addTodoItem } = useMutations();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodoItem(todoInput);
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
