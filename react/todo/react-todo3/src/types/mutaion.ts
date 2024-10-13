import { UseMutateFunction } from "@tanstack/react-query";
import { TodoObj } from "./todo";
import { AxiosResponse } from "axios";

export interface Context {
  data: TodoObj[];
  [key: string]: object;
}

export type OnAddTodoItem = UseMutateFunction<
  AxiosResponse<Context>,
  Context,
  string,
  { prevTodos: TodoObj[] }
>;

export type OnEditTodoItem = UseMutateFunction<
  AxiosResponse<Context> | undefined,
  Context,
  { editedTodo: string; id: number },
  { prevTodos: TodoObj[] }
>;

export type OnDeleteTodoItem = UseMutateFunction<
  AxiosResponse<Context> | undefined,
  Context,
  number,
  { prevTodos: TodoObj[] }
>;
