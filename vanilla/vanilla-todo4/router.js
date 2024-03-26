import Header from "./components/Header";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Todo from "./pages/Todo";

const routes = {
  "/home": Home,
  "/login": Login,
  "/todo": Todo,
  404: Error,
};

const header = new Header();
const $app = document.querySelector("#app");

export default class Router {
  rendering(pathName) {
    const PageComponent = routes[pathName.toLowerCase()] || routes[404];
    const page = new PageComponent();
    this.setHeader(header);
    this.setBody(page);
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
