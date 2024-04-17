import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { useTodo } from "../../hooks";
import { useSearchQuery } from "../../hooks/queries";
import css from "../../styles/features/todoPage/todoSearch.module.css";

const TodoSearch = () => {
  const { handleSearch, value, setValue, handleClear } = useTodo();
  const { isLoading } = useSearchQuery(value);
  return (
    <div className={css.container}>
      <form
        className={css.form}
        onSubmit={(e) => handleSearch({ e, keyword: value })}
      >
        {value && (
          <div className={css.clearBtn} onClick={handleClear}>
            X
          </div>
        )}
        <input
          type="text"
          className={css.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={css.button}>search</button>
      </form>

      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default TodoSearch;
