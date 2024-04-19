import React, { SetStateAction } from "react";
import css from "../../styles/features/todoPage/todoSearch.module.css";

interface Props {
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  handleClear: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const TodoSearch = ({ value, setValue, handleClear }: Props) => {
  return (
    <div className={css.container}>
      <form className={css.form}>
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
