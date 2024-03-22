import Header from "./components/Header";
import { routes } from "./routes";

// const $app = document.querySelector("#app");

// class Main {
//   constructor() {
//     this.render();
//   }

//   render() {
//     let pathName = window.location.pathname;
//     this.onNavigate(window.location.pathname);
//     console.log("object");
//     window.history.pushState({}, "", pathName);
//   }
//   onNavigate(pathName) {
//     console.log("path", pathName);
//     this.routeTo(pathName);
//   }
//   routeTo(pathName) {
//     routes[pathName];
//     console.log(routes);
//     console.log(routes[pathName]);
//   }
// }
// window.onpopstate = () => {
//   $app.innerHTML = routes[window.location.pathname];
// };

// new Main($app);

const $app = document.querySelector("#app");

export default class Main {
  constructor() {
    window.onpopstate = () => this.render();
  }
  

  render() {
    const pathName = window.location.pathname;
    this.routeTo(pathName);
    this.menuClick();
    window.history.pushState({}, "", pathName);
  }

  routeTo(pathName) {
    const PageComponent = routes[pathName.toLowerCase()];
    if (PageComponent) {
      // TODO: 헤더 컴포넌트를 먼저 $APP 에 넣기.

      this.setHeader(new Header().render());
      const page = new PageComponent();
      this.setBody(page);

      // TODO: 페이지 컴포넌트를 $app에 어펜드 차일드
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
}

new Main().render();


// 로그인 구현
// TODO: 로그인 FORM을 구현하고 유저가 입력한 값을 상태를 관리하여, 
// 유저가 입력한 값을 API를 요청한다.
// EX) HANDLEsUBMIT() 이 함수가 PROMISE를 반환하는 비동기 방식으로 구현 



// 인자를 숫자를 받아서 2의 배수면 TRUE를 비동기로 리턴하는 함수를 작성하라.

