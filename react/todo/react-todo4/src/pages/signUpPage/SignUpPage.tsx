import Container from "../../components/Container";
import { signUpButtons } from "../../constants/signUpPage/signUpButton";
import { signUpInput } from "../../constants/signUpPage/signUpInput";
import { useSignUp } from "../../hooks/useSignUP";
import css from "../../styles/signUpPage/signUpPage.module.css";

const SignUpPage = () => {
  const { handleClick } = useSignUp();

  return (
    <Container className={css.container}>
      <h1 className={css.title}>SIGN UP</h1>
      <form id="signUpForm" className={css.form}>
        {signUpInput.map((input) => (
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
            />
          </label>
        ))}
      </form>
      <div className={css.btns}>
        {signUpButtons.map((btn) => (
          <button
            key={btn.index}
            className={btn.className}
            id={btn.id}
            type={btn.type}
            form={btn.form}
            onClick={handleClick}
          >
            {btn.text}
          </button>
        ))}
      </div>
    </Container>
  );
};

export default SignUpPage;
