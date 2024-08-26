import React, { ReactNode } from "react";

const Layout = ({
  children,
  sidebar,
  feed,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  feed: ReactNode;
}) => {
  return (
    <div>
      {sidebar}
      {feed}
      {children}
    </div>
  );
};

export default Layout;
