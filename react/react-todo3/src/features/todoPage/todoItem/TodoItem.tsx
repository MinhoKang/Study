import css from "../../../styles/features/todoPage/todoItem.module.css";
import Todo from "./Todo";
import EditTodo from "./EditTodo";
import TodoButtons from "./TodoButtons";
import DeleteModal from "./DeleteModal";
import { useTodoState } from "../../../hooks";
import { TodoProps } from "../../../types";

const TodoItem = ({ todo }: TodoProps) => {
  const { todoState, setTodoState, setIsEdit } = useTodoState(todo);
  const { isEdit, isCheck, isDelete } = todoState;

  return (
    <div className={css.itemBox}>
      {isEdit ? (
        <EditTodo todo={todo} setIsEdit={setIsEdit} />
      ) : (
        <>
          <Todo todo={todo} isCheck={isCheck} />
          <TodoButtons isCheck={isCheck} setTodoState={setTodoState} />
        </>
      )}

      {isDelete && <DeleteModal todo={todo} setTodoState={setTodoState} />}
    </div>
  );
};

export default TodoItem;
