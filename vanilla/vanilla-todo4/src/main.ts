import { router } from "./router";

export const $app: HTMLElement | null = document.querySelector("#app");
export const $header = document.createElement("header");
export const $body = document.createElement("main");

class Main {
  constructor() {
    // window.onpopstate = () => this.render();
    window.addEventListener("popstate", () => {
      this.render();
    });
  }

  render() {
    if ($app !== null) {
      $app.innerHTML = "";
      router.rendering(window.location.pathname);
    }
  }
}

export const main = new Main();

main.render();

// 1. ts.config 타입스크립트 환경세팅
// 2. 컴파일 옵션에 대한 이해, 타입스크립트가 어떻게 동작하는지에 대한 이해
// 3. 실제로 마이그레이션 하면서 타입을 이렇게 하면 되겠구나 하는 이해
// 4. 클래스에 대한
