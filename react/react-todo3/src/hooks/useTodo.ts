import { useState } from "react";
import { useDebounce } from "./useDebounce";
import { useGetTodoQuery } from "../apis";
import { TodoObj } from "../types";

export const useTodo = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const debounceSeachQuery = useDebounce({ value: searchQuery });

  const { todos, getTodoError } = useGetTodoQuery(debounceSeachQuery);

  const getTodoDetail = (id: number) => {
    const selected = todos?.find((todo: TodoObj) => todo.id === id);
    console.log("getTodoDetail selected", selected);

    if (!selected) return {};

    const { id: selectedId, todo, content } = selected;
    console.log("getTodoDetail selectedId", selectedId);
    console.log("getTodoDetail todo", todo);
    console.log("getTodoDetail content", content);

    return { selectedId, todo, content };
  };

  return { searchQuery, setSearchQuery, todos, getTodoError, getTodoDetail };
};
