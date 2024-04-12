import { H1Props } from "../../types";

export const H1 = ({ className, text }: H1Props) => {
  return <h1 className={className}>{text}</h1>;
};
