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

class Router {
  rendering(pathName) {
    const PageComponent = routes[pathName.toLowerCase()] || routes[404];
    this.setHeader(header);
    this.setBody(PageComponent);
  }

  setHeader(page) {
    const $header = document.createElement("header");
    $header.innerHTML = page.render();
    // $app.appendChild($header);
  }

  setBody(page) {
    const $body = document.createElement("main");
    $body.innerHTML = page.render();
    // $app.appendChild($body);
  }
}

export const router = new Router();
