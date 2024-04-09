export interface UseTodo {
  onAddTodo: (todo: string) => Promise<void>;
}
