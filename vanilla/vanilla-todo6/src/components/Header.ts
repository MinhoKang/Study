import { Router } from "../../router";
import { $header } from "../main";
import { Store } from "../store/store";

export class Header {
  store: Store;
  $app: HTMLElement;
  $header: HTMLElement;

  constructor($app: HTMLElement, store: Store) {
    this.store = store;
    this.$app = $app;
    this.$header = $header;
  }

  returnContent() {
    const content = `
        <ul>
            <li class='menuItem'>Home</li>
            <li class='menuItem'>Login</li>
        </ul>
`;

    this.$header.innerHTML = content;

    return this.$header;
  }

  menuClick(router: Router) {
    const menuItems = document.querySelectorAll(".menuItem");
    menuItems.forEach((menuItem) =>
      menuItem.addEventListener("click", (e) => {
        e.preventDefault();
        let pathName = menuItem.textContent?.toLowerCase();
        if (pathName) {
          window.history.pushState({}, "", pathName);
          router.render("/" + pathName);
        }
      })
    );
  }
}
