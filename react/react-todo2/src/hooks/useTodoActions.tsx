import { useState } from "react";
import { sessionStorageAction } from "./sessionStorageAction";
import { TodoObj } from "../pages/TodoPage/components/TodoList";
import { addTodo } from "../apis/todo/addTodo";
import { editTodo } from "../apis/todo/editTodo";
import { deleteTodo } from "../apis/todo/deleteTodo";

type ActionType = "add" | "edit" | "delete";

const useTodoActions = () => {
  const [accessToken, setAccessToken] = useState<string | null | undefined>(
    sessionStorageAction.storage("get", "accessToken")
  );

  const handleAction = async (
    action: ActionType,
    todo: TodoObj,
    editedTodo?: string
  ) => {
    if (!accessToken) return;

    switch (action) {
      case "add":
        console.log(await addTodo(todo.todo, accessToken));
        return await addTodo(todo.todo, accessToken);
      case "edit":
        console.log(await editTodo(editedTodo!, todo.id, accessToken));
        return await editTodo(editedTodo!, todo.id, accessToken);
      case "delete":
        return await deleteTodo(todo.id, accessToken);
      default:
        console.log("오류");
    }
  };
  return { handleAction, setAccessToken };
};

export default useTodoActions;
