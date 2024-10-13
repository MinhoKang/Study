import { Button } from "../../components";
import { ButtonProps } from "../../types";

const LoginButton = ({ type, text, className, id }: ButtonProps) => {
  return <Button type={type} className={className} id={id} text={text} />;
};

export default LoginButton;
