import React from "react";

interface Props {
  className: string;
  children: React.ReactNode;
}

const Container = ({ className, children }: Props) => {
  return <div className={className}>{children}</div>;
};

export default Container;
