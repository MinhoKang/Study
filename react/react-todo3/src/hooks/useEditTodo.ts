import { useTodoState } from "./useTodoState";
import { TodoObj } from "../types/todo";
import { useTodoMutations } from "../apis/todo/useTodoMutaions";

type Props = {
  todo: TodoObj;
  setIsEdit: (newValue: boolean) => void;
};

export const useEditTodo = ({ todo, setIsEdit }: Props) => {
  const { editTodoItem } = useTodoMutations();
  const {
    todoState: { editedTodo },
    setTodoState,
  } = useTodoState(todo);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if ((e.target as HTMLElement).textContent === "EDIT") {
      editTodoItem({ edited: editedTodo, id: todo.id });
      setIsEdit(false);
    } else if ((e.target as HTMLElement).innerText === "CANCEL") {
      setIsEdit(false);
    }
  };

  return { editedTodo, setTodoState, handleClick };
};
