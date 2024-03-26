import { $app, $header, main } from "../main";
import { auth } from "../utils/auth";
import LocalStorageUtil from "../utils/localStorage";

const LocalStorageAction = new LocalStorageUtil();

class Header {
  logoutBtn;
  constructor() {
    // this.isAccept = LocalStorageAction.storage("get", "isAccept") === "true";
    // LocalStorageAction.storage("set", "isAccept", this.isAccept);
    // this.setContent();
  }

  setContent() {
    let isAccept = LocalStorageAction.storage("get", "isAccept");

    if (isAccept === "true") {
      const content = `
      <ul>
      <li id='logoutBtn' class='menuItem'>Logout</li>
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
    $app.appendChild($header);

    this.handleLogout();

    this.changePathname();
  }

  handleLogout() {
    this.logoutBtn = document.querySelector("#logoutBtn");
    if (this.logoutBtn) {
      this.logoutBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        await auth.logout();
        await main.render();
      });
    }
  }

  changePathname() {
    document.querySelectorAll(".menuItem").forEach((item) => {
      item.addEventListener("click", (e) => {
        let pathname = e.target.innerText.toLowerCase();
        if (pathname === "logout") {
          pathname = "home";
        }
        console.log(pathname);
        window.history.pushState({}, "", pathname);
        main.render();
      });
    });
  }
}

export const header = new Header();
