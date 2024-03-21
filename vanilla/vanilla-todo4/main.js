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

class Main {
  constructor() {
    this.render();
    window.onpopstate = () => this.render();
  }

  render() {
    const pathName = window.location.pathname;
    this.routeTo(pathName);
    window.history.pushState({}, "", pathName);
  }

  routeTo(pathName) {
    const PageComponent = routes[pathName];
    if (PageComponent) {
      // TODO: 헤더 컴포넌트를 먼저 $APP 에 넣기.

      const page = new PageComponent($app);
      page.render();
      // TODO: 페이지 컴포넌트를 $app에 어펜드 차일드
    } else {
      console.error("Route not found");
    }
  }
}

new Main();
