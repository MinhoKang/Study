import { store2 } from "./../store/store2";
import { $app, $header, main } from "../main";
import { auth } from "../utils/auth";
import LocalStorageUtil from "../utils/localStorage";

const LocalStorageAction = new LocalStorageUtil();

class Header {
  logoutBtn: Element | null | undefined;
  todoLengthElement: Element | null | undefined;

  constructor() {
    store2.addObserver(this);
  }

  render() {
    this.setContent();
    this.handleLogout();
    this.changePathname();
  }

  setContent() {
    let isAccept = LocalStorageAction.storage("get", "isAccept");
    if (isAccept === "true" && window.location.pathname === "/todo") {
      const content = `
      <ul>
      <li id='logoutBtn' class='menuItem'>Logout</li>
      <p id='todoLength'>${store2.getTodoItems().length}</p>
      </ul>
      `;
      $header.innerHTML = content;
    } else {
      const content = `
      <ul>
      <li class="menuItem">Home</li>
      <li class="menuItem">Login</li>
      </ul>
      `;
      $header.innerHTML = content;
    }
    if ($app) {
      $app.insertBefore($header, $app.firstChild);
    }
  }

  handleLogout() {
    this.logoutBtn = document.querySelector("#logoutBtn");
    if (this.logoutBtn) {
      this.logoutBtn.addEventListener("click", async (e: Event) => {
        e.preventDefault();
        await auth.logout();
        await main.render();
      });
    }
  }

  changePathname() {
    document.querySelectorAll(".menuItem").forEach((item) => {
      item.addEventListener("click", (e: Event) => {
        e.preventDefault();
        if (item instanceof HTMLElement) {
          let pathname = item.innerText.toLowerCase();
          if (pathname === "logout") {
            pathname = "home";
          }
          window.history.pushState({}, "", pathname);
          main.render();
        }
      });
    });
  }
}

export const header = new Header();
