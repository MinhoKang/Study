import Header from "./components/Header";
import { routes } from "./routes";
import account from "./json/account.json" assert { type: "json" };

const $app = document.querySelector("#app");

export default class Main {
  isAccept;
  constructor() {
    window.onpopstate = () => this.render();
    this.isAccept = false;
    localStorage.setItem("isAccept", this.isAccept);
  }

  render() {
    const pathName = window.location.pathname;
    this.routeTo(pathName);
    this.menuClick();
    window.history.pushState({}, "", pathName);
    this.handleSubmit();
    this.logout();
  }

  routeTo(pathName) {
    const PageComponent = routes[pathName.toLowerCase()];
    if (PageComponent) {
      this.setHeader(new Header().render());
      const page = new PageComponent();
      this.setBody(page);
    } else {
      console.error("Route not found");
    }
  }

  setHeader(page) {
    const $header = document.createElement("header");
    $header.innerHTML = page;
    $app.appendChild($header);
  }

  setBody(page) {
    const $body = document.createElement("main");
    $body.innerHTML = page.render();
    $app.appendChild($body);
  }

  menuClick() {
    const header = new Header();
    header.changePathname();
  }

  handleSubmit() {
    if (window.location.pathname === "/login") {
      const loginBtn = document.getElementById("loginBtn");
      loginBtn.addEventListener("click", async (e) => {
        // 비동기로 이벤트 핸들링
        e.preventDefault();
        const id = document.querySelector("#id").value;
        const password = document.querySelector("#password").value;

        // 아이디와 비밀번호 비교
        if (id === account.id && password === account.password) {
          await new Promise((resolve, reject) => {
            // 비동기 처리를 위한 Promise
            resolve();
          })
            .then((response) => {
              this.isAccept = true;
            })
            .then((response) => {
              localStorage.setItem("isAccept", this.isAccept);
              window.addEventListener("storage", (e) => {
                if (e.key === "isAccept") {
                  console.log("키변경");
                }
              });
            });
          // 로그인 성공 시 경로 변경 및 Todo 페이지 렌더링
          window.history.pushState({}, "", "/todo");
          $app.innerHTML = "";
          // new Header.render();
          this.render();
        } else {
          console.log("아이디 또는 비밀번호가 일치하지 않습니다.");
        }
      });
    }
  }

  logout() {
    if (document.querySelector(".menuItem").innerHTML === "Logout") {
      const logoutBtn = document.getElementById("logoutBtn");
      logoutBtn.addEventListener("click", () => {
        localStorage.setItem("isAccept", false);
        window.history.pushState({}, "", "/home");
        $app.innerHTML = "";
        this.render();
      });
    }
  }
}

new Main().render();

// 로그인 구현
// TODO: 로그인 FORM을 구현하고 유저가 입력한 값을 상태를 관리하여,
// 유저가 입력한 값을 API를 요청한다.
// EX) HANDLEsUBMIT() 이 함수가 PROMISE를 반환하는 비동기 방식으로 구현

// 인자를 숫자를 받아서 2의 배수면 TRUE를 비동기로 리턴하는 함수를 작성하라.
