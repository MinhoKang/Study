import Container from "../../components/container/Container";
import Form from "../../components/form/Form";
import H1 from "../../components/title/H1";
import TodoList from "../../features/todoPage/TodoList";
import css from "../../styles/todoPage/todoPage.module.css";
import formCss from "../../styles/features/todoPage/todoForm.module.css";
import { todoForm } from "../../constants/todoPage/todoForm";
import Input from "../../components/input/Input";
import { useTodo } from "../../hooks/useTodo";
import { useState } from "react";

const TodoPage = () => {
  const { todos, onAddTodo } = useTodo();
  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onAddTodo(todoInput);
    setTodoInput("");
  };

  return (
    <Container className={css.container}>
      <H1 text="TODO APP" />
      <TodoList todos={todos} />
      {/* //TODO: FORM 따로 빼기 */}
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
    </Container>
  );
};

export default TodoPage;
