import { TodoProps } from "../../../types/todo";
import css from "../../../styles/features/todoPage/todoItem.module.css";
import { useState } from "react";
import Todo from "./Todo";
import EditTodo from "./EditTodo";
import TodoButtons from "./TodoButtons";
import DeleteModal from "./DeleteModal";

const TodoItem = ({ todo }: TodoProps) => {
  const [todoState, setTodoState] = useState({
    editedTodo: todo.todo,
    isEdit: false,
    isCheck: false,
    isDelete: false,
  });

  return (
    <div className={css.itemBox}>
      {todoState.isEdit ? (
        <EditTodo
          editedTodo={todoState.editedTodo}
          setTodoState={setTodoState}
          todoId={todo.id}
        />
      ) : (
        <>
          <Todo todo={todo} isCheck={todoState.isCheck} />
          <TodoButtons
            isCheck={todoState.isCheck}
            setTodoState={setTodoState}
          />
        </>
      )}

      {todoState.isDelete && (
        <DeleteModal todo={todo} setTodoState={setTodoState} />
      )}
    </div>
  );
};

export default TodoItem;
