import css from "../../styles/signUpPage/signUpPage.module.css";
import { useSignUp } from "../../hooks";
import { signUpButtons, signUpInput } from "../../constants";

const SignUpPage = () => {
  const { notValid, handleChange, handleClick } = useSignUp();

  return (
    <div className={css.container}>
      <h1 className={css.title}>SIGN UP</h1>
      <form id="signUpForm" className={css.form}>
        {signUpInput.map((input) => (
          <label key={input.index}>
            <span key={input.index}>{input.title}</span>
            <input
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
      </form>
      <div className={css.btns}>
        {signUpButtons.map((btn) => (
          <button
            key={btn.index}
            className={btn.className}
            id={btn.id}
            form={btn.form}
            type={btn.type}
            onClick={handleClick}
          >
            {btn.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SignUpPage;
