import { $app, $header, main } from "../main";
import { TodoItem, store } from "../store/store";
import { store2 } from "../store/store2";
import { auth } from "../utils/auth";
import LocalStorageUtil from "../utils/localStorage";

const LocalStorageAction = new LocalStorageUtil();

class Header {
  logoutBtn: Element | null | undefined;
  todoLength: number;
  todoLengthElement: Element | null | undefined;
  // headerAppended: boolean;

  constructor() {
    // this.headerAppended = false;
    // this.todoLength = 0;
    this.todoLength = store2.getTodoItems().length;
    store2.addObserver(this.updateTodoLength.bind(this));
  }

  render() {
    this.setContent();
    this.handleLogout();
    this.changePathname();
  }

  updateTodoLength() {
    const todoItems = store2.getTodoItems();
    this.todoLengthElement = document.getElementById("todoLength");
    if (this.todoLengthElement) {
      this.todoLengthElement.textContent = todoItems.length.toString();
    }
  }

  setContent() {
    let isAccept = LocalStorageAction.storage("get", "isAccept");
    // let todoArr = store.get("todoArr");
    if (isAccept === "true" && window.location.pathname === "/todo") {
      const content = `
      <ul>
      <li id='logoutBtn' class='menuItem'>Logout</li>
      <p id='todoLength'>${this.todoLength}</p>
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
  setTodoListLength() {
    // let todoList: TodoItem[] = store.get("todoArr");\
    let todoList: TodoItem[] = store2.getTodoItems();
    // this.todoLength = todoList.length;
    this.todoLengthElement = document.getElementById("todoLength");
    if (this.todoLengthElement) {
      this.todoLengthElement.textContent = this.todoLength.toString();
    }
  }
}

export const header = new Header();
