import { ButtonProps } from "../types";

const Button = ({ type, text, className, id, name }: ButtonProps) => {
  return (
    <button type={type} className={className} id={id} name={name}>
      {text}
    </button>
  );
};

export default Button;
