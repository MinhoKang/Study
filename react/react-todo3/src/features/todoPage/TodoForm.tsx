import formCss from "../../styles/features/todoPage/todoForm.module.css";
import { Input } from "../../components";
import { todoForm } from "../../constants";
import { useState } from "react";
import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { TodoObj } from "../../types";
import { Context } from "../../types/mutaion";

interface TodoFormProps {
  onAddTodoItem: UseMutateFunction<
    AxiosResponse<Context>,
    Context,
    string,
    { prevTodos: TodoObj[] }
  >;
}

const TodoForm = ({ onAddTodoItem }: TodoFormProps) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      className={formCss.formContainer}
      onSubmit={(e) => {
        e.preventDefault();
        onAddTodoItem(inputValue);
        setInputValue("");
      }}
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
