export default class Login {
  constructor($target) {
    this.$target = $target;
  }
  render() {
    this.setContent();
  }
  setContent() {
    this.$target.innerHTML = `<h1>Login</h1>`;
    console.log("로그인");
  }
}
