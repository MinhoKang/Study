import Main from "../main";

const $app = document.querySelector("#app");

export default class Header {
  constructor() {
    
  }
  render() {
    return this.setContent();
  }
  setContent() {
    const content = `
    <ul>
    <li class="menuItem">Home</li>
    <li class="menuItem">Login</li>
    </ul>
    `;
    return content;
  }
  changePathname() {
    document.querySelectorAll(".menuItem").forEach((item) => {
      item.addEventListener("click", (e) => {
        const pathname = e.target.innerText.toLowerCase();
        window.history.pushState({}, "", pathname);
        $app.innerHTML = "";
        new Main().render();
      });
    });
  }
}
