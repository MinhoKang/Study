import { useTodoState } from "./useTodoState";
import { useTodoMutations } from "../apis/todo/useTodoMutaions";

import { UseEditTodo } from "../types";
import { useQueryClient } from "@tanstack/react-query";

export const useEditTodo = ({ todo, setIsEdit }: UseEditTodo) => {
  const { editTodoItem } = useTodoMutations();
  const queryClient = useQueryClient();
  const {
    todoState: { editedTodo },
    setTodoState,
  } = useTodoState(todo);
  //TODO: 수정 후 바로 렌더링
  const handleClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if ((e.target as HTMLElement).textContent === "EDIT") {
      await editTodoItem({ edited: editedTodo, id: todo.id });
      await queryClient.invalidateQueries({ queryKey: ["todos"] });

      await setIsEdit(false);
    } else if ((e.target as HTMLElement).innerText === "CANCEL") {
      setIsEdit(false);
    }
  };

  return { editedTodo, setTodoState, handleClick };
};
