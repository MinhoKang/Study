import Form from "../../components/form/Form";
import Container from "../../components/container/Container";
import css from "../../styles/signUpPage/signUpPage.module.css";
import { signUpInput } from "../../constants/signUpPage/signUpInput";
import Input from "../../components/input/Input";
import { signUpButtons } from "../../constants/signUpPage/signUpButton";
import Button from "../../components/button/Button";
import cn from "classnames";
import { useSignUp } from "../../hooks/useSignUp";
import { H1 } from "../../components/title/H1";
//TODO:import 줄이기

const SignUpPage = () => {
  const { notValid, handleChange, handleClick } = useSignUp();

  return (
    <Container className={css.container}>
      <H1 className={css.title} text="SIGN UP" />
      <Form id="signUpForm" className={css.form}>
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
              onChange={(e) => handleChange(e)}
            />
            {notValid.map(
              (error) =>
                input.id === error && (
                  <p className={css.warningText}>{input.error}</p>
                )
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
            onClick={handleClick}
          />
        ))}
      </div>
    </Container>
  );
};

export default SignUpPage;
