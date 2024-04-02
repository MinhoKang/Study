import { useState } from "react";

type AddFunction = (text: string) => void;

const TodoForm = ({ add }: { add: AddFunction }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          id="todoInput"
          placeholder="내용을 입력하세요"
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (!text) return alert("내용 입력");
            add(text);
            setText("");
          }}
        >
          add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
