import css from "../../styles/signUpPage/signUpPage.module.css";
import { Button, Container, Form, H1, Input } from "../../components";
import cn from "classnames";
import { useSignUp } from "../../hooks";
import { signUpButtons, signUpInput } from "../../constants";

const SignUpPage = () => {
  const { notValid, handleChange, handleClick } = useSignUp();

  return (
    <Container className={css.container}>
      <H1 className={css.title} text="SIGN UP" />
      <Form id="signUpForm" className={css.form}>
        {signUpInput.map((input) => (
          <label key={input.index}>
            <span key={input.index}>{input.title}</span>
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
                  <p className={css.warningText} key={input.index}>
                    {input.error}
                  </p>
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
