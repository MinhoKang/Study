import { InputType } from "../../types/input";

const Input = ({
  type,
  id,
  autoFocus,
  required,
  autoComplete,
  className,
  placeholder,
}: InputType) => {
  return (
    <input
      type={type}
      id={id}
      autoFocus={autoFocus}
      required={required}
      autoComplete={autoComplete}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default Input;
