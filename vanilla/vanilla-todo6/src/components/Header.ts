import { Auth } from "./../../utils/auth";
import { LocalStorageAction } from "./../../utils/localStorageAction";
import { Router } from "../../router";
import { $header } from "../main";
import { Store } from "../store/store";

const localStorageAction = new LocalStorageAction();
const auth = new Auth();

export class Header {
  store: Store;
  $app: HTMLElement;
  $header: HTMLElement;
  logoutBtn: Element | null | undefined;
  router: Router;

  constructor($app: HTMLElement, store: Store, router: Router) {
    this.store = store;
    this.$app = $app;
    this.$header = $header;
    this.router = router;

    this.store.addObserver(this);
  }

  returnContent() {
    let isAccept = localStorageAction.storage("get", "isAccept");
    let content = ``;
    if (isAccept === "true") {
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
    this.func();

    return this.$header;
  }

  func() {
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

    if (this.logoutBtn) {
      this.logoutBtn.addEventListener("click", async (e: Event) => {
        e.preventDefault();
        await auth.logout();
        await this.router.render(window.location.pathname);
      });
    }
  }
}
