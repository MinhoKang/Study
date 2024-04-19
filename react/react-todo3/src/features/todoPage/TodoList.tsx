import css from "../../styles/features/todoPage/todoList.module.css";
import TodoItem from "./todoItem/TodoItem";
import { TodoObj } from "../../types";

const TodoList = ({ todos }: { todos: TodoObj[] }) => {
  return (
    <div className={css.container}>
      {todos?.map((todo: TodoObj) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;

//1. input의 onChange이벤트가 발생
//2. setValue() -> value가 바뀜
//3. value를 debounce로 감싸서 (지연시켜서)
//4. debounce(value) => query실행
