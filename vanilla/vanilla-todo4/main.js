import Header from "./components/Header";
import { routes } from "./routes";
import Auth from "./utils/auth";
import Todo from "./utils/todo";

const $app = document.querySelector("#app");
const header = new Header();
const auth = new Auth();
const todoClass = new Todo();

export default class Main {
  constructor() {
    window.onpopstate = () => this.render();
    this.isAccept = localStorage.getItem("isAccept") === "true";
    localStorage.setItem("isAccept", this.isAccept);
  }

  render() {
    $app.innerHTML = "";
    const pathName = window.location.pathname;
    this.routeTo(pathName);
    header.changePathname();
    auth.handleSubmit();
    auth.logout();
    todoClass.addTodo();
  }

  routeTo(pathName) {
    const PageComponent = routes[pathName.toLowerCase()];
    if (PageComponent) {
      this.setHeader(new Header());
      const page = new PageComponent();
      this.setBody(page);
    } else {
      console.error("페이지가 없습니다");
    }
  }

  setHeader(page) {
    const $header = document.createElement("header");
    $header.innerHTML = page.render();
    $app.appendChild($header);
  }

  setBody(page) {
    const $body = document.createElement("main");
    $body.innerHTML = page.render();
    $app.appendChild($body);
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
