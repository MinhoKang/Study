import { $app, $body } from "../main";

export default class Login {
  constructor() {}
  render() {}
  setContent() {
    const content = `<h1>Login</h1>
    <form>
    <label for="id">
      Id
      <input type="text" id="id" name="id" autoComplete='on' required/>
    </label>
    <label for="password">
      Password
      <input type="password" id="password" name="password" autoComplete='on' required/>
    </label>
    <button class='loginBtn' id="loginBtn">Login</button>
    </form>
    `;

    $body.innerHTML = content;
    console.log($body.innerHTML);
    $app.appendChild($body);
  }
}

export const loginPage = new Login();
