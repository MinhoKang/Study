import { Router } from "../../router";
import { Auth } from "../../utils/auth";

const auth = new Auth();

export class LoginPage {
  $main: HTMLElement;
  $form: HTMLFormElement;
  loginBtn: Element | null | undefined;
  router: Router;

  constructor(router: Router) {
    this.$main = document.createElement("main");
    this.$form = document.createElement("form");
    this.$form.addEventListener("click", this.handleLogin1.bind(this));
    this.router = router;
  }

  returnContent() {
    const content = `<h1>Login</h1>`;
    this.$main.innerHTML = content;
    this.$form.innerHTML = `
      <label for="id">
        Id
        <input type="text" id="id" name="id" autoComplete='on' required/>
      </label>
      <label for="password">
        Password
        <input type="password" id="password" name="password" autoComplete='on' required/>
      </label>
      <button class='loginBtn' id="loginBtn">Login</button>`;
    this.$main.appendChild(this.$form);
    return this.$main;
  }

  // TODO: 로그인 리팩토링 -> Auth 클래스의 login 함수 호출하고 받은 Promise로 사이드이펙트 처리

  async handleLogin1(e: Event) {
    e.preventDefault();

    if (
      !e.target ||
      !(e.target instanceof HTMLElement) ||
      !(e.target.tagName === "BUTTON")
    )
      return;

    const id = document.querySelector<HTMLInputElement>("#id")!.value;
    const password =
      document.querySelector<HTMLInputElement>("#password")!.value;

    await auth.login(id, password);
    this.router.render(window.location.pathname);
  }
}
