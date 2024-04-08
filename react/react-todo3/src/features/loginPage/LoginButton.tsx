import Button from "../../components/button/Button";
import { ButtonProps } from "../../types/button";

const LoginButton = ({ type, text, className, id }: ButtonProps) => {
  console.log(type, text, className, id);
  return <Button type={type} className={className} id={id} text={text} />;
};

export default LoginButton;
