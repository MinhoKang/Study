import { createContext } from "react";

interface TodoContextType {
  onAddTodo: (todo: string) => void;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (edited: string, id: number) => void;
}

export const TodoContext = createContext<TodoContextType>({
  onAddTodo: () => {},
  onDeleteTodo: () => {},
  onEditTodo: () => {},
});
