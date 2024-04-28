import { useNavigate, useParams } from "react-router-dom";
import { useTodo } from "../../hooks";
import css from "../../styles/features/todoPage/todoDetail.module.css";
import { useTodoMutations } from "../../apis";
import { useState } from "react";
import { todoDetailHeader } from "../../constants/todoPage/todoDetailHeader";

const TodoDetail = () => {
  const [isEdit, setisEdit] = useState(false);
  const { id } = useParams();
  const { getTodoDetail } = useTodo();
  const { selectedId, todo, content } = getTodoDetail(id!);
  const [text, setText] = useState(content);
  const [todoTitle, setTodoTitle] = useState(todo);
  const navigate = useNavigate();
  const { editTodoItem, error } = useTodoMutations();

  const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    const id = (e.target as HTMLElement).id;
    if (id === "cancel") {
      navigate("/todo");
    } else if (id === "edit") {
      setisEdit(true);
    } else if (id === "save" && isEdit) {
      editTodoItem({ editedTodo: todoTitle, id: selectedId, content: text });
      console.log(error);
      setisEdit(false);
    }
  };

  return (
    <div className={css.container}>
      <header className={css.header} onClick={(e) => onClick(e)}>
        {todoDetailHeader.map((item) => (
          <p key={item.index} id={item.id} className={item.className}>
            {item.text}
          </p>
        ))}
      </header>
      <div className={css.title}>
        <p className={css.id}>ID: {selectedId}</p>
        <input
          type="text"
          className={css.input}
          defaultValue={todo}
          onChange={(e) => setTodoTitle(e.target.value)}
          readOnly={!isEdit}
        />
      </div>
      <textarea
        className={css.textarea}
        readOnly={!isEdit}
        defaultValue={content}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default TodoDetail;
