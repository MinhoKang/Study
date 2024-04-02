import styled from "styled-components";

const LoginPage = () => {
  return (
    <div>
      <h1>TODO APP</h1>
      <h2>LOGIN</h2>
      <form>
        <label>
          EMAIL
          <input
            type="text"
            id="email"
            autoFocus
            required
            autoComplete="true"
          />
        </label>
        <label>
          PASSWORD
          <input type="password" id="password" required autoComplete="true" />
        </label>
      </form>
    </div>
  );
};

export default LoginPage;
