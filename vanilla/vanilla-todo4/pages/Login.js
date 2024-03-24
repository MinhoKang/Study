export default class Login {
  constructor() {}
  render() {
    return this.setContent();
  }
  setContent() {
    const content = `
    <h1>Login</h1>
    <form>
    <label for="id">
      Username
      <input type="text" id="id" name="id" autoComplete='on' required/>
    </label>
    <label for="password">
      Password
      <input type="password" id="password" name="password" autoComplete='on' required/>
    </label>
    <button class='loginBtn' id="loginBtn" data-path="/login">Login</button>
    </form>

    `;

    return content;
  }
}
