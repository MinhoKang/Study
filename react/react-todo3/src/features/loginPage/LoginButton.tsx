import Button from "../../components/button/Button";
import { ButtonProps } from "../../types/button";

const LoginButton = ({ type, text, className }: ButtonProps) => {
  return <Button type={type} className={className} text={text} />;
};

export default LoginButton;
