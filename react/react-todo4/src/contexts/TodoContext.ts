import { createContext } from "react";
import { TodoObj } from "../types";

interface TodoContextType {
  todos: TodoObj[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
});
