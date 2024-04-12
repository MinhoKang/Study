import { useLogin } from "../../hooks";
import css from "../../styles/loginPage/loginPage.module.css";
import { Button, Container, Form, H1, Input } from "../../components";
import { loginButtons, loginInputs } from "../../constants";

const LoginPage = () => {
  const { onChange, onClick, notValid } = useLogin();

  return (
    <Container className={css.container}>
      <H1 className={css.title} text="SIGN UP" />
      <Form id="loginForm" className={css.form}>
        {loginInputs.map((input) => (
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
              onChange={onChange}
            />
            {notValid.map(
              (error) =>
                input.id === error && <p className={css.error}>{input.error}</p>
            )}
          </label>
        ))}
      </Form>

      <div className={css.btns}>
        {loginButtons.map((btn) => (
          <Button
            key={btn.index}
            type={btn.type}
            className={btn.className}
            text={btn.text}
            id={btn.id}
            onClick={onClick}
          />
        ))}
      </div>
    </Container>
  );
};

export default LoginPage;
