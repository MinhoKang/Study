import { ButtonProps } from "../../types/button";

const Button = ({ type, form, className, text, id, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      form={form}
      className={className}
      id={id}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
