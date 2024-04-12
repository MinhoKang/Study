import { InputType } from "../../types";

export const Input = ({
  type,
  id,
  autoFocus,
  required,
  autoComplete,
  className,
  placeholder,
  onChange,
  value,
}: InputType) => {
  return (
    <input
      type={type}
      id={id}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      required={required}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
