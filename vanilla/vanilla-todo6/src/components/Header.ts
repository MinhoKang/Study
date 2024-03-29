import { LocalStorageAction } from "./../../utils/localStorageAction";
import { auth } from "../../utils/auth";
import { Router } from "../../router";
import { $header } from "../main";
import { Store } from "../store/store";

const localStorageAction = new LocalStorageAction();

export class Header {
  store: Store;
  $app: HTMLElement;
  $header: HTMLElement;
  logoutBtn: Element | null | undefined;

  constructor($app: HTMLElement, store: Store) {
    this.store = store;
    this.$app = $app;
    this.$header = $header;
    this.store.addObserver(this);
  }

  returnContent(router: Router) {
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
    this.func(router);
    console.log("11111", router);

    return this.$header;
  }

  func(router: Router) {
    this.menuClick(router);
    this.handleLogout(router);
    console.log("222", router);
  }

  menuClick(router: Router) {
    const menuItems = this.$header.querySelectorAll(".menuItem");
    menuItems.forEach((menuItem) =>
      menuItem.addEventListener("click", async (e) => {
        e.preventDefault();
        let pathName = menuItem.textContent?.toLowerCase();
        console.log(pathName);
        if (pathName && pathName !== "logout") {
          await window.history.pushState({}, "", pathName);
          console.log(window.location.pathname);
          await router.render(window.location.pathname);
        } else if (pathName && pathName === "logout") {
          await this.handleLogout(router);
          console.log("object");
        }
      })
    );
  }

  handleLogout(router: Router) {
    this.logoutBtn = this.$header.querySelector("#logoutBtn");
    console.log("3333", router);

    if (this.logoutBtn) {
      this.logoutBtn.addEventListener("click", async (e: Event) => {
        console.log("4", router);

        e.preventDefault();
        console.log("qwe");
        console.log(router);
        await auth.logout();
        console.log(window.location.pathname);
        await router.render(window.location.pathname);
      });
    }
  }
}
