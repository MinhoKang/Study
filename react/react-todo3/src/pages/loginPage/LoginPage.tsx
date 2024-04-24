import { useLogin } from "../../hooks";
import css from "../../styles/loginPage/loginPage.module.css";
import { loginButtons, loginInputs } from "../../constants";

const LoginPage = () => {
  const { onChange, onClick, notValid } = useLogin();

  return (
    <div className={css.container}>
      <h1 className={css.title}>SIGN UP</h1>
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
            {notValid.map(
              (error) =>
                input.id === error && (
                  <p key={input.index} className={css.error}>
                    {input.error}
                  </p>
                )
            )}
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
            onClick={onClick}
          >
            {btn.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LoginPage;
