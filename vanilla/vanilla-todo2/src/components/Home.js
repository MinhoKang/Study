import { component } from "../app";

export class Home extends Component {
  constructor($target) {
    super($target);
    this.login();
  }
  template() {
    return `
          <h1>Home</h1>
          <form>
          <label for="id">
            Username
            <input type="text" id="id" name="id" autoComplete='on' required/>
          </label>
          <label for="password">
            Password
            <input type="password" id="password" name="password" autoComplete='on' required/>
          </label>
          <button class='loginBtn' data-path="/login">Login</button>
          </form>

          `;
  }

  login() {
    this.$target.addEventListener("click", (event) => {
      if (event.target.classList.contains("loginBtn")) {
        event.preventDefault();
        history.pushState({}, "", "/login");
        console.log("login");
      }
    });
    // Component.prototype.route = "todo";
  }
}
