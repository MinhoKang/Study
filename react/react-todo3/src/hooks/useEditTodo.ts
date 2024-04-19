import { useTodoState } from "./useTodoState";
import { useTodoMutations } from "../apis/todo/useTodoMutaions";
import { useTodo } from "./useTodo";
import { UseEditTodo } from "../types";

export const useEditTodo = ({ todo, setIsEdit }: UseEditTodo) => {
  const { editTodoItem } = useTodoMutations();
  const { refetch } = useTodo();
  const {
    todoState: { editedTodo },
    setTodoState,
  } = useTodoState(todo);

  const handleClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if ((e.target as HTMLElement).textContent === "EDIT") {
      await editTodoItem({ edited: editedTodo, id: todo.id });
      await refetch();
      await setIsEdit(false);
    } else if ((e.target as HTMLElement).innerText === "CANCEL") {
      setIsEdit(false);
    }
  };

  return { editedTodo, setTodoState, handleClick };
};
