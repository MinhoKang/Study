import React, { SetStateAction } from "react";
import css from "../../styles/features/todoPage/todoSearch.module.css";

interface TodoSearchProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<SetStateAction<string>>;
}

const TodoSearch = ({ searchQuery, setSearchQuery }: TodoSearchProps) => {
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
          placeholder="검색어를 입력하세요"
        />
      </form>
    </div>
  );
};

export default TodoSearch;
