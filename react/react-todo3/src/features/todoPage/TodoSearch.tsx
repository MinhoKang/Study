import { useTodo } from "../../hooks";
import css from "../../styles/features/todoPage/todoSearch.module.css";

// TODO:로딩스피너
const TodoSearch = () => {
  const { value, setValue } = useTodo();
  return (
    <form className={css.form}>
      <input
        type="text"
        className={css.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className={css.button}>search</button>
    </form>
  );
};

export default TodoSearch;
