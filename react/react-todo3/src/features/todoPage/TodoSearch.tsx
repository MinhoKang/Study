import { useState } from "react";
import { useTodo } from "../../hooks";
import { useDebounce } from "../../hooks/useDebounce";
import css from "../../styles/features/todoPage/todoSearch.module.css";

const TodoSearch = () => {
  // const [value, setValue] = useState("");

  const { value, setValue, handleSearch, handleClear } = useTodo();

  const debounceValue = useDebounce({ value });

  return (
    <div className={css.container}>
      <form className={css.form} onInput={(e) => handleSearch({ e })}>
        {value && (
          <button className={css.clearBtn} onClick={(e) => handleClear(e)}>
            X
          </button>
        )}
        <input
          type="text"
          className={css.input}
          id="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
        {/* <button className={css.button} type="submit">
          search
        </button> */}
      </form>
    </div>
  );
};

export default TodoSearch;
