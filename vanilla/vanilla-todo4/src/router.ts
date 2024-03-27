import { header } from "./components/Header";
import { errorPage } from "./pages/Error";
import { homePage } from "./pages/Home";
import { loginPage } from "./pages/Login";
import { todoPage } from "./pages/Todo";

interface Page {
  render(): void;
}

interface Routes {
  [path: string]: Page;
}

const routes: Routes = {
  "/home": homePage,
  "/login": loginPage,
  "/todo": todoPage,
  "404": errorPage,
};

class Router {
  rendering(pathName: string) {
    const PageComponent = routes[pathName.toLowerCase()] || routes[404];
    this.setHeader(header);
    this.setBody(PageComponent);
  }

  setHeader(page: Page) {
    const $header = document.createElement("header");
    // $header.innerHTML = page.render();
    const renderResult = page.render();
    if (typeof renderResult === "string") {
      $header.innerHTML = renderResult;
    }
    // $app.appendChild($header);
  }

  setBody(page: Page) {
    const $body = document.createElement("main");
    // $body.innerHTML = page.render();
    const renderResult = page.render();
    if (typeof renderResult === "string") {
      $body.innerHTML = renderResult;
    }
    // $app.appendChild($body);
  }
}

export const router = new Router();
