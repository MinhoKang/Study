import { TodoObj } from "./todo";

export interface Context {
  data: TodoObj[];
  [key: string]: object;
}
