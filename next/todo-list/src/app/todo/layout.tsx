import TodoInput from "@/components/todoInput";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
      <TodoInput />
    </div>
  );
};

export default Layout;
