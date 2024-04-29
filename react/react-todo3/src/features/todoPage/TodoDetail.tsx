import { useNavigate, useParams } from "react-router-dom";
import { useTodo } from "../../hooks";
import css from "../../styles/features/todoPage/todoDetail.module.css";
import { useTodoMutations } from "../../apis";
import { useEffect, useState } from "react";
import { todoDetailHeader } from "../../constants/todoPage/todoDetailHeader";
import Toast from "../../components/toast/Toast";
import DetailButton from "../../components/DetailButton";

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isEdit, setisEdit] = useState(false);
  const [toast, setToast] = useState(false);
  const [text, setText] = useState("");
  const [todoTitle, setTodoTitle] = useState("");

  const { getTodoDetail } = useTodo();
  const { selectedId, todo, content } = getTodoDetail(parseInt(id!));

  const { editTodoItem } = useTodoMutations();

  useEffect(() => {
    setText(content);
    setTodoTitle(todo);
  }, [content, todo]);

  // ?: useTodo로 빼기?
  const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    const id = (e.target as HTMLElement).id;

    if (id === "cancel") {
      navigate("/todo");
    } else if (id === "edit") {
      setisEdit(true);
    } else if (id === "save" && isEdit) {
      editTodoItem({ editedTodo: todoTitle, id: selectedId, content: text });
      setToast(true);
      setisEdit(false);
    }
  };

  return (
    <div className={css.container}>
      <header className={css.header} onClick={(e) => onClick(e)}>
        {todoDetailHeader.map((header) => (
          <DetailButton {...header} onClick={onClick} />
        ))}
      </header>
      <div className={css.title}>
        <p className={css.id}>ID: {selectedId}</p>
        <input
          type="text"
          className={css.input}
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          readOnly={!isEdit}
        />
      </div>
      <textarea
        className={css.textarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
        readOnly={!isEdit}
      />
      {toast && <Toast message="수정 완료" setToast={setToast} />}
    </div>
  );
};

export default TodoDetail;
