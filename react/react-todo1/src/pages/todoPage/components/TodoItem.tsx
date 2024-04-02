import "./todo.css";

type TodoItemProps = {
  seq: number;
  content: string;
};

const TodoItem = ({ state, seq, content }: TodoItemProps) => {
  return (
    <div className="todo">
      <div className="num">{seq}번</div>
      <div className="content">{content}</div>
      <div className="button">
        <div className="delete">삭제</div>
        <div className="edit">수정</div>
      </div>
    </div>
  );
};

export default TodoItem;
