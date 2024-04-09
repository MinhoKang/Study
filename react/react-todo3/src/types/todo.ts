export type TodoObj = {
  id: number;
  todo: string;
};

export interface TodoProps {
  todo: TodoObj;
}

export type TodoState = {
  editedTodo: string;
  isEdit: boolean;
  isCheck: boolean;
  isDelete: boolean;
};
