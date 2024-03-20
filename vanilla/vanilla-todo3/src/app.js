// 라우팅을 위한 app.js

import Header from "./pages/Header";
import Login from "./pages/Login";

const routes = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/login",
    name: "login",
  },
  {
    path: "/todo",
    name: "todo",
  },
];

const $app = document.querySelector("#app");

class App {
  constructor() {
    this.routeTo();
    this.render();
  }

  routeTo() {
    console.log("aaa");
    const path = location.pathname;
    if (path === "/") {
      console.log("home");
    } else if (path === "/login") {
      console.log("login");
      new Login($app);
    } else if (path === "/todo") {
      console.log("todo");
    }
  }
  render() {
    console.log("app", $app);
  }
}

new Header($app);
new App($app);
