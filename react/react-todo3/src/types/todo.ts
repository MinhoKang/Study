import { SetStateAction } from "react";
import { OnAddTodoItem, OnDeleteTodoItem, OnEditTodoItem } from "./mutaion";

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

export interface HandleDelete {
  e: React.MouseEvent<HTMLDivElement>;
  todo: TodoObj;
  setTodoState: React.Dispatch<SetStateAction<TodoState>>;
}

export interface HandleSubmit {
  e: React.FormEvent<HTMLFormElement>;
  value?: string;
  setValue?: React.Dispatch<SetStateAction<string>>;
}

export interface HandleClick {
  e: React.MouseEvent<HTMLDivElement>;
  isCheck: boolean;
  setTodoState: React.Dispatch<SetStateAction<TodoState>>;
}

export interface HandleSearch {
  e: React.FormEvent<HTMLFormElement>;
  keyword?: string;
}

export interface UseEditTodo {
  todo: TodoObj;
  setIsEdit: (newValue: boolean) => void;
}





export interface TodoComponenetProps {
  todo?: TodoObj;
  onEditTodoItem?: OnEditTodoItem;
  onDeleteTodoItem?: OnDeleteTodoItem;
  onAddTodoItem?: OnAddTodoItem;
}
