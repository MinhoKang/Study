import { $app, $body } from "../main";

export default class Login {
  constructor() {}
  render() {
    // this.setContent();
    this.loginBtn = document.querySelector("#loginBtn");
    console.log(this.loginBtn);
  }
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
    $app.appendChild($body);
    this.render();
  }
}

export const loginPage = new Login();
