import { Header } from "./src/components/Header";
import { ErrorPage } from "./src/page/ErrorPage";
import { HomePage } from "./src/page/HomePage";
import { LoginPage } from "./src/page/LoginPage";
import { TodoPage } from "./src/page/TodoPage";
import { Store } from "./src/store/store";

type Routes = { path: string; component: any }[];

export class Router {
  store: Store;
  routes: Routes;
  $app: HTMLElement;

  constructor($app: HTMLElement, store: Store) {
    this.$app = $app;
    this.store = store;

    this.routes = [
      {
        path: "/home",
        component: new HomePage(this.$app, this.store),
      },
      {
        path: "/login",
        component: new LoginPage(this.$app, this.store),
      },
      {
        path: "/todo",
        component: new TodoPage(this.$app, this.store),
      },
      {
        path: "404",
        component: new ErrorPage(this.$app),
      },
    ];

    this.render(window.location.pathname);

    window.addEventListener("popstate", () => {
      this.render(window.location.pathname);
    });
  }

  render(pathName: string) {
    if (this.$app) {
      let pageFound = false;
      this.$app.innerHTML = "";

      // 헤더 렌더링
      const header = new Header(this.$app, this.store);
      this.$app.appendChild(header.returnContent());
      header.menuClick(this);

      // 페이지 렌더링

      this.routes.forEach((page) => {
        if (pathName.toLowerCase() === page.path) {
          this.$app.appendChild(page.component.returnContent());

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
}
