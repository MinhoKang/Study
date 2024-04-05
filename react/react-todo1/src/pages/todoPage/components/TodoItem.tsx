import { useState } from "react";
import "./todo.css";

const TodoItem = ({ todo, onDelete }) => {
  const [edit, setEdit] = useState(false);
  const [newTodo, setNewTodo] = useState();

  const handleEdit = () => {
    setEdit(true);
    onEdit();
  };

  if (edit) {
    return (
      <>
        <li>{todo.content}</li>
        <div className="button">
          <div
            className="edit"
            onClick={() => {
              handleEdit();
            }}
          >
            수정
          </div>
          <div className="edit" onClick={() => onDelete(todo.seq)}>
            삭제
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <input type="text">{todo.content}</input>
        <div className="button">
          <div
            className="edit"
            onClick={() => {
              handleEdit();
            }}
          >
            수정
          </div>
          <div className="edit" onClick={() => onDelete(todo.seq)}>
            삭제
          </div>
        </div>
      </>
    );
  }
};

export default TodoItem;
