import style from "./todoItem.module.css";

const TodoItem = () => {
  return (
    <div className={style.container}>
      <p className={style.todoNumber}></p>
      <p className={style.todoNumber}></p>
      <p className={style.todo}></p>
      <button></button>
      <input type="checkbox" />
    </div>
  );
};

export default TodoItem;
