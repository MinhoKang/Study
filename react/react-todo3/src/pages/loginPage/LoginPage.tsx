import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import { H1 } from "../../components/title/H1";
import { loginButtons } from "../../constants/loginPage/loginButton";
import { loginInputs } from "../../constants/loginPage/loginInput";
import { useLogin } from "../../hooks/useLogin";
import css from "../../styles/loginPage/loginPage.module.css";

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
