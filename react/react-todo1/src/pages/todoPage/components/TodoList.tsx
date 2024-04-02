import React from "react";

const TodoList = ({ state }) => {
  return (
    <div>
      <ul>
        {state.map((todo) => {
          todo.content;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
