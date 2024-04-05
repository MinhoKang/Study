export type TodoObj = {
  id: number;
  todo: string;
};

export type NewTodo = {
  message: string;
  data: {
    todos: TodoObj[];
  };
};

export type AddTodoListFunction = (newTodo: NewTodo) => void;

