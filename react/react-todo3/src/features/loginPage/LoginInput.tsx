import Input from "../../components/input/Input";
import { InputType } from "../../types/input";

const LoginInput = ({ input }: { input: InputType }) => {
  return (
    <Input
      className={input.className}
      type={input.type}
      id={input.id}
      placeholder={input.placeholder}
      autoFocus={input.autoFocus}
      autoComplete={input.autoComplete}
      required={input.required}
    />
  );
};

export default LoginInput;
