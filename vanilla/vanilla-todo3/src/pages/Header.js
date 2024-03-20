export default class Header {
  constructor($target) {
    this.$target = $target;
    this.render();
  }
  addMenu() {
    const $header = document.createElement("header");
    console.log("header", $header);

    const $menu = document.createElement("ul");
    const $home = document.createElement("li");
    $home.className = "homeMenu";
    $home.textContent = "Home";
    const $login = document.createElement("li");
    $login.className = "loginMenu";
    $login.textContent = "Login";

    $menu.append($home, $login);
    $header.append($menu);
    this.$target.appendChild($header);
  }
  handleClick() {
    console.log("click", this.target);
    this.$target.addEventListener("click", (e) => {
      console.log("click", e.target);
      if (e.target.className === "homeMenu") {
        console.log("home");
        location.href = "/";
        
      } else if (e.target.className === "loginMenu") {
        console.log("login");
        location.href = "/login";
      }
    });
  }

  render() {
    this.addMenu();
    this.handleClick();
  }
}
