import { $app, $body } from "../main";
import { auth } from "../utils/auth";

export default class Login {
  loginBtn;
  id;
  password;
  constructor() {}
  render() {
    // this.setContent();
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
    // this.render();
    this.isAuth();
  }

  isAuth() {
    this.loginBtn = document.querySelector("#loginBtn");
    this.loginBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      const id = await document.querySelector("#id").value;
      const password = await document.querySelector("#password").value;
      console.log(id);
      console.log(password);
      await auth.login(id, password);
    });
    console.log(this.loginBtn);
  }
}

export const loginPage = new Login();
