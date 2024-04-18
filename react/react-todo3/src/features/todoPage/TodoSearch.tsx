import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { useTodo } from "../../hooks";
import css from "../../styles/features/todoPage/todoSearch.module.css";

const TodoSearch = () => {
  const { handleSearch, handleClear, value, setValue } = useTodo();
  // const { isLoading } = useSearchQuery(value);

  return (
    <div className={css.container}>
      <form
        className={css.form}
        onSubmit={(e) => handleSearch({ e, keyword: value })}
        id="search"
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
          placeholder="검색어를 입력하세요"
          id="input"
        />
        <button className={css.button} type="submit">
          search
        </button>
      </form>

      {/* {isLoading && <LoadingSpinner />} */}
    </div>
  );
};

export default TodoSearch;
