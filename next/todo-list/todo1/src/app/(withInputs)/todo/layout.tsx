import { ReactNode } from "react";
import style from "./layout.module.css";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
