import "./input.css";

interface InputProps {
  size: string;
  placeholder?: string;
}
const Input = (props: InputProps) => {
  const { size, ...rest } = props;
  return <input className={`input ${size}`} {...rest} />;
};

export default Input;
