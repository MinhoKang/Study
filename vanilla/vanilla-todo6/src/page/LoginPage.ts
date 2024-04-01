import { Router } from "../../router";
import { Auth } from "../../utils/auth";

const auth = new Auth();

export class LoginPage {
  $main: HTMLElement;
  loginBtn: Element | null | undefined;
  router: Router;

  constructor(router: Router) {
    this.$main = document.createElement("main");
    this.router = router;
  }

  returnContent() {
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
    this.init();
    return this.$main;
  }

  init() {
    this.handleLogin();
  }

  async handleLogin() {
    this.loginBtn = this.$main.querySelector("#loginBtn");
    // TODO: 로그인 리팩토링 -> Auth 클래스의 login 함수 호출하고 받은 Promise로 사이드이펙트 처리
    if (!this.loginBtn) return;

    this.loginBtn.addEventListener("click", async (e: Event): Promise<void> => {
      e.preventDefault();
      const idInput = (await document.querySelector("#id")) as HTMLInputElement;
      const passwordInput = (await document.querySelector(
        "#password"
      )) as HTMLInputElement;

      if (!idInput || !passwordInput) return;

      const id = idInput.value;
      const password = passwordInput.value;

      await auth.login(id, password);
      this.router.render(window.location.pathname);
    });
  }
}
