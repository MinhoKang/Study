import Container from "../../components/Container";
import { loginButtons } from "../../constants/loginPage/loginButton";
import { loginInputs } from "../../constants/loginPage/loginInput";
import { useLogin } from "../../hooks/useLogin";
import css from "../../styles/loginPage/loginPage.module.css";

const LoginPage = () => {
  const { handleClick, onChange } = useLogin();

  return (
    <Container className={css.container}>
      <h1 className={css.title}>LOGIN</h1>
      <form id="loginForm" className={css.form}>
        {loginInputs.map((input) => (
          <label key={input.index}>
            <span>{input.title}</span>
            <input
              className={input.className}
              type={input.type}
              id={input.id}
              placeholder={input.placeholder}
              autoFocus={input.autoFocus}
              autoComplete={input.autoComplete}
              required={input.required}
              onChange={onChange}
            />
          </label>
        ))}
      </form>
      <div className={css.btns}>
        {loginButtons.map((btn) => (
          <button
            key={btn.index}
            type={btn.type}
            className={btn.className}
            id={btn.id}
            onClick={handleClick}
          >
            {btn.text}
          </button>
        ))}
      </div>
    </Container>
  );
};

export default LoginPage;
