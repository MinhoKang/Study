import { useState } from "react";
import { useDebounce } from "./useDebounce";
import { useGetTodoQuery } from "../apis";
import { TodoObj } from "../types";

export const useTodo = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const debounceSeachQuery = useDebounce({ value: searchQuery });

  const { todos, getTodoError } = useGetTodoQuery(debounceSeachQuery);

  const getTodoDetail = (id: string) => {
    const todoId = parseInt(id);
    const selected = todos?.find((todo: TodoObj) => todo.id === todoId);
    if (!selected) return {};
    console.log(todos);
    const { id: selectedId, todo, content } = selected;
    return { selectedId, todo, content };
  };

  return { searchQuery, setSearchQuery, todos, getTodoError, getTodoDetail };
};
