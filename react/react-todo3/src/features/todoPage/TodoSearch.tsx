import React, { SetStateAction } from "react";
import css from "../../styles/features/todoPage/todoSearch.module.css";

interface Props {
  searchQuery: string;
  setSearchQuery: React.Dispatch<SetStateAction<string>>;
}
const TodoSearch = ({ searchQuery, setSearchQuery }: Props) => {
  return (
    <div className={css.container}>
      <form className={css.form}>
        {searchQuery && (
          <button className={css.clearBtn} onClick={() => setSearchQuery("")}>
            X
          </button>
        )}
        <input
          type="text"
          className={css.input}
          id="input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
};

export default TodoSearch;
