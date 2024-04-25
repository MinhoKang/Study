import { useState } from "react";
import { useDebounce } from "./useDebounce";
import { useGetTodoQuery } from "../apis";

export const useTodo = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debounceSeachQuery = useDebounce({ value: searchQuery });
  const { todos, getTodoError } = useGetTodoQuery(debounceSeachQuery);

  return { searchQuery, setSearchQuery, todos, getTodoError };
};
