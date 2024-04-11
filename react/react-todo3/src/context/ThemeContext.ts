import { createContext } from "react";
import { TodoObj } from "../types/todo";

interface ThemeContextType {
  todos: TodoObj[];
  onAddTodo: (todo: string) => void;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (edited: string, id: number) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  todos: [],
  onAddTodo: () => {},
  onDeleteTodo: () => {},
  onEditTodo: () => {},
});
