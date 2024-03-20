export default class Login {
  constructor($target) {
    this.$target = $target;
    this.render();
  }
  render() {
    const $login = document.createElement("div");
    $login.className = "login";
    $login.innerHTML = `
        <h1>Login</h1>
        <form>
        <input type="text" placeholder="Username" autoComplete='on' required/>
        <input type="password" placeholder="Password" autoComplete='on' required/>
        <button class='loginBtn'>Login</button>
        </form>
        `;
    this.$target.appendChild($login);
  }
}
