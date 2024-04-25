import { useNavigate, useParams } from "react-router-dom";
import { useTodo } from "../../hooks";
import css from "../../styles/features/todoPage/todoDetail.module.css";
import { useTodoMutations } from "../../apis";
import { useState } from "react";

const TodoDetail = () => {
  const [isEdit, setisEdit] = useState(false);
  const { id } = useParams();
  const { getTodoDetail } = useTodo();
  const { selectedId, todo, content } = getTodoDetail(id!);
  const navigate = useNavigate();
  const { editTodoItem } = useTodoMutations();

  return (
    // TODO: 선언형으로
    <div className={css.container}>
      <header className={css.header}>
        <p className={css.btn} onClick={() => navigate("/todo")}>
          취소
        </p>
        <p className={css.btn} onClick={() => setisEdit(true)}>
          수정
        </p>
        <p className={css.btn}>저장</p>
      </header>
      <h2 className={css.title}>
        {selectedId}: {todo}
      </h2>
      <textarea className={css.textarea} readOnly={!isEdit}>
        {content}
      </textarea>
    </div>
  );
};

export default TodoDetail;
