import styles from "./loginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TODO APP</h1>
      <h2 className={styles.title}>LOGIN</h2>
      <form id="loginForm" className={styles.form}>
        <label>
          <span>EMAIL</span>
          <input
            type="text"
            id="email"
            autoFocus
            required
            autoComplete="true"
            className={styles.input}
            placeholder="EMAIL"
          />
        </label>
        <label>
          <span>PASSWORD</span>

          <input
            className={styles.input}
            type="password"
            id="password"
            required
            autoComplete="true"
            placeholder="PASSWORD"
          />
        </label>
      </form>
      <button type="submit" form="loginForm" className={styles.loginBtn}>
        LOGIN
      </button>
    </div>
  );
};

export default LoginPage;
