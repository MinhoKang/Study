import "./todo.css";

const TodoList = ({ state, onDelete }) => {
  return (
    <div>
      <ul>
        {state.map((todo) => (
          <>
            <li>{todo.content}</li>
            <div className="button">
              <div className="edit">수정</div>
              <div className="edit" onClick={() => onDelete(todo.seq)}>
                삭제
              </div>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
