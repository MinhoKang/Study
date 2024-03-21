export default class Login {
  constructor() {}
  render() {
    return this.setContent();
  }
  setContent() {
    const content = `<h1>Login</h1>`;
    console.log("컨텐츠", content);

    console.log("로그인");
    return content;
  }
}
