import { TodoObj } from "../../types";
import css from "../../styles/features/todoPage/todoItem.module.css";
import { useTodoState } from "../../hooks/useTodoState";
import EditTodo from "./EditTodo";
import Todo from "./Todo";
import TodoButtons from "./TodoButtons";
import DeleteModal from "./DeleteModal";

const TodoItem = ({ todo }: { todo: TodoObj }) => {
  const { todoState, setTodoState, setIsEdit } = useTodoState(todo);
  const { isEdit, isCheck, isDelete } = todoState;

  return (
    <div className={css.itemBox}>
      <Todo todo={todo} isCheck={isCheck} isEdit={isEdit} setIsEdit={setIsEdit}/>
      <TodoButtons isCheck={isCheck} setTodoState={setTodoState} isEdit={isEdit}/>

      {isDelete && <DeleteModal todo={todo} setTodoState={setTodoState} />}
    </div>
  );
};

export default TodoItem;
