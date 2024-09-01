import Searchbar from "@/components/searchbar";
import TodoInput from "@/components/todoInput";
import { ReactNode } from "react";
import style from "./layout.module.css";
import LogoutBtn from "@/components/logoutBtn";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={style.container}>
      <Searchbar />
      {children}
      <TodoInput />
    </div>
  );
};

export default Layout;
