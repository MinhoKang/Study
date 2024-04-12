import { ButtonProps } from "../../types/button";

export const Button = ({
  type,
  form,
  className,
  text,
  id,
  onClick,
}: ButtonProps) => {
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
