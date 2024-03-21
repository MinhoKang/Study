export default class Header {
  constructor() {}
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
    console.log("헤더");
    return content;
  }
  changePathname() {
    console.log("changePathname");
    document.querySelectorAll(".menuItem").forEach((item) => {
      item.addEventListener("click", (e) => {
        const pathname = e.target.innerText.toLowerCase();
        console.log("pathname", pathname);
        window.history.pushState({}, "", pathname);
        console.log("pathname", pathname);
      });
    });
  }
}
