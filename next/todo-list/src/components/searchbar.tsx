"use client";

import { useState } from "react";
import style from "./searchbar.module.css";
import { useRouter, useSearchParams } from "next/navigation";

const Searchbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");

  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
    }
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/todo?q=${search}`);
  };

  return (
    <div className={style.container}>
      <input value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} />
      <button onClick={onSubmit}>SEARCH</button>
    </div>
  );
};

export default Searchbar;
