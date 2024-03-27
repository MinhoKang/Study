import { $app, $header, main } from "../main";
import { todoSlice } from "../store/todoSlice";
import { auth } from "../utils/auth";
import LocalStorageUtil from "../utils/localStorage";

const LocalStorageAction = new LocalStorageUtil();

class Header {
  logoutBtn: Element | null | undefined;
  headerAppended: boolean;

  constructor() {
    this.headerAppended = false;
    // this.handleTodoArrChange = this.handleTodoArrChange.bind(this);
    document.addEventListener(
      "todoArrChange",
      this.handleTodoArrChange.bind(this) as EventListener
    );
  }

  handleTodoArrChange(e: CustomEvent) {
    const todoArrLength = e.detail.length;
    this.setContent(todoArrLength);
  }

  render() {
    this.setContent();
    this.handleLogout();
    this.changePathname();
  }

  setContent(todoArrLength?: string) {
    let isAccept = LocalStorageAction.storage("get", "isAccept");

    if (isAccept === "true" && window.location.pathname === "/todo") {
      const content = `
      <ul>
      <li id='logoutBtn' class='menuItem'>Logout</li>
      <div>${todoArrLength ? todoArrLength : todoSlice.todoArr.length}</div>
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
      // $app.appendChild($header);
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
