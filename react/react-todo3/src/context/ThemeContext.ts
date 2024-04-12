import { createContext } from "react";
import { TodoObj } from "../types/todo";

interface TodoContextType {
  todos: TodoObj[];
  onAddTodo: (todo: string) => void;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (edited: string, id: number) => void;
}

export const ThemeContext = createContext<TodoContextType>({
  todos: [],
  onAddTodo: () => {},
  onDeleteTodo: () => {},
  onEditTodo: () => {},
});
