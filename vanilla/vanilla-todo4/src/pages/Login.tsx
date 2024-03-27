import { $app, $body, main } from "../main";
import { auth } from "../utils/auth";

export default class Login {
  loginBtn: Element | null | undefined;

  constructor() {}

  render() {
    this.setContent();
    this.handleLogin();
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
    if ($app) {
      $app.appendChild($body);
    }
  }

  handleLogin() {
    this.loginBtn = document.querySelector("#loginBtn");
    if (this.loginBtn instanceof HTMLButtonElement) {
      this.loginBtn.addEventListener("click", async (e: Event) => {
        e.preventDefault();
        const idInput = await document.querySelector("#id");
        const passwordInput = await document.querySelector("#password");

        if (
          idInput instanceof HTMLInputElement &&
          passwordInput instanceof HTMLInputElement
        ) {
          const id = idInput.value;
          const password = passwordInput.value;
          await auth.login(id, password);
          await main.render();
        }
      });
    }
  }
}

export const loginPage = new Login();
