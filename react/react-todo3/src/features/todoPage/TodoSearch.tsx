import { useTodo } from "../../hooks";
import css from "../../styles/features/todoPage/todoSearch.module.css";

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
