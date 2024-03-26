import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Todo from "./pages/Todo";

const routes = {
  "/home": Home,
  "/login": Login,
  "/todo": Todo,
};
const header = new Header();
const $app = document.querySelector("#app");

export default class Router {
  rendering(pathName) {
    const PageComponent = routes[pathName.toLowerCase()];
    if (PageComponent) {
      this.setHeader(header);
      const page = new PageComponent();
      this.setBody(page);
    } else {
      console.error("페이지가 없습니다");
    }
  }
  setBody(page) {
    const $body = document.createElement("main");
    $body.innerHTML = page.render();
    $app.appendChild($body);
  }
  setHeader(page) {
    const $header = document.createElement("header");
    $header.innerHTML = page.render();
    $app.appendChild($header);
  }
}
