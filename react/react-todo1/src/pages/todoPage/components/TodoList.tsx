import { useState } from "react";
import TodoItem from "./TodoItem";
import "./todo.css";

const TodoList = ({ state, onDelete, onEdit }) => {


  return (
    <div>
      <ul>
        {state.map((todo) => (
          <TodoItem todo={todo} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
