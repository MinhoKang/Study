import { createContext } from "react";
import { TodoObj } from "../types";

interface TodoContextType {
  todos: TodoObj[] | undefined;
  onAddTodo: (todo: string) => void;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (edited: string, id: number) => void;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  onAddTodo: () => {},
  onDeleteTodo: () => {},
  onEditTodo: () => {},
});
