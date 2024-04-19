import { useTodo } from "../../hooks";
import css from "../../styles/features/todoPage/todoSearch.module.css";

const TodoSearch = () => {
  const { value, setValue, handleSearch, handleClear } = useTodo();

  return (
    <div className={css.container}>
      <form
        className={css.form}
        onSubmit={(e) => handleSearch({ e, keyword: value })}
      >
        {value && (
          <div className={css.clearBtn} onClick={(e) => handleClear(e)}>
            X
          </div>
        )}
        <input
          type="text"
          className={css.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={css.button} type="submit">
          search
        </button>
      </form>
    </div>
  );
};

export default TodoSearch;
