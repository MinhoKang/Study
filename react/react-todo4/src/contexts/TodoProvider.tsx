import { ReactNode } from "react";
import { useGetTodoQuery } from "../apis/todo/todoQueries";
import { TodoContext } from "./TodoContext";

const useProvideTodos = () => {
  const { todos } = useGetTodoQuery();
  return { todos };
};

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const { todos } = useProvideTodos();

  return <TodoContext.Provider value={todos}>{children}</TodoContext.Provider>;
};
