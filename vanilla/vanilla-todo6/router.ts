import { Header } from "./src/components/Header";
import { ErrorPage } from "./src/page/ErrorPage";
import { HomePage } from "./src/page/HomePage";
import { LoginPage } from "./src/page/LoginPage";
import { TodoPage } from "./src/page/todoPage/TodoPage";
import { Store } from "./src/store/store";
import { LocalStorageAction } from "./utils/localStorageAction";

const localStorageAction = new LocalStorageAction();

type Routes = { path: string; component: any }[];

export class Router {
  store: Store;
  routes: Routes;
  $app: HTMLElement;
  isLogin: string | null | undefined;

  constructor($app: HTMLElement, store: Store) {
    this.$app = $app;
    this.store = store;
    this.isLogin = localStorageAction.storage("get", "isAccept");
    this.routes = [
      {
        path: "/home",
        component: new HomePage(),
      },
      {
        path: "/login",
        component: new LoginPage(this),
      },
      {
        path: "/todo",
        component: new TodoPage(this.store),
      },
      {
        path: "404",
        component: new ErrorPage(),
      },
    ];

    this.render(window.location.pathname);

    window.addEventListener("popstate", () => {
      this.render(window.location.pathname);
    });
  }

  render(pathName: string) {
    let pageFound = false;

    this.isLogin = localStorageAction.storage("get", "isAccept");
    this.$app.innerHTML = "";

    // 헤더 렌더링
    const header = new Header(this.store, this.isLogin, this);
    this.$app.appendChild(header.returnContent());

    // 페이지 렌더링
    if (this.isLogin !== "true" && pathName.toLowerCase() === "/todo") {
      alert("로그인이 필요합니다.");
      window.location.pathname = "/login";
    }
    this.routes.forEach((page) => {
      if (pathName.toLowerCase() === page.path) {
        this.$app.appendChild(page.component.returnContent(this));
        pageFound = true;
      }
    });

    if (!pageFound) {
      const errorPage = this.routes.find((page) => page.path === "404");
      if (errorPage) {
        this.$app.appendChild(errorPage.component.returnContent());
      }
    }
  }
}
