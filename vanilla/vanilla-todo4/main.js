import { router } from "./router";
import { auth } from "./utils/auth";
import { todoPage } from "./pages/Todo";
import { header } from "./components/Header";

export const $app = document.querySelector("#app");
export const $header = document.createElement("header");
export const $body = document.createElement("main");

export default class Main {
  constructor() {
    // window.onpopstate = () => this.render();
    window.addEventListener("popstate", () => {
      this.render();
    });
  }

  render() {
    $app.innerHTML = "";
    router.rendering(window.location.pathname);
    header.changePathname();
    // auth.login();
    // auth.logout();
    todoPage.addTodo();
    todoPage.renderTodo();
  }
}

new Main().render();

// 로그인 구현
// TODO: 로그인 FORM을 구현하고 유저가 입력한 값을 상태를 관리하여,
// 유저가 입력한 값을 API를 요청한다.
// EX) HANDLEsUBMIT() 이 함수가 PROMISE를 반환하는 비동기 방식으로 구현

// 인자를 숫자를 받아서 2의 배수면 TRUE를 비동기로 리턴하는 함수를 작성하라.

// 1. 일단 돌아가게 만든다.
// 2. 잘 동작하게 만든다.
// 3. 빠르게 동작하게 만든다.

// 1. 역할별로 분리
// 재사용성, 명확성, 가독성,

// 로그인이라는 클래스는 무슨 역할을 하는가?
// -> 로그인 관련 모든 것을 담당
// -> 로컬스토리지 관련 유틸을 만들던
// -> 상태값에 고민을 해보고
// isLogin
