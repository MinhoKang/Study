import Container from "../../components/container/Container";
import Form from "../../components/form/Form";
import H1 from "../../components/title/H1";
import { loginButtons } from "../../constants/button/loginButton";
import { loginInputs } from "../../constants/input/loginInput";
import LoginButton from "../../features/loginPage/LoginButton";
import LoginInput from "../../features/loginPage/LoginInput";
import css from "../../styles/loginPage/loginPage.module.css";

const LoginPage = () => {
  return (
    <Container className={css.container}>
      <H1 className={css.title} text="SIGN UP" />
      <Form id="loginForm" className={css.form}>
        {loginInputs.map((input) => (
          <label key={input.index}>
            <LoginInput input={input} />
          </label>
        ))}
      </Form>
      <div className={css.btns}>
        {loginButtons.map((btn) => (
          <LoginButton
            key={btn.index}
            type={btn.type} //FIXME
            className={btn.className}
            text={btn.text}
          />
        ))}
      </div>
    </Container>
  );
};

export default LoginPage;
