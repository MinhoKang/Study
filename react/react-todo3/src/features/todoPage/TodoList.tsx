import css from "../../styles/features/todoPage/todoList.module.css";
import TodoItem from "./todoItem/TodoItem";
import { TodoObj } from "../../types";
import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { Context } from "../../types/mutaion";

interface TodoListProps {
  todos: TodoObj[];
  onEditTodoItem: UseMutateFunction<
    AxiosResponse<Context> | undefined,
    Context,
    { editedTodo: string; id: number },
    { prevTodos: TodoObj[] }
  >;
  onDeleteTodoItem: UseMutateFunction<
    AxiosResponse<Context> | undefined,
    Context,
    number,
    { prevTodos: TodoObj[] }
  >;
}

const TodoList = ({
  todos,
  onEditTodoItem,
  onDeleteTodoItem,
}: TodoListProps) => {
  return (
    <div className={css.container}>
      {todos?.map((todo: TodoObj) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEditTodoItem={onEditTodoItem}
          onDeleteTodoItem={onDeleteTodoItem}
        />
      ))}
    </div>
  );
};

export default TodoList;

//1. input의 onChange이벤트가 발생
//2. setValue() -> value가 바뀜
//3. value를 debounce로 감싸서 (지연시켜서)
//4. debounce(value) => query실행
