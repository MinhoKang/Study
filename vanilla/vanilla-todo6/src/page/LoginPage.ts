import { auth } from "./../../../vanilla-todo4/src/utils/auth";
import { Store } from "../store/store";
import { Router } from "../../router";

export class LoginPage {
  store: Store;
  $app: HTMLElement;
  $main: HTMLElement;
  loginBtn: Element | null | undefined;

  constructor($app: HTMLElement, store: Store) {
    this.$main = document.createElement("main");
    this.store = store;
    this.$app = $app;
  }

  returnContent(router: Router) {
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
    this.$main.innerHTML = content;
    this.handleLogin(router);
    return this.$main;
  }

  handleLogin(router: Router) {
    this.loginBtn = this.$main.querySelector("#loginBtn");
    if (this.loginBtn instanceof HTMLButtonElement) {
      this.loginBtn.addEventListener(
        "click",
        async (e: Event): Promise<void> => {
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
            router.render(window.location.pathname);
          }
        }
      );
    }
  }
}
