import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import style from "./searchableLayout.module.css";

export const SearchableLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const { q } = router.query;

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmit();
  };

  useEffect(() => {
    setSearch((q as string) || "");
  }, [q]);

  return (
    <div>
      <div className={style.searchbarContainer}>
        <input
          placeholder="검색어를 입력하세요"
          value={search}
          onChange={onChangeSearch}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
};
