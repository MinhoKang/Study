import { Auth } from "./../../utils/auth";
import { Router } from "../../router";
import { Store } from "../store/store";

const auth = new Auth();

export class Header {
  store: Store;
  $header: HTMLElement;
  logoutBtn: Element | null | undefined;
  isLogin: string | null | undefined;
  router: Router;

  constructor(
    store: Store,
    isLogin: string | null | undefined,
    router: Router
  ) {
    this.store = store;
    this.$header = document.createElement("header");
    this.isLogin = isLogin;
    this.router = router;
    this.store.addObserver(this);
  }

  returnContent() {
    let content = ``;

    if (this.isLogin === "true") {
      content = `
        <ul>
          <li id='logoutBtn' class='menuItem'>Logout</li>
          <p>${this.store.getTodoItems().length}</p>
        </ul>
      `;
    } else {
      content = `
      <ul>
          <li class='menuItem'>Home</li>
          <li class='menuItem'>Login</li>
      </ul>
`;
    }

    this.$header.innerHTML = content;
    this.init();

    return this.$header;
  }

  init() {
    this.menuClick();
    this.handleLogout();
  }

  menuClick() {
    const menuItems = this.$header.querySelectorAll(".menuItem");
    menuItems.forEach((menuItem) =>
      menuItem.addEventListener("click", async (e) => {
        e.preventDefault();
        let pathName = menuItem.textContent?.toLowerCase();
        if (pathName && pathName !== "logout") {
          await window.history.pushState({}, "", pathName);
          await this.router.render(window.location.pathname);
        } else if (pathName && pathName === "logout") {
          await this.handleLogout();
        }
      })
    );
  }

  handleLogout() {
    this.logoutBtn = this.$header.querySelector("#logoutBtn");

    if (!this.logoutBtn) return;

    this.logoutBtn.addEventListener("click", async (e: Event) => {
      e.preventDefault();
      await auth.logout();
      await this.store.clearTodoItem();
      await this.router.render(window.location.pathname);
    });
  }
}
