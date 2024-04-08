import { ButtonProps } from "../../types/button";

const Button = ({ type, form, className, text }: ButtonProps) => {
  return (
    <button type={type} form={form} className={className}>
      {text}
    </button>
  );
};

export default Button;
