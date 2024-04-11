import Form from "../../components/form/Form";
import Container from "../../components/container/Container";
import css from "../../styles/signUpPage/signUpPage.module.css";
import { signUpInput } from "../../constants/signUpPage/signUpInput";
import Input from "../../components/input/Input";
import { formSchema } from "../../utils/regex";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpButtons } from "../../constants/signUpPage/signUpButton";
import Button from "../../components/button/Button";
import cn from "classnames";
import { useSignUp } from "../../hooks/useSignUp";
import { useNavigate } from "react-router-dom";
import { H1 } from "../../components/title/H1";
//TODO:import 줄이기

const SignUpPage = () => {
  //TODO: 정규표현식으로 변경
  //TODO: 모든 로직은 훅으로 (다른 컴포넌트도)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    if (id === "cancel") navigate("/");
  };

  return (
    <Container className={css.container}>
      <H1 className={css.title} text="SIGN UP" />
      <Form
        id="signUpForm"
        className={css.form}
        onSubmit={handleSubmit(useSignUp)}
      >
        {/*TODO: name활용*/}
        {signUpInput.map((input) => (
          <label key={input.index}>
            <span>{input.title}</span>
            <Input
              className={input.className}
              type={input.type}
              id={input.id}
              placeholder={input.placeholder}
              autoFocus={input.autoFocus}
              autoComplete={input.autoComplete}
              required={input.required}
              {...register(
                input.id as
                  | "email"
                  | "password"
                  | "passwordConfirm"
                  | "phoneNumber",
                input.register && input.register
              )}
            />
            {errors[input.id as keyof typeof errors]?.message && (
              <p className={css.warningText}>
                {errors[input.id as keyof typeof errors]?.message}
              </p>
            )}
          </label>
        ))}
      </Form>
      <div className={css.btns}>
        {signUpButtons.map((btn) => (
          <Button
            key={btn.index}
            text={btn.text}
            className={cn(btn.className)}
            id={btn.id}
            type={btn.type}
            form={btn.form}
            onClick={onClick}
          />
        ))}
      </div>
    </Container>
  );
};

export default SignUpPage;
