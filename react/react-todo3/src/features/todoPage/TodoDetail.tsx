import { useNavigate, useParams } from "react-router-dom";
import { useTodo } from "../../hooks";
import css from "../../styles/features/todoPage/todoDetail.module.css";
import { useTodoMutations } from "../../apis";
import { useState } from "react";
import { todoDetailHeader } from "../../constants/todoPage/todoDetailHeader";
import Toast from "../../components/toast/Toast";

const TodoDetail = () => {
  const { id } = useParams();
  console.log("TodoDetail", id);
  const [isEdit, setisEdit] = useState(false);
  const [toast, setToast] = useState(false);
  const { getTodoDetail } = useTodo();
  const { selectedId, todo, content } = getTodoDetail(id!);
  const [text, setText] = useState(content);
  const [todoTitle, setTodoTitle] = useState(todo);
  console.log("TodoDetail", text);
  console.log("TodoDetail", todoTitle);
  console.log("TodoDetail", content);

  const navigate = useNavigate();
  const { editTodoItem } = useTodoMutations();

  // ?: useTodo로 빼기?
  const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    const id = (e.target as HTMLElement).id;
    if (id === "cancel") {
      navigate("/todo");
    } else if (id === "edit") {
      setisEdit(true);
    } else if (id === "save" && isEdit) {
      console.log(todoTitle);
      console.log(selectedId);
      console.log(text);
      editTodoItem({ editedTodo: todoTitle, id: selectedId, content: text });
      setToast(true);
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
          value={todoTitle}
          onChange={(e) => {
            setTodoTitle(e.target.value);
            console.log(e.target.value);
          }}
          readOnly={!isEdit}
        />
      </div>
      <textarea
        className={css.textarea}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          console.log(e.target.value);
        }}
        readOnly={!isEdit}
      />
      {toast && <Toast message="수정 완료" setToast={setToast} />}
    </div>
  );
};

export default TodoDetail;
