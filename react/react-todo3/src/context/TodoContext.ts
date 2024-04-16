import { createContext } from "react";

interface TodoContextType {
  onEditTodo: (edited: string, id: number) => void;
}

export const TodoContext = createContext<TodoContextType>({
  onEditTodo: () => {},
});
