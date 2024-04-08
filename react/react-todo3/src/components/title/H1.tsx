import { H1Props } from "../../types/title";

const H1 = ({ className, text }: H1Props) => {
  return <h1 className={className}>{text}</h1>;
};

export default H1;
