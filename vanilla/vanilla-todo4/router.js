import { header } from "./components/Header";
import { errorPage } from "./pages/Error";
import { homePage } from "./pages/Home";
import { loginPage } from "./pages/Login";
import { todoPage } from "./pages/Todo";

const routes = {
  "/home": homePage,
  "/login": loginPage,
  "/todo": todoPage,
  404: errorPage,
};

const $app = document.querySelector("#app");

class Router {
  rendering(pathName) {
    const PageComponent = routes[pathName.toLowerCase()] || routes[404];
    // const page = new PageComponent();
    this.setHeader(header);
    this.setBody(PageComponent);
  }
  setBody(page) {
    const $body = document.createElement("main");
    $body.innerHTML = page.setContent();
    $app.appendChild($body);
  }
  setHeader(page) {
    const $header = document.createElement("header");
    $header.innerHTML = page.setContent();
    $app.appendChild($header);
  }
}

export const router = new Router();
