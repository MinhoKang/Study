import Main, { $app, $header } from "../main";
import LocalStorageUtil from "../utils/localStorage";

const LocalStorageAction = new LocalStorageUtil();

class Header {
  constructor() {
    this.isAccept = LocalStorageAction.storage("get", "isAccept") === "true";
    LocalStorageAction.storage("set", "isAccept", this.isAccept);
  }

  render() {}

  setContent() {
    const isAccept = LocalStorageAction.storage("get", "isAccept");

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
  }

  changePathname() {
    document.querySelectorAll(".menuItem").forEach((item) => {
      item.addEventListener("click", (e) => {
        const pathname = e.target.innerText.toLowerCase();
        window.history.pushState({}, "", pathname);
        new Main().render();
      });
    });
  }
}

export const header = new Header();
